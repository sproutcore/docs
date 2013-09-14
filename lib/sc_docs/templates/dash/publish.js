/** Called automatically by JsDoc Toolkit. */
function publish(symbolSet) {
  dashBundleRef = "sproutcore.docset/Contents"
  publish.conf = {  // trailing slash expected for dirs
    ext:         ".html",
    rootDir:     JSDOC.opt.d || SYS.pwd+"../out/jsdoc/",
    bundleRef: dashBundleRef,
    outDir:      ( JSDOC.opt.d || SYS.pwd+"../out/jsdoc/" ) +  dashBundleRef + "/Resources/Documents/",
    templatesDir: JSDOC.opt.t || SYS.pwd+"../templates/jsdoc/",
    symbolsDir:  "symbols/",
    srcDir:      "symbols/src/"
  };

  // is source output is suppressed, just display the links to the source file
  if (JSDOC.opt.s && defined(Link) && Link.prototype._makeSrcLink) {
    Link.prototype._makeSrcLink = function(srcFilePath) {
      return "&lt;"+srcFilePath+"&gt;";
    }
  }

  // create the folders and subfolders to hold the output
  IO.mkPath((publish.conf.outDir+"symbols/src").split("/"));

  // used to allow Link to check the details of things being linked to
  Link.symbolSet = symbolSet;

  // create the required templates
  try {
    var classTemplate = new JSDOC.JsPlate(publish.conf.templatesDir+"class.tmpl");
    var classesTemplate = new JSDOC.JsPlate(publish.conf.templatesDir+"allclasses.tmpl");
  }
  catch(e) {
    print("Couldn't create the required templates: "+e);
    quit();
  }

  // some ustility filters
  function hasNoParent($) {return ($.memberOf == "")}
  function isaFile($) {return ($.is("FILE"))}
  function isaClass($) {return ($.is("CONSTRUCTOR") || $.isNamespace)}

  // get an array version of the symbolset, useful for filtering
  var symbols = symbolSet.toArray();

  // create the hilited source code files
  var files = JSDOC.opt.srcFiles;
   for (var i = 0, l = files.length; i < l; i++) {
     var file = files[i];
     var srcDir = publish.conf.outDir + "symbols/src/";
    makeSrcFile(file, srcDir);
   }

  // fix source file paths
  for (var i = 0, l = symbols.length; i < l; i++) {
    var symbol = symbols[i];
    var srcFilePath = symbol.srcFile;
    var ref = "frameworks/sproutcore/frameworks/";
    var refIdx = srcFilePath.indexOf( ref );
    var fileName = refIdx > 0 ? srcFilePath.substring( refIdx + ref.length ) : srcFilePath;

    symbol.useSrcPath = fileName;
  }

   // get a list of all the classes in the symbolset
   var classes = symbols.filter(isaClass).sort(makeSortby("alias"));

  // create a filemap in which outfiles must be to be named uniquely, ignoring case
  if (JSDOC.opt.u) {
    var filemapCounts = {};
    Link.filemap = {};
    for (var i = 0, l = classes.length; i < l; i++) {
      var lcAlias = classes[i].alias.toLowerCase();

      if (!filemapCounts[lcAlias]) filemapCounts[lcAlias] = 1;
      else filemapCounts[lcAlias]++;

      Link.filemap[classes[i].alias] =
        (filemapCounts[lcAlias] > 1)?
        lcAlias+"_"+filemapCounts[lcAlias] : lcAlias;
    }
  }

  // create a class index, displayed in the left-hand column of every class page
  Link.base = "../";
   publish.classesIndex = classesTemplate.process(classes); // kept in memory

  // create each of the class pages
  for (var i = 0, l = classes.length; i < l; i++) {
    var symbol = classes[i];

    symbol.events = symbol.getEvents();   // 1 order matters
    symbol.methods = symbol.getMethods(); // 2

    var output = "";
    output = classTemplate.process(symbol);

    IO.saveFile(publish.conf.outDir+"symbols/", ((JSDOC.opt.u)? Link.filemap[symbol.alias] : symbol.alias) + publish.conf.ext, output);
  }

  // regenerate the index with different relative links, used in the index pages
  Link.base = "";
  publish.classesIndex = classesTemplate.process(classes);

  // create the class index page
  try {
    var classesindexTemplate = new JSDOC.JsPlate(publish.conf.templatesDir+"index.tmpl");
  }
  catch(e) { print(e.message); quit(); }

  var classesIndex = classesindexTemplate.process(classes);
  IO.saveFile(publish.conf.outDir, "index"+publish.conf.ext, classesIndex);
  classesindexTemplate = classesIndex = classes = null;

  classes = symbols.filter(isaClass).sort(makeSortby("alias"));
  saveDashIndex( classes, publish.conf );
}


/** Just the first sentence (up to a full stop). Should not break on dotted variable names. */
function summarize(desc) {
  if (typeof desc != "undefined")
    return desc.match(/([\w\W]+?\.)[^a-z0-9_$]/i)? RegExp.$1 : desc;
}

