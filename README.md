SproutCore Documentation Generator
==================================


## NOTE Tyler Keating

I had a terrible time getting the docs to build.  I had to patch jsdoc, replacing
"var Script = process.binding('evals').Script;" with "var vm = require('vm');" and
"Script.runInThisContext(fs.readFileSync(file), file);" with
"vm.runInThisContext(fs.readFileSync(file), file);" in the installed jsdoc run.js
file.

NOTE: If you install it from RubyGems it will not work. To install the gem, you 
should build it locally:

$ gem build sc_docs.gemspec

and then install it:

$ gem install sc-docs-0.0.3.gem 



Previewed the docs with:

sc-docs preview frameworks/sproutcore -t lib/sc_docs/templates/docs.sproutcore.com/

Built the docs with:

sc-docs generate frameworks/sproutcore -o output -t lib/sc_docs/templates/docs.sproutcore.com/

And then copied the output into my clone of git@github.com:sproutcore-docs/sproutcore-docs.github.com.git
It's important not to build directly into the build repo working copy, because
sc-docs removes the contents of the output directory before building.



A tool to generate documentation for the SproutCore framework and SproutCore projects, using the JSDoc format.

**Authors**: Majd Taby, Peter Wagenet

Usage
-----

    gem install sc-docs

*NOTE: If you are not using the latest version of SproutCore, the
built-in sc-docs command may conflict. This has been fixed in the newest
versions of SC.*

### Basic

    sc-docs preview INPUT_DIRECTORY_PATH

This documents the specified directory and then runs a preview sc-server instance.

### Deploy

    sc-docs generate INPUT_DIRECTORY_PATH -o OUTPUT_DIRECTORY_PATH

The generate command runs sc-build and deploys to the specified directory.

### HTML Templates

    sc-docs generate INPUT_DIRECTORY_PATH -o OUTPUT_DIRECTORY_PATH -t TEMPLATE_PATH


By default sc-docs assumes that you want to generate docs for the SproutCore based Doc Viewer. However, if you pass a template it will generate a standard HTML output.

Dependencies
------------

* **node.js**: We use a special (much faster) version of jsdoc-toolkit that requires node.js.

Templates
---------

### sc_fixture

Generates the docs in JSON format for use within an SC based viewer app.

### docs.sproutcore.com

The template used at docs.sproutcore.com. Designed by Matt Grantham and Ryan Mudryk with additional work by Avrohom Katz.

Credits
------

**jsdoc-toolkit**: Used for the heavy lifting of docs generation