/** Make a symbol sorter by some attribute. */
function makeSortby(attribute) {
  return function(a, b) {
    if (a[attribute] != undefined && b[attribute] != undefined) {
      a = a[attribute].toLowerCase();
      b = b[attribute].toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
  }
}

/** Pull in the contents of an external file at the given path. */
function include(path) {
  var path = publish.conf.templatesDir+path;
  return IO.readFile(path);
}

/** Turn a raw source file into a code-hilited page in the docs. */
function makeSrcFile(path, srcDir, name) {
  if (JSDOC.opt.s) return;
  if( path.indexOf( "/tests/" ) > 0 ) return; //ignore tests

  if (!name) {
    var ref = "frameworks/sproutcore/frameworks/";
    var refIdx = path.indexOf( ref );

    name = refIdx > 0 ? path.substring( refIdx + ref.length ) : path;
    name = name.replace(/\.\.?[\\\/]/g, "").replace(/[\\\/]/g, "_").replace(/\:/g, "_");
  }

  var src = {path: path, name:name, charset: IO.encoding, hilited: ""};

  if (defined(JSDOC.PluginManager)) {
    JSDOC.PluginManager.run("onPublishSrc", src);
  }

  if (src.hilited) {
    IO.saveFile(srcDir, name+publish.conf.ext, src.hilited);
  }
}

/** Build output for displaying function parameters. */
function makeSignature(params) {
  if (!params) return "()";
  var signature = "("
  +
  params.filter(
    function($) {
      return $.name.indexOf(".") == -1; // don't show config params in signature
    }
  ).map(
    function($) {
      return $.name;
    }
  ).join(", ")
  +
  ")";
  return signature;
}

/** Find symbol {@link ...} strings in text and turn into html links */
function resolveLinks(str, from) {
  str = str.replace(/\{@link ([^} ]+) ?\}/gi,
    function(match, symbolName) {
      return new Link().toSymbol(symbolName);
    }
  );

  return str;
}

function  saveDashIndex( classes, conf )
{
  print( "Generating sqlite index database" );

  var methodLinkPrefix = "#//apple_ref/cpp/Method/";
  var propertyLinkPrefix = "#//apple_ref/cpp/Property/";
  var eventLinkPrefix = "#//apple_ref/cpp/Event/";
  var result = "CREATE TABLE searchIndex(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, type TEXT, path TEXT);\n" +
               "CREATE UNIQUE INDEX anchor ON searchIndex (name, type, path);\n";

  for( var i = 0; i < classes.length; ++i )
  {
    var clazz = classes[ i ];
    var memberOf = clazz.memberOf;
    var cName = clazz.name;
    var ownProperties = clazz.properties.filter(function($){return $.memberOf == clazz.alias && !$.isNamespace});
    var ownMethods = clazz.methods.filter(function($){return $.memberOf == clazz.alias && !$.isNamespace}).sort(makeSortby("name"));
    var ownEvents = clazz.events.filter(function($){return $.memberOf == clazz.alias && !$.isNamespace}).sort(makeSortby("name"));
    var classPath = "symbols/" + ((JSDOC.opt.u)? Link.filemap[clazz.alias] : clazz.alias) + conf.ext;
    var classScript = "";
    var isGlobal = false;
    var t;

    if( memberOf )
      cName = memberOf + "." + clazz.name;
    else if( cName == "_global_" )
    {
      isGlobal = true;
      cName = "";
    }

    if( !isGlobal )
    {
      var classType = "";

      if (clazz.isNamespace) {
        var srcFile = (typeof clazz.srcFile === 'string') ? clazz.useSrcPath || clazz.srcFile : '';

        if (clazz.is('FUNCTION')) {
          classType = "Function";
        } else if (srcFile.match(/\/protocols\//)) {
          classType = "Protocol";
        } else if (srcFile.match(/\/mixins\//)) {
          classType = "Mixin";
        } else if (srcFile.match(/\/delegates\//)) {
          classType = "Class";//"Delegate";
        } else if (clazz.isSingleton) {
          classType = "Instance";//"Singleton";
        } else if (clazz.isBuiltin()) {
          classType = "Type";//"Built-in";
        } else {
          classType = "Namespace";
        }
      } else {
        classType = "Class";
      }

      classScript += insertToSearchIndex( cName, classType, classPath );
    }

    t = "";
    for( var m = 0; m < ownProperties.length; ++m )
    {
      var symbol = ownProperties[ m ];
      var sName = isGlobal ? symbol.name : ( cName + "." + symbol.name );
      var type = isGlobal ? "Global" : "Property";
      var path = classPath + propertyLinkPrefix + symbol.name;

      t += insertToSearchIndex( sName, type, path );
    }
    classScript += t;

    t = "";
    for( var m = 0; m < ownMethods.length; ++m )
    {
      var symbol = ownMethods[ m ];
      var sName = isGlobal ? symbol.name : ( cName + "." + symbol.name );
      var type = isGlobal ? "Global" : "Method";
      var path = classPath + methodLinkPrefix + symbol.name;

      t += insertToSearchIndex( sName, type, path );
    }
    classScript += t;

    t = "";
    for( var m = 0; m < ownEvents.length; ++m )
    {
      var symbol = ownEvents[ m ];
      var sName = isGlobal ? symbol.name : ( cName + "." + symbol.name );
      var type = isGlobal ? "Global" : "Event";
      var path = classPath + eventLinkPrefix + symbol.name;

      t += insertToSearchIndex( sName, type, path );
    }
    classScript += t;

    result += classScript;
  }

  IO.saveFile(conf.rootDir, "index.sql", result);

  var cmd = "cat " + conf.rootDir + "index.sql | sqlite3 " + conf.rootDir + conf.bundleRef + "/Resources/docSet.dsidx"

  SYS.exec( cmd, function(){} );
}

function insertToSearchIndex( name, type, path )
{
  return "INSERT OR IGNORE INTO searchIndex(name, type, path) VALUES ('" + name + "', '" + type + "', '" + path + "');\n";
}