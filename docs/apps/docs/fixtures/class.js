// ==========================================================================
// Project:   Docs.Class Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Docs */

sc_require('models/class');

Docs.Class.FIXTURES = [
  {
    "guid": 0,
    "name": "_global_",
    "displayName": "_global_",
    "objectType": "symbol",
    "filePath": "",
    "isNamespace": true,
    "isPrivate": false,
    "isStatic": false,
    "author": "",
    "see": [],
    "since": "",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "",
    "methods": [
      {
        "name": "simple",
        "displayName": "simple",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Override to return a set of simple values such as numbers or strings.\n    Return null if your set does not support primitives.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "amt",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "hashes",
        "displayName": "hashes",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Override to return hashes of values if supported.  Or return null.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "amt",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "objects",
        "displayName": "objects",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Override to return observable objects if supported.  Or return null.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "amt",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "expected",
        "displayName": "expected",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns an array of content items in your preferred format.  This will\n    be used whenever the test does not care about the specific object content.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "amt",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "newObject",
        "displayName": "newObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Example of how to implement newObject",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "expected",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "observer",
        "displayName": "observer",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Creates an observer object for use when tracking object modifications.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "validateAfter",
        "displayName": "validateAfter",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Verifies that the passed object matches the passed array.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "",
            "name": "after",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "",
            "name": "observer",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "",
            "name": "lengthDidChange",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "",
            "name": "enumerableDidChange",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "fn",
        "displayName": "fn",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "",
        "exceptions": [],
        "returns": [],
        "params": []
      }
    ],
    "properties": [
      {
        "name": "hashValueKey",
        "displayName": "hashValueKey",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "_global_",
        "overview": "Override with the name of the key we should get/set on hashes",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "objectValueKey",
        "displayName": "objectValueKey",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "_global_",
        "overview": "Override with the name of the key we should get/set on objects",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 4701,
    "name": "Array",
    "displayName": "Array",
    "objectType": "symbol",
    "filePath": "",
    "isNamespace": true,
    "isPrivate": false,
    "isStatic": false,
    "author": "",
    "see": [],
    "since": "",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "",
    "methods": [
      {
        "name": "indexOf",
        "displayName": "Array#indexOf",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the index for a particular object in the index.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index of -1 if not found"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the item to search for"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "startAt",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional starting location to search, default 0"
          }
        ]
      },
      {
        "name": "lastIndexOf",
        "displayName": "Array#lastIndexOf",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the last index for a particular object in the index.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index of -1 if not found"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the item to search for"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "startAt",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional starting location to search, default 0"
          }
        ]
      },
      {
        "name": "copy",
        "displayName": "Array#copy",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Override to return a copy of the receiver.  Default implementation raises\n  an exception.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "copy of receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "deep",
            "isOptional": false,
            "defaultValue": "",
            "desc": "{Boolean} if true, a deep copy of the object should be made"
          }
        ]
      }
    ],
    "properties": []
  },
  {
    "guid": 4702,
    "name": "Function",
    "displayName": "Function",
    "objectType": "symbol",
    "filePath": "",
    "isNamespace": true,
    "isPrivate": false,
    "isStatic": false,
    "author": "",
    "see": [],
    "since": "",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "",
    "methods": [
      {
        "name": "property",
        "displayName": "Function#property",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Indicates that the function should be treated as a computed property.\n\n    Computed properties are methods that you want to treat as if they were\n    static properties.  When you use get() or set() on a computed property,\n    the object will call the property method and return its value instead of\n    returning the method itself.  This makes it easy to create \"virtual\n    properties\" that are computed dynamically from other properties.\n\n    Consider the following example:\n\n          contact = SC.Object.create({\n\n            firstName: \"Charles\",\n            lastName: \"Jolley\",\n\n            // This is a computed property!\n            fullName: function() {\n              return this.getEach('firstName','lastName').compact().join(' ') ;\n            }.property('firstName', 'lastName'),\n\n            // this is not\n            getFullName: function() {\n              return this.getEach('firstName','lastName').compact().join(' ') ;\n            }\n          });\n\n          contact.get('firstName') ;\n          --> \"Charles\"\n\n          contact.get('fullName') ;\n          --> \"Charles Jolley\"\n\n          contact.get('getFullName') ;\n          --> function()\n\n    Note that when you get the fullName property, SproutCore will call the\n    fullName() function and return its value whereas when you get() a property\n    that contains a regular method (such as getFullName above), then the\n    function itself will be returned instead.\n\n    Using Dependent Keys\n    ----\n\n    Computed properties are often computed dynamically from other member\n    properties.  Whenever those properties change, you need to notify any\n    object that is observing the computed property that the computed property\n    has changed also.  We call these properties the computed property is based\n    upon \"dependent keys\".\n\n    For example, in the contact object above, the fullName property depends on\n    the firstName and lastName property.  If either property value changes,\n    any observer watching the fullName property will need to be notified as\n    well.\n\n    You inform SproutCore of these dependent keys by passing the key names\n    as parameters to the property() function.  Whenever the value of any key\n    you name here changes, the computed property will be marked as changed\n    also.\n\n    You should always register dependent keys for computed properties to\n    ensure they update.\n\n    Sometimes you may need to depend on keys that are several objects deep. In\n    that case, you can provide a path to property():\n\n        capitalizedName: function() {\n          return this.getPath('person.fullName').toUpper();\n        }.property('person.firstName')\n\n    This will cause observers of +capitalizedName+ to be fired when either\n    +fullName+ _or_ +person+ changes.\n\n    Using Computed Properties as Setters\n    ---\n\n    Computed properties can be used to modify the state of an object as well\n    as to return a value.  Unlike many other key-value system, you use the\n    same method to both get and set values on a computed property.  To\n    write a setter, simply declare two extra parameters: key and value.\n\n    Whenever your property function is called as a setter, the value\n    parameter will be set.  Whenever your property is called as a getter the\n    value parameter will be undefined.\n\n    For example, the following object will split any full name that you set\n    into a first name and last name components and save them.\n\n          contact = SC.Object.create({\n\n            fullName: function(key, value) {\n              if (value !== undefined) {\n                var parts = value.split(' ') ;\n                this.beginPropertyChanges()\n                  .set('firstName', parts[0])\n                  .set('lastName', parts[1])\n                .endPropertyChanges() ;\n              }\n              return this.getEach('firstName', 'lastName').compact().join(' ');\n            }.property('firstName','lastName')\n\n          }) ;\n\n    Why Use The Same Method for Getters and Setters?\n    ---\n\n    Most property-based frameworks expect you to write two methods for each\n    property but SproutCore only uses one. We do this because most of the time\n    when you write a setter is is basically a getter plus some extra work.\n    There is little added benefit in writing both methods when you can\n    conditionally exclude part of it. This helps to keep your code more\n    compact and easier to maintain.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Function",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the declared function instance"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String...",
            "name": "dependentKeys",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional set of dependent keys"
          }
        ]
      },
      {
        "name": "cacheable",
        "displayName": "Function#cacheable",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "You can call this method on a computed property to indicate that the\n    property is cacheable (or not cacheable).  By default all computed\n    properties are not cached.  Enabling this feature will allow SproutCore\n    to cache the return value of your computed property and to use that\n    value until one of your dependent properties changes or until you\n    invoke propertyDidChange() and name the computed property itself.\n\n    If you do not specify this option, computed properties are assumed to be\n    not cacheable.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Function",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "reciever, useful for chaining calls."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Boolean",
            "name": "aFlag",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optionally indicate cacheable or no, default YES"
          }
        ]
      },
      {
        "name": "idempotent",
        "displayName": "Function#idempotent",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Indicates that the computed property is volatile.  Normally SproutCore\n    assumes that your computed property is idempotent.  That is, calling\n    set() on your property more than once with the same value has the same\n    effect as calling it only once.\n\n    All non-computed properties are idempotent and normally you should make\n    your computed properties behave the same way.  However, if you need to\n    make your property change its return value everytime your method is\n    called, you may chain this to your property to make it volatile.\n\n    If you do not specify this option, properties are assumed to be\n    non-volatile.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Function",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "reciever, useful for chaining calls."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Boolean",
            "name": "aFlag",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optionally indicate state, default to YES"
          }
        ]
      },
      {
        "name": "observes",
        "displayName": "Function#observes",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Declare that a function should observe an object or property at the named \n    path.  Note that the path is used only to construct the observation one time.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Function",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "reciever, useful for chaining calls."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String...",
            "name": "propertyPaths",
            "isOptional": false,
            "defaultValue": "",
            "desc": "A list of strings which indicate the\n      properties being observed"
          }
        ]
      }
    ],
    "properties": []
  },
  {
    "guid": 673,
    "name": "Array",
    "displayName": "SC.Array",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/mixins/array.js",
    "isNamespace": true,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 0.9.0",
    "version": "",
    "deprecated": "",
    "augments": [
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Enumerable"
      }
    ],
    "overview": "This module implements Observer-friendly Array-like behavior.  This mixin is\n  picked up by the Array class as well as other controllers, etc. that want to\n  appear to be arrays.\n\n  Unlike SC.Enumerable, this mixin defines methods specifically for\n  collections that provide index-ordered access to their contents.  When you\n  are designing code that needs to accept any kind of Array-like object, you\n  should use these methods instead of Array primitives because these will\n  properly notify observers of changes to the array.\n\n  Although these methods are efficient, they do add a layer of indirection to\n  your application so it is a good idea to use them only when you need the\n  flexibility of using both true JavaScript arrays and \"virtual\" arrays such\n  as controllers and collections.\n\n  You can use the methods defined in this module to access and modify array\n  contents in a KVO-friendly way.  You can also be notified whenever the\n  membership if an array changes by changing the syntax of the property to\n  .observes('*myProperty.[]') .\n\n  To support SC.Array in your own class, you must override two\n  primitives to use it: replace() and objectAt().\n\n  Note that the SC.Array mixin also incorporates the SC.Enumerable mixin.  All\n  SC.Array-like objects are also enumerable.",
    "methods": [
      {
        "name": "replace",
        "displayName": "SC.Array#replace",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This is one of the primitves you must implement to support SC.Array.  You\n    should replace amt objects started at idx with the objects in the passed\n    array.\n\n    Before mutating the underlying data structure, you must call\n    this.arrayContentWillChange(). After the mutation is complete, you must\n    call arrayContentDidChange() and enumerableContentDidChange().\n\n    NOTE: JavaScript arrays already implement SC.Array and automatically call\n    the correct callbacks.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "idx",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Starting index in the array to replace.  If idx >= length, then append to\n      the end of the array."
          },
          {
            "title": "param",
            "type": "Number",
            "name": "amt",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Number of elements that should be removed from the array, starting at\nidx*."
          },
          {
            "title": "param",
            "type": "Array",
            "name": "objects",
            "isOptional": false,
            "defaultValue": "",
            "desc": "An array of zero or more objects that should be inserted into the array at\nidx*"
          }
        ]
      },
      {
        "name": "indexOf",
        "displayName": "SC.Array#indexOf",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the index for a particular object in the index.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index of -1 if not found"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the item to search for"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "startAt",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional starting location to search, default 0"
          }
        ]
      },
      {
        "name": "lastIndexOf",
        "displayName": "SC.Array#lastIndexOf",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the last index for a particular object in the index.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index of -1 if not found"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the item to search for"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "startAt",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional starting location to search, default 0"
          }
        ]
      },
      {
        "name": "objectAt",
        "displayName": "SC.Array#objectAt",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This is one of the primitives you must implement to support SC.Array.\n    Returns the object at the named index.  If your object supports retrieving\n    the value of an array item using get() (i.e. myArray.get(0)), then you do\n    not need to implement this method yourself.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "idx",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The index of the item to return.  If idx exceeds the current length,\n      return null."
          }
        ]
      },
      {
        "name": "insertAt",
        "displayName": "SC.Array#insertAt",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This will use the primitive replace() method to insert an object at the\n    specified index.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "idx",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index of insert the object at."
          },
          {
            "title": "param",
            "type": "Object",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "object to insert"
          }
        ]
      },
      {
        "name": "removeAt",
        "displayName": "SC.Array#removeAt",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Remove an object at the specified index using the replace() primitive\n    method.  You can pass either a single index, a start and a length or an\n    index set.\n\n    If you pass a single index or a start and length that is beyond the\n    length this method will throw an SC.OUT_OF_RANGE_EXCEPTION",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number|SC.IndexSet",
            "name": "start",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index, start of range, or index set"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "length",
            "isOptional": false,
            "defaultValue": "",
            "desc": "length of passing range"
          }
        ]
      },
      {
        "name": "removeObject",
        "displayName": "SC.Array#removeObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Search the array of this object, removing any occurrences of it.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "object to remove"
          }
        ]
      },
      {
        "name": "removeObjects",
        "displayName": "SC.Array#removeObjects",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Search the array for the passed set of objects and remove any occurrences\n    of the.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.Enumerable",
            "name": "objects",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the objects to remove"
          }
        ]
      },
      {
        "name": "slice",
        "displayName": "SC.Array#slice",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns a new array that is a slice of the receiver.  This implementation\n    uses the observable array methods to retrieve the objects for the new\n    slice.\n\n    If you don't pass in beginIndex and endIndex, it will act as a copy of the\n    array.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "New array with specified slice"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "beginIndex",
            "isOptional": false,
            "defaultValue": "",
            "desc": "{Integer} (Optional) index to begin slicing from."
          },
          {
            "title": "param",
            "type": "",
            "name": "endIndex",
            "isOptional": false,
            "defaultValue": "",
            "desc": "{Integer} (Optional) index to end the slice at."
          }
        ]
      },
      {
        "name": "pushObject",
        "displayName": "SC.Array#pushObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Push the object onto the end of the array.  Works just like push() but it\n    is KVO-compliant.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The passed object"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the objects to push"
          }
        ]
      },
      {
        "name": "pushObjects",
        "displayName": "SC.Array#pushObjects",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Add the objects in the passed numerable to the end of the array.  Defers\n    notifying observers of the change until all objects are added.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.Enumerable",
            "name": "objects",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the objects to add"
          }
        ]
      },
      {
        "name": "popObject",
        "displayName": "SC.Array#popObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Pop object from array or nil if none are left.  Works just like pop() but\n    it is KVO-compliant.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The popped object"
          }
        ],
        "params": []
      },
      {
        "name": "shiftObject",
        "displayName": "SC.Array#shiftObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Shift an object from start of array or nil if none are left.  Works just\n    like shift() but it is KVO-compliant.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The shifted object"
          }
        ],
        "params": []
      },
      {
        "name": "unshiftObject",
        "displayName": "SC.Array#unshiftObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Unshift an object to start of array.  Works just like unshift() but it is\n    KVO-compliant.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The passed object"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object to add"
          }
        ]
      },
      {
        "name": "unshiftObjects",
        "displayName": "SC.Array#unshiftObjects",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds the named objects to the beginning of the array.  Defers notifying\n    observers until all objects have been added.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.Enumerable",
            "name": "objects",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the objects to add"
          }
        ]
      },
      {
        "name": "isEqual",
        "displayName": "SC.Array#isEqual",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Compares each item in the passed array to this one.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "true if they are equal."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Array",
            "name": "ary",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The array you want to compare to"
          }
        ]
      },
      {
        "name": "compact",
        "displayName": "SC.Array#compact",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Generates a new array with the contents of the old array, sans any null\n    values.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The new, compact array"
          }
        ],
        "params": []
      },
      {
        "name": "without",
        "displayName": "SC.Array#without",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Generates a new array with the contents of the old array, sans the passed\n    value.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The new, filtered array"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The value you want to be removed"
          }
        ]
      },
      {
        "name": "uniq",
        "displayName": "SC.Array#uniq",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Generates a new array with only unique values from the contents of the\n    old array.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The new, de-duped array"
          }
        ],
        "params": []
      },
      {
        "name": "max",
        "displayName": "SC.Array#max",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the largest Number in an array of Numbers. Make sure the array\n    only contains values of type Number to get expected result.\n\n    Note: This only works for dense arrays.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": []
      },
      {
        "name": "min",
        "displayName": "SC.Array#min",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the smallest Number in an array of Numbers. Make sure the array\n    only contains values of type Number to get expected result.\n\n    Note: This only works for dense arrays.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": []
      },
      {
        "name": "contains",
        "displayName": "SC.Array#contains",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if object is in the array",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "to look for"
          }
        ]
      },
      {
        "name": "addRangeObserver",
        "displayName": "SC.Array#addRangeObserver",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Creates a new range observer on the receiver.  The target/method callback\n    you provide will be invoked anytime any property on the objects in the\n    specified range changes.  It will also be invoked if the objects in the\n    range itself changes also.\n\n    The callback for a range observer should have the signature:\n\n          function rangePropertyDidChange(array, objects, key, indexes, context)\n\n    If the passed key is '[]' it means that the object itself changed.\n\n    The return value from this method is an opaque reference to the\n    range observer object.  You can use this reference to destroy the\n    range observer when you are done with it or to update its range.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RangeObserver",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "range observer"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.IndexSet",
            "name": "indexes",
            "isOptional": false,
            "defaultValue": "",
            "desc": "indexes to observe"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "object to invoke on change"
          },
          {
            "title": "param",
            "type": "String|Function",
            "name": "method",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the method to invoke"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "context",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional context"
          }
        ]
      },
      {
        "name": "updateRangeObserver",
        "displayName": "SC.Array#updateRangeObserver",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Moves a range observer so that it observes a new range of objects on the\n    array.  You must have an existing range observer object from a call to\n    addRangeObserver().\n\n    The return value should replace the old range observer object that you\n    pass in.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RangeObserver",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the range observer (or a new one)"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.RangeObserver",
            "name": "rangeObserver",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the range observer"
          },
          {
            "title": "param",
            "type": "SC.IndexSet",
            "name": "indexes",
            "isOptional": false,
            "defaultValue": "",
            "desc": "new indexes to observe"
          }
        ]
      },
      {
        "name": "removeRangeObserver",
        "displayName": "SC.Array#removeRangeObserver",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Removes a range observer from the receiver.  The range observer must\n    already be active on the array.\n\n    The return value should replace the old range observer object.  It will\n    usually be null.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RangeObserver",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "updated range observer or null"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.RangeObserver",
            "name": "rangeObserver",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the range observer"
          }
        ]
      },
      {
        "name": "setupEnumerablePropertyChains",
        "displayName": "SC.Array#setupEnumerablePropertyChains",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "For all registered property chains on this object, removed them from objects\n    being removed from the enumerable, and clone them onto newly added objects.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object[]",
            "name": "addedObjects",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the objects being added to the enumerable"
          },
          {
            "title": "param",
            "type": "Object[]",
            "name": "removedObjects",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the objected being removed from the enumerable"
          }
        ]
      },
      {
        "name": "registerDependentKeyWithChain",
        "displayName": "SC.Array#registerDependentKeyWithChain",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Register a property chain to propagate to enumerable content.\n\n    This will clone the property chain to each item in the enumerable,\n    then save it so that it is automatically set up and torn down when\n    the enumerable content changes.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "property",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property being listened for on this object"
          },
          {
            "title": "param",
            "type": "SC._PropertyChain",
            "name": "chain",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the chain to clone to items"
          }
        ]
      },
      {
        "name": "removeDependentKeyWithChain",
        "displayName": "SC.Array#removeDependentKeyWithChain",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Removes a dependent key from the enumerable, and tears it down on\n    all content objects.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "property",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "SC._PropertyChain",
            "name": "chain",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      }
    ],
    "properties": [
      {
        "name": "isSCArray",
        "displayName": "SC.Array#isSCArray",
        "objectType": "property",
        "propertyType": "Boolean",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Array",
        "overview": "Walk like a duck - use isSCArray to avoid conflicts",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 1547,
    "name": "Binding",
    "displayName": "SC.Binding",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/system/binding.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "A binding simply connects the properties of two objects so that whenever the\n  value of one property changes, the other property will be changed also.  You\n  do not usually work with Binding objects directly but instead describe\n  bindings in your class definition using something like:\n\n        valueBinding: \"MyApp.someController.title\"\n\n  This will create a binding from \"MyApp.someController.title\" to the \"value\"\n  property of your object instance automatically.  Now the two values will be\n  kept in sync.\n\n  Customizing Your Bindings\n  ===\n\n  In addition to synchronizing values, bindings can also perform some basic\n  transforms on values.  These transforms can help to make sure the data fed\n  into one object always meets the expectations of that object regardless of\n  what the other object outputs.\n\n  To customize a binding, you can use one of the many helper methods defined\n  on SC.Binding like so:\n\n        valueBinding: SC.Binding.single(\"MyApp.someController.title\")\n\n  This will create a binding just like the example above, except that now the\n  binding will convert the value of MyApp.someController.title to a single\n  object (removing any arrays) before applying it to the \"value\" property of\n  your object.\n\n  You can also chain helper methods to build custom bindings like so:\n\n        valueBinding: SC.Binding.single(\"MyApp.someController.title\").notEmpty(\"(EMPTY)\")\n\n  This will force the value of MyApp.someController.title to be a single value\n  and then check to see if the value is \"empty\" (null, undefined, empty array,\n  or an empty string).  If it is empty, the value will be set to the string\n  \"(EMPTY)\".\n\n  One Way Bindings\n  ===\n\n  One especially useful binding customization you can use is the oneWay()\n  helper.  This helper tells SproutCore that you are only interested in\n  receiving changes on the object you are binding from.  For example, if you\n  are binding to a preference and you want to be notified if the preference\n  has changed, but your object will not be changing the preference itself, you\n  could do:\n\n        bigTitlesBinding: SC.Binding.oneWay(\"MyApp.preferencesController.bigTitles\")\n\n  This way if the value of MyApp.preferencesController.bigTitles changes the\n  \"bigTitles\" property of your object will change also.  However, if you\n  change the value of your \"bigTitles\" property, it will not update the\n  preferencesController.\n\n  One way bindings are almost twice as fast to setup and twice as fast to\n  execute because the binding only has to worry about changes to one side.\n\n  You should consider using one way bindings anytime you have an object that\n  may be created frequently and you do not intend to change a property; only\n  to monitor it for changes. (such as in the example above).\n\n  Adding Custom Transforms\n  ===\n\n  In addition to using the standard helpers provided by SproutCore, you can\n  also defined your own custom transform functions which will be used to\n  convert the value.  To do this, just define your transform function and add\n  it to the binding with the transform() helper.  The following example will\n  not allow Integers less than ten.  Note that it checks the value of the\n  bindings and allows all other values to pass:\n\n        valueBinding: SC.Binding.transform(function(value, binding) {\n          return ((SC.typeOf(value) === SC.T_NUMBER) && (value < 10)) ? 10 : value;\n        }).from(\"MyApp.someController.value\")\n\n  If you would like to instead use this transform on a number of bindings,\n  you can also optionally add your own helper method to SC.Binding.  This\n  method should simply return the value of this.transform(). The example\n  below adds a new helper called notLessThan() which will limit the value to\n  be not less than the passed minimum:\n\n      SC.Binding.notLessThan = function(minValue) {\n        return this.transform(function(value, binding) {\n          return ((SC.typeOf(value) === SC.T_NUMBER) && (value < minValue)) ? minValue : value ;\n        }) ;\n      } ;\n\n  You could specify this in your core.js file, for example.  Then anywhere in\n  your application you can use it to define bindings like so:\n\n        valueBinding: SC.Binding.from(\"MyApp.someController.value\").notLessThan(10)\n\n  Also, remember that helpers are chained so you can use your helper along with\n  any other helpers.  The example below will create a one way binding that\n  does not allow empty values or values less than 10:\n\n        valueBinding: SC.Binding.oneWay(\"MyApp.someController.value\").notEmpty().notLessThan(10)\n\n  Note that the built in helper methods all allow you to pass a \"from\"\n  property path so you don't have to use the from() helper to set the path.\n  You can do the same thing with your own helper methods if you like, but it\n  is not required.\n\n  Creating Custom Binding Templates\n  ===\n\n  Another way you can customize bindings is to create a binding template.  A\n  template is simply a binding that is already partially or completely\n  configured.  You can specify this template anywhere in your app and then use\n  it instead of designating your own custom bindings.  This is a bit faster on\n  app startup but it is mostly useful in making your code less verbose.\n\n  For example, let's say you will be frequently creating one way, not empty\n  bindings that allow values greater than 10 throughout your app.  You could\n  create a binding template in your core.js like this:\n\n        MyApp.LimitBinding = SC.Binding.oneWay().notEmpty().notLessThan(10);\n\n  Then anywhere you want to use this binding, just refer to the template like\n  so:\n\n        valueBinding: MyApp.LimitBinding.beget(\"MyApp.someController.value\")\n\n  Note that when you use binding templates, it is very important that you\n  always start by using beget() to extend the template.  If you do not do\n  this, you will end up using the same binding instance throughout your app\n  which will lead to erratic behavior.\n\n  How to Manually Activate a Binding\n  ===\n\n  All of the examples above show you how to configure a custom binding, but\n  the result of these customizations will be a binding template, not a fully\n  active binding.  The binding will actually become active only when you\n  instantiate the object the binding belongs to.  It is useful however, to\n  understand what actually happens when the binding is activated.\n\n  For a binding to function it must have at least a \"from\" property and a \"to\"\n  property.  The from property path points to the object/key that you want to\n  bind from while the to path points to the object/key you want to bind to.\n\n  When you define a custom binding, you are usually describing the property\n  you want to bind from (such as \"MyApp.someController.value\" in the examples\n  above).  When your object is created, it will automatically assign the value\n  you want to bind \"to\" based on the name of your binding key.  In the\n  examples above, during init, SproutCore objects will effectively call\n  something like this on your binding:\n\n        binding = this.valueBinding.beget().to(\"value\", this) ;\n\n  This creates a new binding instance based on the template you provide, and\n  sets the to path to the \"value\" property of the new object.  Now that the\n  binding is fully configured with a \"from\" and a \"to\", it simply needs to be\n  connected to become active.  This is done through the connect() method:\n\n        binding.connect() ;\n\n  Now that the binding is connected, it will observe both the from and to side\n  and relay changes.\n\n  If you ever needed to do so (you almost never will, but it is useful to\n  understand this anyway), you could manually create an active binding by\n  doing the following:\n\n        SC.Binding.from(\"MyApp.someController.value\")\n         .to(\"MyApp.anotherObject.value\")\n         .connect();\n\n  You could also use the bind() helper method provided by SC.Object. (This is\n  the same method used by SC.Object.init() to setup your bindings):\n\n        MyApp.anotherObject.bind(\"value\", \"MyApp.someController.value\") ;\n\n  Both of these code fragments have the same effect as doing the most friendly\n  form of binding creation like so:\n\n\n        MyApp.anotherObject = SC.Object.create({\n          valueBinding: \"MyApp.someController.value\",\n\n          // OTHER CODE FOR THIS OBJECT...\n\n        }) ;\n\n  SproutCore's built in binding creation method make it easy to automatically\n  create bindings for you.  You should always use the highest-level APIs\n  available, even if you understand how to it works underneath.",
    "methods": [
      {
        "name": "beget",
        "displayName": "SC.Binding#beget",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This is the core method you use to create a new binding instance.  The\n    binding instance will have the receiver instance as its parent which means\n    any configuration you have there will be inherited.\n\n    The returned instance will also have its parentBinding property set to the\n    receiver.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "new binding instance"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "fromPath",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional from path."
          }
        ]
      },
      {
        "name": "builder",
        "displayName": "SC.Binding#builder",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns a builder function for compatibility.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "from",
        "displayName": "SC.Binding#from",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This will set \"from\" property path to the specified value.  It will not\n    attempt to resolve this property path to an actual object/property tuple\n    until you connect the binding.\n\n    The binding will search for the property path starting at the root level\n    unless you specify an alternate root object as the second paramter to this\n    method.  Alternatively, you can begin your property path with either \".\" or\n    \"*\", which will use the root object of the to side be default.  This special\n    behavior is used to support the high-level API provided by SC.Object.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String|Tuple",
            "name": "propertyPath",
            "isOptional": false,
            "defaultValue": "",
            "desc": "A property path or tuple"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "root",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional root object to use when resolving the path."
          }
        ]
      },
      {
        "name": "to",
        "displayName": "SC.Binding#to",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This will set the \"to\" property path to the specified value.  It will not\n   attempt to reoslve this property path to an actual object/property tuple\n   until you connect the binding.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String|Tuple",
            "name": "propertyPath",
            "isOptional": false,
            "defaultValue": "",
            "desc": "A property path or tuple"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "root",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional root object to use when resolving the path."
          }
        ]
      },
      {
        "name": "connect",
        "displayName": "SC.Binding#connect",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Attempts to connect this binding instance so that it can receive and relay\n    changes.  This method will raise an exception if you have not set the\n    from/to properties yet.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": []
      },
      {
        "name": "disconnect",
        "displayName": "SC.Binding#disconnect",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Disconnects the binding instance.  Changes will no longer be relayed.  You\n    will not usually need to call this method.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": []
      },
      {
        "name": "fromPropertyDidChange",
        "displayName": "SC.Binding#fromPropertyDidChange",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Invoked whenever the value of the \"from\" property changes.  This will mark\n    the binding as dirty if the value has changed.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The object that contains the key"
          },
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The name of the property which changed"
          }
        ]
      },
      {
        "name": "toPropertyDidChange",
        "displayName": "SC.Binding#toPropertyDidChange",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Invoked whenever the value of the \"to\" property changes.  This will mark the\n    binding as dirty only if:\n\n    - the binding is not one way\n    - the value does not match the stored transformedBindingValue\n\n    if the value does not match the transformedBindingValue, then it will\n    become the new bindingValue.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The object that contains the key"
          },
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The name of the property which changed"
          }
        ]
      },
      {
        "name": "flushPendingChanges",
        "displayName": "SC.Binding#flushPendingChanges",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Call this method on SC.Binding to flush all bindings with changed pending.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "YES if changes were flushed."
          }
        ],
        "params": []
      },
      {
        "name": "applyBindingValue",
        "displayName": "SC.Binding#applyBindingValue",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This method is called at the end of the Run Loop to relay the changed\n    binding value from one side to the other.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "sync",
        "displayName": "SC.Binding#sync",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Calling this method on a binding will cause it to check the value of the\n    from side of the binding matches the current expected value of the\n    binding. If not, it will relay the change as if the from side's value has\n    just changed.\n\n    This method is useful when you are dynamically connecting bindings to a\n    network of objects that may have already been initialized.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "oneWay",
        "displayName": "SC.Binding#oneWay",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Configures the binding as one way.  A one-way binding will relay changes\n    on the \"from\" side to the \"to\" side, but not the other way around.  This\n    means that if you change the \"to\" side directly, the \"from\" side may have\n    a different value.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "fromPath",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional from path to connect."
          },
          {
            "title": "param",
            "type": "Boolean",
            "name": "aFlag",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Optionally pass NO to set the binding back to two-way"
          }
        ]
      },
      {
        "name": "transform",
        "displayName": "SC.Binding#transform",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds the specified transform function to the array of transform functions.\n\n    The function you pass must have the following signature:\n\n          function(value) {} ;\n\n    It must return either the transformed value or an error object.\n\n    Transform functions are chained, so they are called in order.  If you are\n    extending a binding and want to reset the transforms, you can call\n    resetTransform() first.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Function",
            "name": "transformFunc",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the transform function."
          }
        ]
      },
      {
        "name": "resetTransforms",
        "displayName": "SC.Binding#resetTransforms",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Resets the transforms for the binding.  After calling this method the\n    binding will no longer transform values.  You can then add new transforms\n    as needed.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": []
      },
      {
        "name": "noError",
        "displayName": "SC.Binding#noError",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Specifies that the binding should not return error objects.  If the value\n    of a binding is an Error object, it will be transformed to a null value\n    instead.\n\n    Note that this is not a transform function since it will be called at the\n    end of the transform chain.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "fromPath",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional from path to connect."
          },
          {
            "title": "param",
            "type": "Boolean",
            "name": "aFlag",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optionally pass NO to allow error objects again."
          }
        ]
      },
      {
        "name": "single",
        "displayName": "SC.Binding#single",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds a transform to the chain that will allow only single values to pass.\n    This will allow single values, nulls, and error values to pass through.  If\n    you pass an array, it will be mapped as so:\n\n          [] => null\n          [a] => a\n          [a,b,c] => Multiple Placeholder\n\n    You can pass in an optional multiple placeholder or it will use the\n    default.\n\n    Note that this transform will only happen on forwarded valued.  Reverse\n    values are send unchanged.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "fromPath",
            "isOptional": false,
            "defaultValue": "",
            "desc": "from path or null"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "placeholder",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional placeholder value."
          }
        ]
      },
      {
        "name": "notEmpty",
        "displayName": "SC.Binding#notEmpty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds a transform that will return the placeholder value if the value is\n    null, undefined, an empty array or an empty string.  See also notNull().",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "fromPath",
            "isOptional": false,
            "defaultValue": "",
            "desc": "from path or null"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "placeholder",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional placeholder."
          }
        ]
      },
      {
        "name": "notNull",
        "displayName": "SC.Binding#notNull",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds a transform that will return the placeholder value if the value is\n    null or undefined.  Otherwise it will passthrough untouched.  See also notEmpty().",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "fromPath",
            "isOptional": false,
            "defaultValue": "",
            "desc": "from path or null"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "placeholder",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional placeholder;"
          }
        ]
      },
      {
        "name": "multiple",
        "displayName": "SC.Binding#multiple",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds a transform that will convert the passed value to an array.  If\n    the value is null or undefined, it will be converted to an empty array.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "fromPath",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional from path"
          }
        ]
      },
      {
        "name": "bool",
        "displayName": "SC.Binding#bool",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds a transform to convert the value to a bool value.  If the value is\n    an array it will return YES if array is not empty.  If the value is a string\n    it will return YES if the string is not empty.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "fromPath",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional from path"
          }
        ]
      },
      {
        "name": "and",
        "displayName": "SC.Binding#and",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds a transform that forwards the logical 'AND' of values at 'pathA' and\n    'pathB' whenever either source changes.  Note that the transform acts strictly\n    as a one-way binding, working only in the direction\n\n      'pathA' AND 'pathB' --> value  (value returned is the result of ('pathA' && 'pathB'))\n\n    Usage example where a delete button's 'isEnabled' value is determined by whether\n    something is selected in a list and whether the current user is allowed to delete:\n\n      deleteButton: SC.ButtonView.design({\n        isEnabledBinding: SC.Binding.and('MyApp.itemsController.hasSelection', 'MyApp.userController.canDelete')\n      })",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "pathA",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The first part of the conditional"
          },
          {
            "title": "param",
            "type": "String",
            "name": "pathB",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The second part of the conditional"
          }
        ]
      },
      {
        "name": "or",
        "displayName": "SC.Binding#or",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds a transform that forwards the 'OR' of values at 'pathA' and\n    'pathB' whenever either source changes.  Note that the transform acts strictly\n    as a one-way binding, working only in the direction\n\n      'pathA' AND 'pathB' --> value  (value returned is the result of ('pathA' || 'pathB'))",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "pathA",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The first part of the conditional"
          },
          {
            "title": "param",
            "type": "String",
            "name": "pathB",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The second part of the conditional"
          }
        ]
      },
      {
        "name": "not",
        "displayName": "SC.Binding#not",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds a transform to convert the value to the inverse of a bool value.  This\n    uses the same transform as bool() but inverts it.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "fromPath",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional from path"
          }
        ]
      },
      {
        "name": "isNull",
        "displayName": "SC.Binding#isNull",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds a transform that will return YES if the value is null or undefined, NO otherwise.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "fromPath",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional from path"
          }
        ]
      }
    ],
    "properties": []
  },
  {
    "guid": 674,
    "name": "Comparable",
    "displayName": "SC.Comparable",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/mixins/comparable.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "Implements some standard methods for comparing objects. Add this mixin to\n  any class you create that can compare its instances.\n\n  You should implement the compare() method.",
    "methods": [
      {
        "name": "compare",
        "displayName": "SC.Comparable.compare",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": true,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Override to return the result of the comparison of the two parameters. The\n    compare method should return\n    \n    <pre>\n      -1 if a < b\n       0 if a == b\n       1 if a > b\n    </pre>\n\n\n    Default implementation raises an exception.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Integer",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the result of the comparison"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "a",
            "isOptional": false,
            "defaultValue": "",
            "desc": "{Object} the first object to compare"
          },
          {
            "title": "param",
            "type": "",
            "name": "b",
            "isOptional": false,
            "defaultValue": "",
            "desc": "{Object} the second object to compare"
          }
        ]
      }
    ],
    "properties": [
      {
        "name": "isComparable",
        "displayName": "SC.Comparable.isComparable",
        "objectType": "property",
        "propertyType": "Boolean",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Comparable",
        "overview": "walk like a duck. Indicates that the object can be compared.",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 677,
    "name": "Copyable",
    "displayName": "SC.Copyable",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/mixins/copyable.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "Impelements some standard methods for copying an object.  Add this mixin to\n  any object you create that can create a copy of itself.  This mixin is\n  added automatically to the built-in array.\n\n  You should generally implement the copy() method to return a copy of the\n  receiver.\n\n  Note that frozenCopy() will only work if you also implement SC.Freezable.",
    "methods": [
      {
        "name": "copy",
        "displayName": "SC.Copyable#copy",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Override to return a copy of the receiver.  Default implementation raises\n    an exception.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "copy of receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "deep",
            "isOptional": false,
            "defaultValue": "",
            "desc": "{Boolean} if true, a deep copy of the object should be made"
          }
        ]
      },
      {
        "name": "frozenCopy",
        "displayName": "SC.Copyable#frozenCopy",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "If the object implements SC.Freezable, then this will return a new copy\n    if the object is not frozen and the receiver if the object is frozen.\n\n    Raises an exception if you try to call this method on a object that does\n    not support freezing.\n\n    You should use this method whenever you want a copy of a freezable object\n    since a freezable object can simply return itself without actually\n    consuming more memory.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "copy of receiver or receiver"
          }
        ],
        "params": []
      }
    ],
    "properties": [
      {
        "name": "isCopyable",
        "displayName": "SC.Copyable#isCopyable",
        "objectType": "property",
        "propertyType": "Boolean",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Copyable",
        "overview": "Walk like a duck.  Indicates that the object can be copied.",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 2714,
    "name": "CoreSet",
    "displayName": "SC.CoreSet",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/system/set.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Set"
      }
    ],
    "overview": "CoreSet is just like set but not observable.  If you want to use the set\n  as a simple data structure with no observing, CoreSet is slightly faster\n  and more memory efficient.",
    "methods": [],
    "properties": []
  },
  {
    "guid": 687,
    "name": "Enumerable",
    "displayName": "SC.Enumerable",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/mixins/enumerable.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "This mixin defines the common interface implemented by enumerable objects\n  in SproutCore.  Most of these methods follow the standard Array iteration\n  API defined up to JavaScript 1.8 (excluding language-specific features that\n  cannot be emulated in older versions of JavaScript).\n\n  This mixin is applied automatically to the Array class on page load, so you\n  can use any of these methods on simple arrays.  If Array already implements\n  one of these methods, the mixin will not override them.\n\n  Writing Your Own Enumerable\n  -----\n\n  To make your own custom class enumerable, you need two items:\n\n  1. You must have a length property.  This property should change whenever\n     the number of items in your enumerable object changes.  If you using this\n     with an SC.Object subclass, you should be sure to change the length\n     property using set().\n\n  2. You must implement nextObject().  See documentation.\n\n  Once you have these two methods implemented, apply the SC.Enumerable mixin\n  to your class and you will be able to enumerate the contents of your object\n  like any other collection.\n\n  Using SproutCore Enumeration with Other Libraries\n  -----\n\n  Many other libraries provide some kind of iterator or enumeration like\n  facility.  This is often where the most common API conflicts occur.\n  SproutCore's API is designed to be as friendly as possible with other\n  libraries by implementing only methods that mostly correspond to the\n  JavaScript 1.8 API.",
    "methods": [
      {
        "name": "nextObject",
        "displayName": "SC.Enumerable#nextObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Implement this method to make your class enumerable.\n\n    This method will be called repeatedly during enumeration.  The index value\n    will always begin with 0 and increment monotonically.  You don't have to\n    rely on the index value to determine what object to return, but you should\n    always check the value and start from the beginning when you see the\n    requested index is 0.\n\n    The previousObject is the object that was returned from the last call\n    to nextObject for the current iteration.  This is a useful way to\n    manage iteration if you are tracing a linked list, for example.\n\n    Finally the context parameter will always contain a hash you can use as\n    a \"scratchpad\" to maintain any other state you need in order to iterate\n    properly.  The context object is reused and is not reset between\n    iterations so make sure you setup the context with a fresh state whenever\n    the index parameter is 0.\n\n    Generally iterators will continue to call nextObject until the index\n    reaches the your current length-1.  If you run out of data before this\n    time for some reason, you should simply return undefined.\n\n    The default implementation of this method simply looks up the index.\n    This works great on any Array-like objects.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the next object in the iteration or undefined"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "index",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the current index of the iteration"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "previousObject",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the value returned by the last call to nextObject."
          },
          {
            "title": "param",
            "type": "Object",
            "name": "context",
            "isOptional": false,
            "defaultValue": "",
            "desc": "a context object you can use to maintain state."
          }
        ]
      },
      {
        "name": "firstObject",
        "displayName": "SC.Enumerable#firstObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Helper method returns the first object from a collection.  This is usually\n    used by bindings and other parts of the framework to extract a single\n    object if the enumerable contains only one item.\n\n    If you override this method, you should implement it so that it will\n    always return the same value each time it is called.  If your enumerable\n    contains only one object, this method should always return that object.\n    If your enumerable is empty, this method should return undefined.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object or undefined"
          }
        ],
        "params": []
      },
      {
        "name": "lastObject",
        "displayName": "SC.Enumerable#lastObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Helper method returns the last object from a collection.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object or undefined"
          }
        ],
        "params": []
      },
      {
        "name": "enumerator",
        "displayName": "SC.Enumerable#enumerator",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns a new enumerator for this object.  See SC.Enumerator for\n    documentation on how to use this object.  Enumeration is an alternative\n    to using one of the other iterators described here.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Enumerator",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "an enumerator for the receiver"
          }
        ],
        "params": []
      },
      {
        "name": "forEach",
        "displayName": "SC.Enumerable#forEach",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Iterates through the enumerable, calling the passed function on each\n    item.  This method corresponds to the forEach() method defined in\n    JavaScript 1.6.\n\n    The callback method you provide should have the following signature (all\n    parameters are optional):\n\n          function(item, index, enumerable) ;\n\n    - *item* is the current item in the iteration.\n    - *index* is the current index in the iteration\n    - *enumerable* is the enumerable object itself.\n\n    Note that in addition to a callback, you can also pass an optional target\n    object that will be set as \"this\" on the context.  This is a good way\n    to give your iterator function access to the current object.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Function",
            "name": "callback",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the callback to execute"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the target object to use"
          }
        ]
      },
      {
        "name": "getEach",
        "displayName": "SC.Enumerable#getEach",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Retrieves the named value on each member object.  This is more efficient\n    than using one of the wrapper methods defined here.  Objects that\n    implement SC.Observable will use the get() method, otherwise the property\n    will be accessed directly.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "extracted values"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the key to retrieve"
          }
        ]
      },
      {
        "name": "setEach",
        "displayName": "SC.Enumerable#setEach",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Sets the value on the named property for each member.  This is more\n    efficient than using other methods defined on this helper.  If the object\n    implements SC.Observable, the value will be changed to set(), otherwise\n    it will be set directly.  null objects are skipped.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the key to set"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object to set"
          }
        ]
      },
      {
        "name": "map",
        "displayName": "SC.Enumerable#map",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Maps all of the items in the enumeration to another value, returning\n    a new array.  This method corresponds to map() defined in JavaScript 1.6.\n\n    The callback method you provide should have the following signature (all\n    parameters are optional):\n\n        function(item, index, enumerable) ;\n\n    - *item* is the current item in the iteration.\n    - *index* is the current index in the iteration\n    - *enumerable* is the enumerable object itself.\n\n    It should return the mapped value.\n\n    Note that in addition to a callback, you can also pass an optional target\n    object that will be set as \"this\" on the context.  This is a good way\n    to give your iterator function access to the current object.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The mapped array."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Function",
            "name": "callback",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the callback to execute"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the target object to use"
          }
        ]
      },
      {
        "name": "mapProperty",
        "displayName": "SC.Enumerable#mapProperty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Similar to map, this specialized function returns the value of the named\n    property on all items in the enumeration.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The mapped array."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "name of the property"
          }
        ]
      },
      {
        "name": "filter",
        "displayName": "SC.Enumerable#filter",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns an array with all of the items in the enumeration that the passed\n    function returns YES for. This method corresponds to filter() defined in\n    JavaScript 1.6.\n\n    The callback method you provide should have the following signature (all\n    parameters are optional):\n\n          function(item, index, enumerable) ;\n\n    - *item* is the current item in the iteration.\n    - *index* is the current index in the iteration\n    - *enumerable* is the enumerable object itself.\n\n    It should return the YES to include the item in the results, NO otherwise.\n\n    Note that in addition to a callback, you can also pass an optional target\n    object that will be set as \"this\" on the context.  This is a good way\n    to give your iterator function access to the current object.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "A filtered array."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Function",
            "name": "callback",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the callback to execute"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the target object to use"
          }
        ]
      },
      {
        "name": "sortProperty",
        "displayName": "SC.Enumerable#sortProperty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns an array sorted by the value of the passed key parameters.\n    null objects will be sorted first.  You can pass either an array of keys\n    or multiple parameters which will act as key names",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "one or more key names"
          }
        ]
      },
      {
        "name": "filterProperty",
        "displayName": "SC.Enumerable#filterProperty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns an array with just the items with the matched property.  You\n    can pass an optional second argument with the target value.  Otherwise\n    this will match any property that evaluates to true.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "filtered array"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property to test"
          },
          {
            "title": "param",
            "type": "String",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional value to test against."
          }
        ]
      },
      {
        "name": "find",
        "displayName": "SC.Enumerable#find",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the first item in the array for which the callback returns YES.\n    This method works similar to the filter() method defined in JavaScript 1.6\n    except that it will stop working on the array once a match is found.\n\n    The callback method you provide should have the following signature (all\n    parameters are optional):\n\n          function(item, index, enumerable) ;\n\n    - *item* is the current item in the iteration.\n    - *index* is the current index in the iteration\n    - *enumerable* is the enumerable object itself.\n\n    It should return the YES to include the item in the results, NO otherwise.\n\n    Note that in addition to a callback, you can also pass an optional target\n    object that will be set as \"this\" on the context.  This is a good way\n    to give your iterator function access to the current object.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Found item or null."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Function",
            "name": "callback",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the callback to execute"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the target object to use"
          }
        ]
      },
      {
        "name": "findProperty",
        "displayName": "SC.Enumerable#findProperty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns an the first item with a property matching the passed value.  You\n    can pass an optional second argument with the target value.  Otherwise\n    this will match any property that evaluates to true.\n\n    This method works much like the more generic find() method.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "found item or null"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property to test"
          },
          {
            "title": "param",
            "type": "String",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional value to test against."
          }
        ]
      },
      {
        "name": "every",
        "displayName": "SC.Enumerable#every",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the passed function returns YES for every item in the\n    enumeration.  This corresponds with the every() method in JavaScript 1.6.\n\n    The callback method you provide should have the following signature (all\n    parameters are optional):\n\n          function(item, index, enumerable) ;\n\n    - *item* is the current item in the iteration.\n    - *index* is the current index in the iteration\n    - *enumerable* is the enumerable object itself.\n\n    It should return the YES or NO.\n\n    Note that in addition to a callback, you can also pass an optional target\n    object that will be set as \"this\" on the context.  This is a good way\n    to give your iterator function access to the current object.\n\n    Example Usage:\n\n          if (people.every(isEngineer)) { Paychecks.addBigBonus(); }",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Function",
            "name": "callback",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the callback to execute"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the target object to use"
          }
        ]
      },
      {
        "name": "everyProperty",
        "displayName": "SC.Enumerable#everyProperty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the passed property resolves to true for all items in the\n    enumerable.  This method is often simpler/faster than using a callback.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "filtered array"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property to test"
          },
          {
            "title": "param",
            "type": "String",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional value to test against."
          }
        ]
      },
      {
        "name": "some",
        "displayName": "SC.Enumerable#some",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the passed function returns true for any item in the\n    enumeration. This corresponds with the every() method in JavaScript 1.6.\n\n    The callback method you provide should have the following signature (all\n    parameters are optional):\n\n          function(item, index, enumerable) ;\n\n    - *item* is the current item in the iteration.\n    - *index* is the current index in the iteration\n    - *enumerable* is the enumerable object itself.\n\n    It should return the YES to include the item in the results, NO otherwise.\n\n    Note that in addition to a callback, you can also pass an optional target\n    object that will be set as \"this\" on the context.  This is a good way\n    to give your iterator function access to the current object.\n\n    Usage Example:\n\n          if (people.some(isManager)) { Paychecks.addBiggerBonus(); }",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "A filtered array."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Function",
            "name": "callback",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the callback to execute"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the target object to use"
          }
        ]
      },
      {
        "name": "someProperty",
        "displayName": "SC.Enumerable#someProperty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the passed property resolves to true for any item in the\n    enumerable.  This method is often simpler/faster than using a callback.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "YES"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property to test"
          },
          {
            "title": "param",
            "type": "String",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional value to test against."
          }
        ]
      },
      {
        "name": "reduce",
        "displayName": "SC.Enumerable#reduce",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This will combine the values of the enumerator into a single value. It\n    is a useful way to collect a summary value from an enumeration.  This\n    corresponds to the reduce() method defined in JavaScript 1.8.\n\n    The callback method you provide should have the following signature (all\n    parameters are optional):\n\n          function(previousValue, item, index, enumerable) ;\n\n    - *previousValue* is the value returned by the last call to the iterator.\n    - *item* is the current item in the iteration.\n    - *index* is the current index in the iteration\n    - *enumerable* is the enumerable object itself.\n\n    Return the new cumulative value.\n\n    In addition to the callback you can also pass an initialValue.  An error\n    will be raised if you do not pass an initial value and the enumerator is\n    empty.\n\n    Note that unlike the other methods, this method does not allow you to\n    pass a target object to set as this for the callback.  It's part of the\n    spec. Sorry.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The reduced value."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Function",
            "name": "callback",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the callback to execute"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "initialValue",
            "isOptional": false,
            "defaultValue": "",
            "desc": "initial value for the reduce"
          },
          {
            "title": "param",
            "type": "String",
            "name": "reducerProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": "internal use only.  May not be available."
          }
        ]
      },
      {
        "name": "invoke",
        "displayName": "SC.Enumerable#invoke",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Invokes the named method on every object in the receiver that\n    implements it.  This method corresponds to the implementation in\n    Prototype 1.6.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "return values from calling invoke."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "methodName",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the name of the method"
          },
          {
            "title": "param",
            "type": "Object...",
            "name": "args",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional arguments to pass as well."
          }
        ]
      },
      {
        "name": "invokeWhile",
        "displayName": "SC.Enumerable#invokeWhile",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Invokes the passed method and optional arguments on the receiver elements\n    as long as the methods return value matches the target value.  This is\n    a useful way to attempt to apply changes to a collection of objects unless\n    or until one fails.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "return values from calling invoke."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "targetValue",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the target return value"
          },
          {
            "title": "param",
            "type": "String",
            "name": "methodName",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the name of the method"
          },
          {
            "title": "param",
            "type": "Object...",
            "name": "args",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional arguments to pass as well."
          }
        ]
      },
      {
        "name": "toArray",
        "displayName": "SC.Enumerable#toArray",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Simply converts the enumerable into a genuine array.  The order, of\n    course, is not gauranteed.  Corresponds to the method implemented by\n    Prototype.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the enumerable as an array."
          }
        ],
        "params": []
      },
      {
        "name": "groupBy",
        "displayName": "SC.Enumerable#groupBy",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Converts an enumerable into a matrix, with inner arrays grouped based\n    on a particular property of the elements of the enumerable.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "matrix of arrays"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property to test"
          }
        ]
      }
    ],
    "properties": [
      {
        "name": "isEnumerable",
        "displayName": "SC.Enumerable#isEnumerable",
        "objectType": "property",
        "propertyType": "Boolean",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Enumerable",
        "overview": "Walk like a duck.",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 1729,
    "name": "Enumerator",
    "displayName": "SC.Enumerator",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/system/enumerator.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "An object that iterates over all of the values in an object.\n\n  An instance of this object is returned everytime you call the\n  enumerator() method on an object that implements the SC.Enumerable mixin.\n\n  Once you create an enumerator instance, you can call nextObject() on it\n  until you can iterated through the entire collection.  Once you have\n  exhausted the enumerator, you can reuse it if you want by calling reset().",
    "methods": [
      {
        "name": "nextObject",
        "displayName": "SC.Enumerator#nextObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the next object in the enumeration or undefined when complete.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the next object or undefined"
          }
        ],
        "params": []
      },
      {
        "name": "reset",
        "displayName": "SC.Enumerator#reset",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Resets the enumerator to the beginning.  This is a nice way to reuse\n    an existing enumerator.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": []
      },
      {
        "name": "destroy",
        "displayName": "SC.Enumerator#destroy",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Releases the enumerators enumerable object.  You cannot use this object\n    anymore.  This is not often needed but it is useful when you need to\n    make sure memory gets cleared.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "null"
          }
        ],
        "params": []
      },
      {
        "name": "create",
        "displayName": "SC.Enumerator.create",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": true,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Use this method to manually create a new Enumerator object.  Usually you\n  will not access this method directly but instead call enumerator() on the\n  item you want to enumerate.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Enumerator",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the enumerator"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.Enumerable",
            "name": "enumerableObject",
            "isOptional": false,
            "defaultValue": "",
            "desc": "enumerable object."
          }
        ]
      }
    ],
    "properties": []
  },
  {
    "guid": 1759,
    "name": "Error",
    "displayName": "SC.Error",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/system/error.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Object"
      }
    ],
    "overview": "An error, used to represent an error state.\n\n  Many API's within SproutCore will return an instance of this object whenever\n  they have an error occur.  An error includes an error code, description,\n  and optional human readable label that indicates the item that failed.\n\n  Depending on the error, other properties may also be added to the object\n  to help you recover from the failure.\n\n  You can pass error objects to various UI elements to display the error in\n  the interface. You can easily determine if the value returned by some API is\n  an error or not using the helper SC.ok(value).\n\n  Faking Error Objects\n  ---\n\n  You can actually make any object you want to be treated like an Error object\n  by simply implementing two properties: isError and errorValue.  If you\n  set isError to YES, then calling SC.ok(obj) on your object will return NO.\n  If isError is YES, then SC.val(obj) will return your errorValue property\n  instead of the receiver.",
    "methods": [
      {
        "name": "errorObject",
        "displayName": "SC.Error#errorObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "The original error object.  Normally this will return the receiver.\n    However, sometimes another object will masquarade as an error; this gives\n    you a way to get at the underyling error.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "desc",
        "displayName": "SC.Error.desc",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": true,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Creates a new SC.Error instance with the passed description, label, and\n  code.  All parameters are optional.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Error",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "new error instance."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "description",
            "isOptional": false,
            "defaultValue": "",
            "desc": "{String} human readable description of the error"
          },
          {
            "title": "param",
            "type": "",
            "name": "label",
            "isOptional": false,
            "defaultValue": "",
            "desc": "{String} human readable name of the item with the error"
          },
          {
            "title": "param",
            "type": "",
            "name": "code",
            "isOptional": false,
            "defaultValue": "",
            "desc": "{Number} an error code to use for testing."
          },
          {
            "title": "param",
            "type": "",
            "name": "code",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      }
    ],
    "properties": [
      {
        "name": "code",
        "displayName": "SC.Error#code",
        "objectType": "property",
        "propertyType": "Number",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Error",
        "overview": "error code.  Used to designate the error type.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "message",
        "displayName": "SC.Error#message",
        "objectType": "property",
        "propertyType": "String",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Error",
        "overview": "Human readable description of the error.  This can also be a non-localized\n    key.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "errorValue",
        "displayName": "SC.Error#errorValue",
        "objectType": "property",
        "propertyType": "Object",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Error",
        "overview": "The value the error represents.  This is used when wrapping a value inside\n    of an error to represent the validation failure.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "label",
        "displayName": "SC.Error#label",
        "objectType": "property",
        "propertyType": "String",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Error",
        "overview": "Human readable name of the item with the error.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "isError",
        "displayName": "SC.Error#isError",
        "objectType": "property",
        "propertyType": "Boolean",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Error",
        "overview": "Walk like a duck.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "HAS_MULTIPLE_VALUES",
        "displayName": "SC.Error.HAS_MULTIPLE_VALUES",
        "objectType": "property",
        "propertyType": "Number",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Error",
        "overview": "Standard error code for errors that do not support multiple values.",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 1094,
    "name": "Freezable",
    "displayName": "SC.Freezable",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/mixins/freezable.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "The SC.Freezable mixin implements some basic methods for marking an object\n  as frozen.  Once an object is frozen it should be read only.  No changes\n  may be made the internal state of the object.\n\n  Enforcement\n  ---\n\n  To fully support freezing in your subclass, you must include this mixin and\n  override any method that might alter any property on the object to instead\n  raise an exception.  You can check the state of an object by checking the\n  isFrozen property.\n\n  Although future versions of JavaScript may support language-level freezing\n  object objects, that is not the case today.  Even if an object is freezable,\n  it is still technically possible to modify the object, even though it could\n  break other parts of your application that do not expect a frozen object to\n  change.  It is, therefore, very important that you always respect the\n  isFrozen property on all freezable objects.\n\n  Example\n\n  The example below shows a simple object that implement the SC.Freezable\n  protocol.\n\n        Contact = SC.Object.extend(SC.Freezable, {\n\n          firstName: null,\n\n          lastName: null,\n\n          // swaps the names\n          swapNames: function() {\n            if (this.get('isFrozen')) throw SC.FROZEN_ERROR;\n            var tmp = this.get('firstName');\n            this.set('firstName', this.get('lastName'));\n            this.set('lastName', tmp);\n            return this;\n          }\n\n        });\n\n        c = Context.create({ firstName: \"John\", lastName: \"Doe\" });\n        c.swapNames();  => returns c\n        c.freeze();\n        c.swapNames();  => EXCEPTION\n\n  Copying\n  ---\n\n  Usually the SC.Freezable protocol is implemented in cooperation with the\n  SC.Copyable protocol, which defines a frozenCopy() method that will return\n  a frozen object, if the object implements this method as well.",
    "methods": [
      {
        "name": "freeze",
        "displayName": "SC.Freezable#freeze",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Freezes the object.  Once this method has been called the object should\n    no longer allow any properties to be edited.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "reciever"
          }
        ],
        "params": []
      }
    ],
    "properties": [
      {
        "name": "isFreezable",
        "displayName": "SC.Freezable#isFreezable",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Freezable",
        "overview": "Walk like a duck.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "isFrozen",
        "displayName": "SC.Freezable#isFrozen",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Freezable",
        "overview": "Set to YES when the object is frozen.  Use this property to detect whether\n    your object is frozen or not.",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 1780,
    "name": "Function",
    "displayName": "SC.Function",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/system/function.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "",
    "methods": [
      {
        "name": "property",
        "displayName": "SC.Function#property",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "Function.prototype.property"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "fn",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "",
            "name": "keys",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "cacheable",
        "displayName": "SC.Function#cacheable",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "Function.prototype.cacheable"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "fn",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "",
            "name": "aFlag",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "idempotent",
        "displayName": "SC.Function#idempotent",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "Function.prototype.idempotent"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "fn",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "",
            "name": "aFlag",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "enhance",
        "displayName": "SC.Function#enhance",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "Function.prototype.enhance"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "fn",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "observes",
        "displayName": "SC.Function#observes",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "Function.prototype.observes"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "fn",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "",
            "name": "propertyPaths",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      }
    ],
    "properties": []
  },
  {
    "guid": 1807,
    "name": "IndexSet",
    "displayName": "SC.IndexSet",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/system/index_set.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Enumerable"
      },
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Observable"
      },
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Copyable"
      },
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Freezable"
      }
    ],
    "overview": "A collection of ranges.  You can use an IndexSet to keep track of non-\n  continuous ranges of items in a parent array.  IndexSet's are used for\n  selection, for managing invalidation ranges and other data-propogation.\n\n  Examples\n  ---\n\n        var set = SC.IndexSet.create(ranges) ;\n        set.contains(index);\n        set.add(index, length);\n        set.remove(index, length);\n\n        // uses a backing SC.Array object to return each index\n        set.forEach(function(object) { .. })\n\n        // returns the index\n        set.forEachIndex(function(index) { ... });\n\n        // returns ranges\n        set.forEachRange(function(start, length) { .. });\n\n  Implementation Notes\n  ---\n\n  An IndexSet stores indices on the object.  A positive value great than the\n  index tells you the end of an occupied range.  A negative values tells you\n  the end of an empty range.  A value less than the index is a search\n  accelerator.  It tells you the start of the nearest range.",
    "methods": [
      {
        "name": "create",
        "displayName": "SC.IndexSet#create",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "To create a set, pass either a start and index or another IndexSet.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.IndexSet",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "start",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "Number",
            "name": "length",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "min",
        "displayName": "SC.IndexSet#min",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "The first index included in the set or -1.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "firstObject",
        "displayName": "SC.IndexSet#firstObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the first index in the set .",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "rangeStartForIndex",
        "displayName": "SC.IndexSet#rangeStartForIndex",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the starting index of the nearest range for the specified\n    index.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "starting index"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "index",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "isEqual",
        "displayName": "SC.IndexSet#isEqual",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the passed index set contains the exact same indexes as\n    the receiver.  If you pass any object other than an index set, returns NO.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "another object."
          }
        ]
      },
      {
        "name": "indexBefore",
        "displayName": "SC.IndexSet#indexBefore",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the first index in the set before the passed index or null if\n    there are no previous indexes in the set.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index or -1"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "index",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index to check"
          }
        ]
      },
      {
        "name": "indexAfter",
        "displayName": "SC.IndexSet#indexAfter",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the first index in the set after the passed index or null if\n    there are no additional indexes in the set.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index or -1"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "index",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index to check"
          }
        ]
      },
      {
        "name": "contains",
        "displayName": "SC.IndexSet#contains",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the index set contains the named index",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "start",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index or range"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "length",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional range length"
          }
        ]
      },
      {
        "name": "intersects",
        "displayName": "SC.IndexSet#intersects",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the index set contains any of the passed indexes.  You\n    can pass a single index, a range or an index set.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "start",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index, range, or IndexSet"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "length",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional range length"
          }
        ]
      },
      {
        "name": "without",
        "displayName": "SC.IndexSet#without",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns a new IndexSet without the passed range or indexes.   This is a\n    convenience over simply cloning and removing.  Does some optimizations.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.IndexSet",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "new index set"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "start",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index, range, or IndexSet"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "length",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional range length"
          }
        ]
      },
      {
        "name": "replace",
        "displayName": "SC.IndexSet#replace",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Replace the index set's current content with the passed index set.  This\n    is faster than clearing the index set adding the values again.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.IndexSet",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "start",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index, Range, or another IndexSet"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "length",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional length of range."
          }
        ]
      },
      {
        "name": "add",
        "displayName": "SC.IndexSet#add",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds the specified range of indexes to the set.  You can also pass another\n    IndexSet to union the contents of the index set with the receiver.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.IndexSet",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "start",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index, Range, or another IndexSet"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "length",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional length of range."
          }
        ]
      },
      {
        "name": "remove",
        "displayName": "SC.IndexSet#remove",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Removes the specified range of indexes from the set",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.IndexSet",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "start",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index, Range, or IndexSet"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "length",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional length of range."
          }
        ]
      },
      {
        "name": "clear",
        "displayName": "SC.IndexSet#clear",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Clears the set",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "addEach",
        "displayName": "SC.IndexSet#addEach",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Add all the ranges in the passed array.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "Enumerable",
            "name": "objects",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The list of ranges you want to add"
          }
        ]
      },
      {
        "name": "removeEach",
        "displayName": "SC.IndexSet#removeEach",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Removes all the ranges in the passed array.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "Object...",
            "name": "objects",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The list of objects you want to remove"
          }
        ]
      },
      {
        "name": "clone",
        "displayName": "SC.IndexSet#clone",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Clones the set into a new set.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "inspect",
        "displayName": "SC.IndexSet#inspect",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns a string describing the internal range structure.  Useful for\n    debugging.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "String",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": []
      },
      {
        "name": "forEachRange",
        "displayName": "SC.IndexSet#forEachRange",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Invoke the callback, passing each occuppied range instead of each\n    index.  This can be a more efficient way to iterate in some cases.  The\n    callback should have the signature:\n\n          callback(start, length, indexSet, source) { ... }\n\n    If you pass a target as a second option, the callback will be called in\n    the target context.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.IndexSet",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Function",
            "name": "callback",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The method to run on each iteration"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object to call the callback on"
          }
        ]
      },
      {
        "name": "forEachIn",
        "displayName": "SC.IndexSet#forEachIn",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Invokes the callback for each index within the passed start/length range.\n    Otherwise works just like regular forEach().",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.IndexSet",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "start",
            "isOptional": false,
            "defaultValue": "",
            "desc": "starting index"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "length",
            "isOptional": false,
            "defaultValue": "",
            "desc": "length of range"
          },
          {
            "title": "param",
            "type": "Function",
            "name": "callback",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "lengthIn",
        "displayName": "SC.IndexSet#lengthIn",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Total number of indexes within the specified range.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "count of indexes"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number|SC.IndexSet",
            "name": "start",
            "isOptional": false,
            "defaultValue": "",
            "desc": "index, range object or IndexSet"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "length",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional range length"
          }
        ]
      },
      {
        "name": "indexOf",
        "displayName": "SC.IndexSet#indexOf",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the first index in the set that matches the passed object.  You\n    must have a source property on the set for this to work.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "found index or -1 if not in set"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object to check"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "startAt",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional starting point"
          }
        ]
      },
      {
        "name": "lastIndexOf",
        "displayName": "SC.IndexSet#lastIndexOf",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the last index in the set that matches the passed object.  You\n    must have a source property on the set for this to work.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "found index or -1 if not in set"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object to check"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "startAt",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional starting point"
          }
        ]
      },
      {
        "name": "forEachObject",
        "displayName": "SC.IndexSet#forEachObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Iterates through the objects at each index location in the set.  You must\n    have a source property on the set for this to work.  The callback you pass\n    will be invoked for each object in the set with the following signature:\n\n          function callback(object, index, source, indexSet) { ... }\n\n    If you pass a target, it will be used when the callback is called.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.IndexSet",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Function",
            "name": "callback",
            "isOptional": false,
            "defaultValue": "",
            "desc": "function to invoke."
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional content. otherwise uses window"
          }
        ]
      },
      {
        "name": "addObject",
        "displayName": "SC.IndexSet#addObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds all indexes where the object appears to the set.  If firstOnly is\n    passed, then it will find only the first index and add it.  If  you know\n    the object only appears in the source array one time, firstOnly may make\n    this method faster.\n\n    Requires source to work.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.IndexSet",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object to add"
          },
          {
            "title": "param",
            "type": "Boolean",
            "name": "firstOnly",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Set to true if you can assume that the first\n       match is the only one"
          }
        ]
      },
      {
        "name": "addObjects",
        "displayName": "SC.IndexSet#addObjects",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds any indexes matching the passed objects.  If firstOnly is passed,\n    then only finds the first index for each object.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.IndexSet",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.Enumerable",
            "name": "objects",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the objects to add"
          },
          {
            "title": "param",
            "type": "Boolean",
            "name": "firstOnly",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Set to true if you can assume that the first\n       match is the only one"
          }
        ]
      },
      {
        "name": "removeObject",
        "displayName": "SC.IndexSet#removeObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Removes all indexes where the object appears to the set.  If firstOnly is\n    passed, then it will find only the first index and add it.  If  you know\n    the object only appears in the source array one time, firstOnly may make\n    this method faster.\n\n    Requires source to work.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.IndexSet",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object to add"
          },
          {
            "title": "param",
            "type": "Boolean",
            "name": "firstOnly",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Set to true if you can assume that the first\n       match is the only one"
          }
        ]
      },
      {
        "name": "removeObjects",
        "displayName": "SC.IndexSet#removeObjects",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Removes any indexes matching the passed objects.  If firstOnly is passed,\n    then only finds the first index for each object.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.IndexSet",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.Enumerable",
            "name": "objects",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the objects to add"
          },
          {
            "title": "param",
            "type": "Boolean",
            "name": "firstOnly",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Set to true if you can assume that the first\n       match is the only one"
          }
        ]
      }
    ],
    "properties": [
      {
        "name": "isIndexSet",
        "displayName": "SC.IndexSet#isIndexSet",
        "objectType": "property",
        "propertyType": "Boolean",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.IndexSet",
        "overview": "Walk like a duck.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "length",
        "displayName": "SC.IndexSet#length",
        "objectType": "property",
        "propertyType": "Number",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.IndexSet",
        "overview": "Total number of indexes contained in the set",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "max",
        "displayName": "SC.IndexSet#max",
        "objectType": "property",
        "propertyType": "Number",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.IndexSet",
        "overview": "One greater than the largest index currently stored in the set.  This\n    is sometimes useful when determining the total range of items covering\n    the index set.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "source",
        "displayName": "SC.IndexSet#source",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.IndexSet",
        "overview": "Optionally set the source property on an index set and then you can\n    iterate over the actual object values referenced by the index set.  See\n    indexOf(), lastIndexOf(), forEachObject(), addObject() and removeObject().",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "LOG_OBSERVING",
        "displayName": "SC.IndexSet#LOG_OBSERVING",
        "objectType": "property",
        "propertyType": "Boolean",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.IndexSet",
        "overview": "Usually observing notifications from IndexSet are not useful, so\n    supress them by default.",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 2161,
    "name": "Logger",
    "displayName": "SC.Logger",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/system/logger.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "Colin Campbell, Benedikt Böhm, William Kakes",
    "see": [
      "<a href=\"http://getfirebug.com/logging.html\">Firebug Logging Reference</a>"
    ],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Object"
      }
    ],
    "overview": "Object to allow for safe logging actions, such as using the browser console.\n  In addition to being output to the console, logs can be optionally recorded\n  in memory, to be accessed by your application as appropriate.\n\n  This class also adds in the concept of a “current log level”, which allows\n  your application to potentially determine a subset of logging messages to\n  output and/or record.  The order of levels is:\n\n    -  debug        SC.LOGGER_LEVEL_DEBUG\n    -  info         SC.LOGGER_LEVEL_INFO\n    -  warn         SC.LOGGER_LEVEL_WARN\n    -  error        SC.LOGGER_LEVEL_ERROR\n\n  All messages at the level or “above” will be output/recorded.  So, for\n  example, if you set the level to 'info', all 'info', 'warn', and 'error'\n  messages will be output/recorded, but no 'debug' messages will be.  Also,\n  there are two separate log levels:  one for output, and one for recording.\n  You may wish to only output, say, 'warn' and above, but record everything\n  from 'debug' on up.  (You can also limit the number log messages to record.)\n\n  This mechanism allows your application to avoid needless output (which has a\n  non-zero cost in many browsers) in the general case, but turning up the log\n  level when necessary for debugging.  Note that there can still be a\n  performance cost for preparing log messages (calling {@link String.fmt},\n  etc.), so it’s still a good idea to be selective about what log messages are\n  output even to 'debug', especially in hot code.\n\n  Similarly, you should be aware that if you wish to log objects without\n  stringification — using the {@link SC.Logger.debugWithoutFmt} variants — and\n  you enable recording, the “recorded messages” array will hold onto a\n  reference to the arguments, potentially increasing the amount of memory\n  used.\n\n  As a convenience, this class also adds some shorthand methods to SC:\n\n    -  SC.debug()   ==>   SC.Logger.debug()\n    -  SC.info()    ==>   SC.Logger.info()\n    -  SC.warn()    ==>   SC.Logger.warn()\n    -  SC.error()   ==>   SC.Logger.error()\n\n  …although note that no shorthand versions exist for the less-common\n  functions, such as defining groups.\n\n  The FireFox plugin Firebug was used as a function reference. Please see\n  {@link <a href=\"http://getfirebug.com/logging.html\">Firebug Logging Reference</a>}\n  for further information.",
    "methods": [
      {
        "name": "exists",
        "displayName": "SC.Logger#exists",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Computed property that checks for the existence of the reporter object.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "debug",
        "displayName": "SC.Logger#debug",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Logs a debug message to the console and potentially to the recorded\n    array, provided the respective log levels are set appropriately.\n\n    The first argument must be a string, and if there are any additional\n    arguments, it is assumed to be a format string.  Thus, you can (and\n    should) use it like:\n\n        SC.Logger.debug(\"%@:  My debug message\", this);       // good\n\n    …and not:\n\n        SC.Logger.debug(\"%@:  My debug message\".fmt(this));        // bad\n\n    The former method can be more efficient because if the log levels are set\n    in such a way that the debug() invocation will be ignored, then the\n    String.fmt() call will never actually be performed.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "A",
            "isOptional": false,
            "defaultValue": "",
            "desc": "message or a format string"
          },
          {
            "title": "param",
            "type": "…",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Other arguments to pass to String.fmt() when using a format string"
          }
        ]
      },
      {
        "name": "debugWithoutFmt",
        "displayName": "SC.Logger#debugWithoutFmt",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Logs a debug message to the console and potentially to the recorded\n    array, provided the respective log levels are set appropriately.\n\n    Unlike simply debug(), this method does not try to apply String.fmt() to\n    the arguments, and instead passes them directly to the reporter (and\n    stringifies them if recording).  This can be useful if the browser formats\n    a type in a manner more useful to you than you can achieve with\n    String.fmt().",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String|Array|Function|Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "debugGroup",
        "displayName": "SC.Logger#debugGroup",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Begins a new group in the console and/or in the recorded array provided\n    the respective log levels are set to ouput/record 'debug' messages.\n    Every message after this call (at any log level) will be indented for\n    readability until a matching {@link SC.Logger.debugGroupEnd} is invoked,\n    and you can create as many levels as you want.\n\n    Assuming you are using 'debug' messages elsewhere, it is preferable to\n    group them using this method over simply {@link SC.Logger.group} — the log\n    levels could be set such that the 'debug' messages are never seen, and you\n    wouldn’t want an empty/needless group!\n\n    You can optionally provide a title for the group.  If there are any\n    additional arguments, the first argument is assumed to be a format string.\n    Thus, you can (and should) use it like:\n\n          SC.Logger.debugGroup(\"%@:  My debug group\", this);       // good\n\n    …and not:\n\n          SC.Logger.debugGroup(\"%@:  My debug group\".fmt(this));   // bad\n\n    The former method can be more efficient because if the log levels are set\n    in such a way that the debug() invocation will be ignored, then the\n    String.fmt() call will never actually be performed.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "A title or format string to display above the group"
          },
          {
            "title": "param",
            "type": "…",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Other arguments to pass to String.fmt() when using a format string as the title"
          }
        ]
      },
      {
        "name": "debugGroupEnd",
        "displayName": "SC.Logger#debugGroupEnd",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "SC.Logger.debugGroup"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Ends a group initiated with {@link SC.Logger.debugGroup}, provided the\n    respective output/recording log levels are set appropriately.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "info",
        "displayName": "SC.Logger#info",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Logs an informational message to the console and potentially to the\n    recorded array, provided the respective log levels are set appropriately.\n\n    The first argument must be a string, and if there are any additional\n    arguments, it is assumed to be a format string.  Thus, you can (and\n    should) use it like:\n\n          SC.Logger.info(\"%@:  My info message\", this);       // good\n\n    …and not:\n\n          SC.Logger.info(\"%@:  My info message\".fmt(this));   // bad\n\n    The former method can be more efficient because if the log levels are set\n    in such a way that the info() invocation will be ignored, then the\n    String.fmt() call will never actually be performed.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "A",
            "isOptional": false,
            "defaultValue": "",
            "desc": "message or a format string"
          },
          {
            "title": "param",
            "type": "…",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Other arguments to pass to String.fmt() when using a format string"
          }
        ]
      },
      {
        "name": "infoWithoutFmt",
        "displayName": "SC.Logger#infoWithoutFmt",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Logs an information message to the console and potentially to the recorded\n    array, provided the respective log levels are set appropriately.\n\n    Unlike simply info(), this method does not try to apply String.fmt() to\n    the arguments, and instead passes them directly to the reporter (and\n    stringifies them if recording).  This can be useful if the browser formats\n    a type in a manner more useful to you than you can achieve with\n    String.fmt().",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String|Array|Function|Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "infoGroup",
        "displayName": "SC.Logger#infoGroup",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Begins a new group in the console and/or in the recorded array provided\n    the respective log levels are set to ouput/record 'info' messages.\n    Every message after this call (at any log level) will be indented for\n    readability until a matching {@link SC.Logger.infoGroupEnd} is invoked,\n    and you can create as many levels as you want.\n\n    Assuming you are using 'info' messages elsewhere, it is preferable to\n    group them using this method over simply {@link SC.Logger.group} — the log\n    levels could be set such that the 'info' messages are never seen, and you\n    wouldn’t want an empty/needless group!\n\n    You can optionally provide a title for the group.  If there are any\n    additional arguments, the first argument is assumed to be a format string.\n    Thus, you can (and should) use it like:\n\n          SC.Logger.infoGroup(\"%@:  My info group\", this);       // good\n\n    …and not:\n\n          SC.Logger.infoGroup(\"%@:  My info group\".fmt(this));   // bad\n\n    The former method can be more efficient because if the log levels are set\n    in such a way that the info() invocation will be ignored, then the\n    String.fmt() call will never actually be performed.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "A title or format string to display above the group"
          },
          {
            "title": "param",
            "type": "…",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Other arguments to pass to String.fmt() when using a format string as the title"
          }
        ]
      },
      {
        "name": "infoGroupEnd",
        "displayName": "SC.Logger#infoGroupEnd",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "SC.Logger.infoGroup"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Ends a group initiated with {@link SC.Logger.infoGroup}, provided the\n    respective output/recording log levels are set appropriately.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "warn",
        "displayName": "SC.Logger#warn",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Logs a warning message to the console and potentially to the recorded\n    array, provided the respective log levels are set appropriately.\n\n    The first argument must be a string, and if there are any additional\n    arguments, it is assumed to be a format string.  Thus, you can (and\n    should) use it like:\n\n          SC.Logger.warn(\"%@:  My warning message\", this);       // good\n\n    …and not:\n\n          SC.Logger.warn(\"%@:  My warning message\".fmt(this));   // bad\n\n    The former method can be more efficient because if the log levels are set\n    in such a way that the warn() invocation will be ignored, then the\n    String.fmt() call will never actually be performed.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "A",
            "isOptional": false,
            "defaultValue": "",
            "desc": "message or a format string"
          },
          {
            "title": "param",
            "type": "…",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Other arguments to pass to String.fmt() when using a format string"
          }
        ]
      },
      {
        "name": "warnWithoutFmt",
        "displayName": "SC.Logger#warnWithoutFmt",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Logs a warning message to the console and potentially to the recorded\n    array, provided the respective log levels are set appropriately.\n\n    Unlike simply warn(), this method does not try to apply String.fmt() to\n    the arguments, and instead passes them directly to the reporter (and\n    stringifies them if recording).  This can be useful if the browser formats\n    a type in a manner more useful to you than you can achieve with\n    String.fmt().",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String|Array|Function|Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "warnGroup",
        "displayName": "SC.Logger#warnGroup",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Begins a new group in the console and/or in the recorded array provided\n    the respective log levels are set to ouput/record 'warn' messages.\n    Every message after this call (at any log level) will be indented for\n    readability until a matching {@link SC.Logger.warnGroupEnd} is invoked,\n    and you can create as many levels as you want.\n\n    Assuming you are using 'warn' messages elsewhere, it is preferable to\n    group them using this method over simply {@link SC.Logger.group} — the log\n    levels could be set such that the 'warn' messages are never seen, and you\n    wouldn’t want an empty/needless group!\n\n    You can optionally provide a title for the group.  If there are any\n    additional arguments, the first argument is assumed to be a format string.\n    Thus, you can (and should) use it like:\n\n          SC.Logger.warnGroup(\"%@:  My warn group\", this);       // good\n\n    …and not:\n\n          SC.Logger.warnGroup(\"%@:  My warn group\".fmt(this));   // bad\n\n    The former method can be more efficient because if the log levels are set\n    in such a way that the warn() invocation will be ignored, then the\n    String.fmt() call will never actually be performed.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "A title or format string to display above the group"
          },
          {
            "title": "param",
            "type": "…",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Other arguments to pass to String.fmt() when using a format string as the title"
          }
        ]
      },
      {
        "name": "warnGroupEnd",
        "displayName": "SC.Logger#warnGroupEnd",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "SC.Logger.warnGroup"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Ends a group initiated with {@link SC.Logger.warnGroup}, provided the\n    respective output/recording log levels are set appropriately.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "error",
        "displayName": "SC.Logger#error",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Logs an error message to the console and potentially to the recorded\n    array, provided the respective log levels are set appropriately.\n\n    The first argument must be a string, and if there are any additional\n    arguments, it is assumed to be a format string.  Thus, you can (and\n    should) use it like:\n\n          SC.Logger.error(\"%@:  My error message\", this);       // good\n\n    …and not:\n\n          SC.Logger.warn(\"%@:  My error message\".fmt(this));    // bad\n\n    The former method can be more efficient because if the log levels are set\n    in such a way that the warn() invocation will be ignored, then the\n    String.fmt() call will never actually be performed.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "A",
            "isOptional": false,
            "defaultValue": "",
            "desc": "message or a format string"
          },
          {
            "title": "param",
            "type": "…",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Other arguments to pass to String.fmt() when using a format string"
          }
        ]
      },
      {
        "name": "errorWithoutFmt",
        "displayName": "SC.Logger#errorWithoutFmt",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Logs an error message to the console and potentially to the recorded\n    array, provided the respective log levels are set appropriately.\n\n    Unlike simply error(), this method does not try to apply String.fmt() to\n    the arguments, and instead passes them directly to the reporter (and\n    stringifies them if recording).  This can be useful if the browser formats\n    a type in a manner more useful to you than you can achieve with\n    String.fmt().",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String|Array|Function|Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "errorGroup",
        "displayName": "SC.Logger#errorGroup",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Begins a new group in the console and/or in the recorded array provided\n    the respective log levels are set to ouput/record 'error' messages.\n    Every message after this call (at any log level) will be indented for\n    readability until a matching {@link SC.Logger.errorGroupEnd} is invoked,\n    and you can create as many levels as you want.\n\n    Assuming you are using 'error' messages elsewhere, it is preferable to\n    group them using this method over simply {@link SC.Logger.group} — the log\n    levels could be set such that the 'error' messages are never seen, and you\n    wouldn’t want an empty/needless group!\n\n    You can optionally provide a title for the group.  If there are any\n    additional arguments, the first argument is assumed to be a format string.\n    Thus, you can (and should) use it like:\n\n          SC.Logger.errorGroup(\"%@:  My error group\", this);       // good\n\n    …and not:\n\n          SC.Logger.errorGroup(\"%@:  My error group\".fmt(this));   // bad\n\n    The former method can be more efficient because if the log levels are set\n    in such a way that the error() invocation will be ignored, then the\n    String.fmt() call will never actually be performed.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "A title or format string to display above the group"
          },
          {
            "title": "param",
            "type": "…",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Other arguments to pass to String.fmt() when using a format string as the title"
          }
        ]
      },
      {
        "name": "errorGroupEnd",
        "displayName": "SC.Logger#errorGroupEnd",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "SC.Logger.errorGroup"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Ends a group initiated with {@link SC.Logger.errorGroup}, provided the\n    respective output/recording log levels are set appropriately.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "outputRecordedLogMessages",
        "displayName": "SC.Logger#outputRecordedLogMessages",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This method will output all recorded log messages to the reporter.  This\n    provides a convenient way to see the messages “on-demand” without having\n    to have them always output.  The timestamp of each message will be\n    included as a prefix if you specify 'includeTimestamps' as YES, although\n    in some browsers the native group indenting can make the timestamp\n    formatting less than ideal.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "Boolean",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Whether to include timestamps in the output"
          }
        ]
      },
      {
        "name": "stringifyRecordedLogMessages",
        "displayName": "SC.Logger#stringifyRecordedLogMessages",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This method will return a string representation of all recorded log\n    messages to the reporter, which can be convenient for saving logs and so\n    forth.  The timestamp of each message will be included in the string.\n\n    If there are no recorded log messages, an empty string will be returned\n    (as opposed to null).",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "String",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": []
      },
      {
        "name": "log",
        "displayName": "SC.Logger#log",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Log output to the console, but only if it exists.\n\n    IMPORTANT:  Unlike debug(), info(), warn(), and error(), messages sent to\n    this method do not consult the log level and will always be output.\n    Similarly, they will never be recorded.\n\n    In general, you should avoid this method and instead choose the\n    appropriate categorization for your message, choosing the appropriate\n    method.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Whether or not anything was logged"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String|Array|Function|Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "group",
        "displayName": "SC.Logger#group",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Every log after this call until {@link SC.Logger.groupEnd} is called\n    will be indented for readability.  You can create as many levels\n    as you want.\n\n    IMPORTANT:  Unlike debugGroup(), infoGroup(), warnGroup(), and\n    errorGroup(), this method do not consult the log level and will always\n    result in output when the reporter supports it.  Similarly, group messages\n    logged via this method will never be recorded.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "An optional title to display above the group"
          }
        ]
      },
      {
        "name": "groupEnd",
        "displayName": "SC.Logger#groupEnd",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "SC.Logger.group"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Ends a group declared with {@link SC.Logger.group}.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "dir",
        "displayName": "SC.Logger#dir",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Outputs the properties of an object.\n\n    Logs the object using {@link SC.Logger.log} if the reporter.dir function\n    does not exist.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "dirxml",
        "displayName": "SC.Logger#dirxml",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Prints an XML outline for any HTML or XML object.\n\n    Logs the object using {@link SC.Logger.log} if reporter.dirxml function\n    does not exist.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "profile",
        "displayName": "SC.Logger#profile",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Begins the JavaScript profiler, if it exists. Call {@link SC.Logger.profileEnd}\n    to end the profiling process and receive a report.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "YES if reporter.profile exists, NO otherwise"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "A title to associate with the profile"
          }
        ]
      },
      {
        "name": "profileEnd",
        "displayName": "SC.Logger#profileEnd",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "SC.Logger.profile"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Ends the JavaScript profiler, if it exists.  If you specify a title, the\n    profile with that title will be ended.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "YES if reporter.profileEnd exists, NO otherwise"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "(optional)",
            "isOptional": false,
            "defaultValue": "",
            "desc": "A title to associate with the profile"
          }
        ]
      },
      {
        "name": "time",
        "displayName": "SC.Logger#time",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "SC.Logger.timeEnd"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Measure the time between when this function is called and\n    {@link SC.Logger.timeEnd} is called.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "YES if reporter.time exists, NO otherwise"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "The",
            "isOptional": false,
            "defaultValue": "",
            "desc": "name of the profile to begin"
          }
        ]
      },
      {
        "name": "timeEnd",
        "displayName": "SC.Logger#timeEnd",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "SC.Logger.time"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Ends the profile specified.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "YES if reporter.timeEnd exists, NO otherwise"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "The",
            "isOptional": false,
            "defaultValue": "",
            "desc": "name of the profile to end"
          }
        ]
      },
      {
        "name": "trace",
        "displayName": "SC.Logger#trace",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Prints a stack-trace.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "YES if reporter.trace exists, NO otherwise"
          }
        ],
        "params": []
      }
    ],
    "properties": [
      {
        "name": "logOutputLevel",
        "displayName": "SC.Logger#logOutputLevel",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Logger",
        "overview": "The current log level determining what is output to the reporter object\n    (usually your browser’s console).  Valid values are:\n\n      -  SC.LOGGER_LEVEL_DEBUG\n      -  SC.LOGGER_LEVEL_INFO\n      -  SC.LOGGER_LEVEL_WARN\n      -  SC.LOGGER_LEVEL_ERROR\n      -  SC.LOGGER_LEVEL_NONE\n\n    If you do not specify this value, it will default to SC.LOGGER_LEVEL_DEBUG\n    when running in development mode and SC.LOGGER_LEVEL_INFO when running in\n    production mode.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "logRecordingLevel",
        "displayName": "SC.Logger#logRecordingLevel",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Logger",
        "overview": "The current log level determining what is output to the reporter object\n    (usually your browser’s console).  Valid values are the same as with\n    'logOutputLevel':\n\n      -  SC.LOGGER_LEVEL_DEBUG\n      -  SC.LOGGER_LEVEL_INFO\n      -  SC.LOGGER_LEVEL_WARN\n      -  SC.LOGGER_LEVEL_ERROR\n      -  SC.LOGGER_LEVEL_NONE\n\n    If you do not specify this value, it will default to SC.LOGGER_LEVEL_NONE.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "recordedLogMessages",
        "displayName": "SC.Logger#recordedLogMessages",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Logger",
        "overview": "All recorded log messages.  You generally should not need to interact with\n    this array, as most commonly-used functionality can be achieved via the\n    {@link SC.Logger.outputRecordedLogMessages} and\n    {@link SC.Logger.stringifyRecordedLogMessages} methods.\n\n    This array will be lazily created when the first message is recorded.\n\n    Format:\n\n    For efficiency, each entry in the array is a simple hash rather than a\n    full SC.Object instance.  Furthermore, to minimize memory usage, niceties\n    like “type of entry: message” are avoided; if you need to parse this\n    structure, you can determine which type of entry you’re looking at by\n    checking for the 'message' and 'indentation' fields.\n<pre>\n    Log entry:\n    {\n      type:               {Constant}     (SC.LOGGER_LEVEL_DEBUG, etc.)\n      message:            {String | Boolean}\n      originalArguments:  {Arguments}    // optional\n      timestamp:          {Date}\n    }\n    \n    Group entry (either beginning or end of):\n    {\n      type:         {Constant}     SC.LOGGER_LEVEL_DEBUG, etc.\n      indentation:  {Number}       The value is the new group indentation level\n      beginGroup:   {Boolean}      Whether this entry is the beginning of a new group (as opposed to the end)\n      title:        {String}       Optional for new groups, and never present for end-of-group\n      timestamp:    {Date}\n    }\n</pre>",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "recordedLogMessagesMaximumLength",
        "displayName": "SC.Logger#recordedLogMessagesMaximumLength",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Logger",
        "overview": "If the recording level is set such that messages will be recorded, this is\n    the maximum number of messages that will be saved in the\n    'recordedLogMessages' array.  Any further recorded messages will push\n    older messages out of the array, so the most recent messages will be\n    saved.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "recordedLogMessagesPruningMinimumLength",
        "displayName": "SC.Logger#recordedLogMessagesPruningMinimumLength",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Logger",
        "overview": "If the recording level is set such that messages will be recorded, this is\n    the minimum number of messages that will be saved whenever the recordings\n    are pruned.  (They are pruned whenever you hit the maximum length, as\n    specified via the 'recordedLogMessagesMaximumLength' property.  This\n    mechanism avoids thrashing the array for each log message once the\n    maximum is reached.)  When pruning, the most recent messages will be saved.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "debugEnabled",
        "displayName": "SC.Logger#debugEnabled",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Logger",
        "overview": "Whether or not to enable debug logging.  This property exists for\n    backwards compatibility with previous versions of SC.Logger.  In newer\n    code, you should instead set the appropriate output/recording log levels.\n\n    If this property is set to YES, it will set 'logOutputLevel' to\n    SC.LOGGER_LEVEL_DEBUG.  Otherwise, it will have no effect.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "fallBackOnAlert",
        "displayName": "SC.Logger#fallBackOnAlert",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Logger",
        "overview": "If console.log does not exist, SC.Logger will use window.alert instead\n    when {@link SC.Logger.log} is invoked.\n\n    Note that this property has no effect for messages initiated via the\n    debug/info/warn/error methods, on the assumption that it is better to\n    simply utilize the message recording mechanism than put up a bunch of\n    alerts when there is no browser console.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "reporter",
        "displayName": "SC.Logger#reporter",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Logger",
        "overview": "The reporter is the object which implements the actual logging functions.",
        "defaultValue": "The browser’s console",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 2424,
    "name": "Object",
    "displayName": "SC.Object",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/system/object.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Observable"
      }
    ],
    "overview": "Root object for the SproutCore framework.  SC.Object is the root class for\n  most classes defined by SproutCore.  It builds on top of the native object\n  support provided by JavaScript to provide support for class-like\n  inheritance, automatic bindings, properties observers, and more.\n\n  Most of the classes you define in your application should inherit from\n  SC.Object or one of its subclasses.  If you are writing objects of your\n  own, you should read this documentation to learn some of the details of\n  how SC.Object's behave and how they differ from other frameworks.\n\n  About SproutCore Classes\n  ===\n\n  JavaScript is not a class-based language.  Instead it uses a type of\n  inheritence inspired by self called \"prototypical\" inheritance.\n  ...\n\n  Using SproutCore objects with other JavaScript object.\n  ===\n\n  You can create a SproutCore object just like any other object...\n  obj = new SC.Object() ;",
    "methods": [
      {
        "name": "activate",
        "displayName": "SC.Object#activate",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Registers this segment of the chain with the object it represents.\n\n    This should be called with the object represented by the previous node in\n    the chain as the first parameter. If no previous object is provided, it will\n    assume it is the root node in the chain and treat the target as the previous\n    object.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "newObject",
            "isOptional": true,
            "defaultValue": "",
            "desc": "The object in the chain to hook to."
          }
        ]
      },
      {
        "name": "deactivate",
        "displayName": "SC.Object#deactivate",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Removes this segment of the chain from the object it represents. This is \n    usually called when the object represented by the previous segment in the \n    chain changes.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "notifyPropertyDidChange",
        "displayName": "SC.Object#notifyPropertyDidChange",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Invalidates the +toInvalidate+ property of the +target+ object.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "toString",
        "displayName": "SC.Object#toString",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns a string representation of the chain segment.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "String",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": []
      },
      {
        "name": "mixin",
        "displayName": "SC.Object.mixin",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": true,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds the passed properties to the object's class definition.  You can\n    pass as many hashes as you want, including Mixins, and they will be\n    added in the order they are passed.\n\n    This is a shorthand for calling SC.mixin(MyClass, props...);",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Hash",
            "name": "props",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the properties you want to add."
          }
        ]
      },
      {
        "name": "extend",
        "displayName": "SC.Object.extend",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": true,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Creates a new subclass of the receiver, adding any passed properties to\n    the instance definition of the new class.  You should use this method\n    when you plan to create several objects based on a class with similar\n    properties.\n\n    Init:\n\n    If you define an init() method, it will be called when you create\n    instances of your new class.  Since SproutCore uses the init() method to\n    do important setup, you must be sure to always call sc_super() somewhere\n    in your init() to allow the normal setup to proceed.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Class",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "A new object class"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Hash",
            "name": "props",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the methods of properties you want to add"
          }
        ]
      },
      {
        "name": "create",
        "displayName": "SC.Object.create",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": true,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Creates a new instance of the class.\n\n    Unlike most frameworks, you do not pass parameters to the init function\n    for an object.  Instead, you pass a hash of additional properties you\n    want to have assigned to the object when it is first created.  This is\n    functionally like creating an anonymous subclass of the receiver and then\n    instantiating it, but more efficient.\n\n    You can use create() like you would a normal constructor in a\n    class-based system, or you can use it to create highly customized\n    singleton objects such as controllers or app-level objects.  This is\n    often more efficient than creating subclasses and then instantiating\n    them.\n\n    You can pass any hash of properties to this method, including mixins.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "new instance of the receiver class."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Hash",
            "name": "props",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional hash of method or properties to add to the instance."
          }
        ]
      },
      {
        "name": "subclassOf",
        "displayName": "SC.Object.subclassOf",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": true,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the receiver is a subclass of the named class.  If the\n    receiver is the class passed, this will return NO since the class is not\n    a subclass of itself.  See also kindOf().\n\n    Example:\n\n          ClassA = SC.Object.extend();\n          ClassB = ClassA.extend();\n\n          ClassB.subclassOf(ClassA) => YES\n          ClassA.subclassOf(ClassA) => NO",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Class",
            "name": "scClass",
            "isOptional": false,
            "defaultValue": "",
            "desc": "class to compare"
          }
        ]
      },
      {
        "name": "hasSubclass",
        "displayName": "SC.Object.hasSubclass",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": true,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the passed object is a subclass of the receiver.  This is\n    the inverse of subclassOf() which you call on the class you want to test.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Class",
            "name": "scClass",
            "isOptional": false,
            "defaultValue": "",
            "desc": "class to compare"
          }
        ]
      },
      {
        "name": "kindOf",
        "displayName": "SC.Object.kindOf",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": true,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the receiver is the passed class or is a subclass of the\n    passed class.  Unlike subclassOf(), this method will return YES if you\n    pass the receiver itself, since class is a kind of itself.  See also\n    subclassOf().\n\n    Example:\n\n          ClassA = SC.Object.extend();\n          ClassB = ClassA.extend();\n\n          ClassB.kindOf(ClassA) => YES\n          ClassA.kindOf(ClassA) => YES",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Class",
            "name": "scClass",
            "isOptional": false,
            "defaultValue": "",
            "desc": "class to compare"
          }
        ]
      },
      {
        "name": "design",
        "displayName": "SC.Object.design",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": true,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This method works just like extend() except that it will also preserve\n    the passed attributes.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Class",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "SC.Object subclass to create"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Hash",
            "name": "attrs",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Attributes to add to view"
          }
        ]
      },
      {
        "name": "mixin",
        "displayName": "SC.Object#mixin",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "You can call this method on an object to mixin one or more hashes of\n    properties on the receiver object.  In addition to simply copying\n    properties, this method will also prepare the properties for use in\n    bindings, computed properties, etc.\n\n    If you plan to use this method, you should call it before you call\n    the inherited init method from SC.Object or else your instance may not\n    function properly.\n\n    Example:\n\n          // dynamically apply a mixin specified in an object property\n          var MyClass = SC.Object.extend({\n             extraMixin: null,\n\n             init: function() {\n               this.mixin(this.extraMixin);\n               sc_super();\n             }\n          });\n\n          var ExampleMixin = { foo: \"bar\" };\n\n          var instance = MyClass.create({ extraMixin: ExampleMixin }) ;\n\n          instance.get('foo') => \"bar\"",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Hash",
            "name": "ext",
            "isOptional": false,
            "defaultValue": "",
            "desc": "a hash to copy.  Only one."
          }
        ]
      },
      {
        "name": "init",
        "displayName": "SC.Object#init",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This method is invoked automatically whenever a new object is\n    instantiated.  You can override this method as you like to setup your\n    new object.\n\n    Within your object, be sure to call sc_super() to ensure that the\n    built-in init method is also called or your observers and computed\n    properties may not be configured.\n\n    Although the default init() method returns the receiver, the return\n    value is ignored.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "destroy",
        "displayName": "SC.Object#destroy",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Call this method when you are finished with an object to teardown its\n    contents.  Because JavaScript is garbage collected, you do not usually\n    need to call this method.  However, you may choose to do so for certain\n    objects, especially views, in order to let them reclaim memory they\n    consume immediately.\n\n    If you would like to perform additional cleanup when an object is\n    finished, you may override this method.  Be sure to call sc_super().",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": []
      },
      {
        "name": "respondsTo",
        "displayName": "SC.Object#respondsTo",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the named value is an executable function.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "methodName",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property name to check"
          }
        ]
      },
      {
        "name": "tryToPerform",
        "displayName": "SC.Object#tryToPerform",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Attemps to invoke the named method, passing the included two arguments.\n    Returns NO if the method is either not implemented or if the handler\n    returns NO (indicating that it did not handle the event).  This method\n    is invoked to deliver actions from menu items and to deliver events.\n    You can override this method to provide additional handling if you\n    prefer.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "YES if handled, NO if not handled"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "methodName",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "Object",
            "name": "arg1",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "Object",
            "name": "arg2",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "superclass",
        "displayName": "SC.Object#superclass",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "EXPERIMENTAL:  You can use this to invoke a superclass implementation in\n    any method.  This does not work in Safari 2 or earlier.  If you need to\n    target these methods, you should use one of the alternatives below:\n\n    - *With Build Tools:* sc_super();\n    - *Without Build Tools:* arguments.callee.base.apply(this, arguments);\n\n    Example\n\n    All of the following methods will call the superclass implementation of\n    your method:\n\n          SC.Object.create({\n\n            // DOES NOT WORK IN SAFARI 2 OR EARLIER\n            method1: function() {\n              this.superclass();\n            },\n\n            // REQUIRES SC-BUILD TOOLS\n            method2: function() {\n              sc_super();\n            },\n\n            // WORKS ANYTIME\n            method3: function() {\n              arguments.callee.base.apply(this, arguments);\n            }\n          });",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "return value from super"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "*args",
            "name": "args",
            "isOptional": false,
            "defaultValue": "",
            "desc": "any arguments you want to pass along."
          }
        ]
      },
      {
        "name": "instanceOf",
        "displayName": "SC.Object#instanceOf",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "returns YES if the receiver is an instance of the named class.  See also\n    kindOf().\n\n    Example\n\n          var ClassA = SC.Object.extend();\n          var ClassB = SC.Object.extend();\n\n          var instA = ClassA.create();\n          var instB = ClassB.create();\n\n          instA.instanceOf(ClassA) => YES\n          instB.instanceOf(ClassA) => NO",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Class",
            "name": "scClass",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the class"
          }
        ]
      },
      {
        "name": "kindOf",
        "displayName": "SC.Object#kindOf",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns true if the receiver is an instance of the named class or any\n    subclass of the named class.  See also instanceOf().\n\n    Example\n\n          var ClassA = SC.Object.extend();\n          var ClassB = SC.Object.extend();\n\n          var instA = ClassA.create();\n          var instB = ClassB.create();\n\n          instA.kindOf(ClassA) => YES\n          instB.kindOf(ClassA) => YES",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Class",
            "name": "scClass",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the class"
          }
        ]
      },
      {
        "name": "awake",
        "displayName": "SC.Object#awake",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Activates any outlet connections in object and syncs any bindings.  This\n    method is called automatically for view classes but may be used for any\n    object.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "invokeOnce",
        "displayName": "SC.Object#invokeOnce",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Invokes the passed method or method name one time during the runloop.  You\n    can use this method to schedule methods that need to execute but may be\n    too expensive to execute more than once, such as methods that update the\n    DOM.\n\n    Note that in development mode only, the object and method that call this\n    method will be recorded, for help in debugging scheduled code.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Function|String",
            "name": "method",
            "isOptional": false,
            "defaultValue": "",
            "desc": "method or method name"
          }
        ]
      },
      {
        "name": "invokeLast",
        "displayName": "SC.Object#invokeLast",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Invokes the passed method once at the beginning of the next runloop,\n    before any other methods (including events) are processed. This is useful\n    for situations where you know you need to update something, but due to\n    the way the run loop works, you can't actually do the update until the\n    run loop has completed.\n\n    A simple example is setting the selection on a collection controller to a\n    newly created object. Because the collection controller won't have its\n    content collection updated until later in the run loop, setting the\n    selection immediately will have no effect. In this situation, you could do\n    this instead:\n\n          // Creates a new MyRecord object and sets the selection of the\n          // myRecord collection controller to the new object.\n          createObjectAction: function(sender, evt) {\n            // create a new record and add it to the store\n            var obj = MyRecord.newRecord() ;\n\n            // update the collection controller's selection\n            MyApp.myRecordCollectionController.invokeLast( function() {\n              this.set('selection', [obj]) ;\n            });\n          }\n\n    You can call invokeLast as many times as you like and the method will\n    only be invoked once.\n\n    Note that in development mode only, the object and method that call this\n    method will be recorded, for help in debugging scheduled code.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Function|String",
            "name": "method",
            "isOptional": false,
            "defaultValue": "",
            "desc": "method or method name"
          }
        ]
      }
    ],
    "properties": [
      {
        "name": "object",
        "displayName": "SC.Object#object",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Object",
        "overview": "The object represented by this node in the chain.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "property",
        "displayName": "SC.Object#property",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Object",
        "overview": "The key on the previous object in the chain that contains the object\n    represented by this node in the chain.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "target",
        "displayName": "SC.Object#target",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Object",
        "overview": "The target object. This is the object passed to createChain(), and the\n    object which contains the +toInvalidate+ property that will be invalidated\n    if +property+ changes.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "toInvalidate",
        "displayName": "SC.Object#toInvalidate",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Object",
        "overview": "The property of +target+ to invalidate when +property+ changes.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "nextProperty",
        "displayName": "SC.Object#nextProperty",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Object",
        "overview": "The property key on +object+ that contains the object represented by the\n    next node in the chain.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "superclass",
        "displayName": "SC.Object.superclass",
        "objectType": "property",
        "propertyType": "SC.Object",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Object",
        "overview": "Points to the superclass for this class.  You can use this to trace a\n    class hierarchy.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "isClass",
        "displayName": "SC.Object.isClass",
        "objectType": "property",
        "propertyType": "Boolean",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Object",
        "overview": "Walk like a duck.  You can use this to quickly test classes.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "subclasses",
        "displayName": "SC.Object.subclasses",
        "objectType": "property",
        "propertyType": "SC.Set",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Object",
        "overview": "Set of subclasses that extend from this class.  You can observe this\n    array if you want to be notified when the object is extended.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "isDestroyed",
        "displayName": "SC.Object#isDestroyed",
        "objectType": "property",
        "propertyType": "Boolean",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Object",
        "overview": "Set to NO once this object has been destroyed.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "isObject",
        "displayName": "SC.Object#isObject",
        "objectType": "property",
        "propertyType": "Boolean",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Object",
        "overview": "Walk like a duck. Always YES since this is an object and not a class.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "concatenatedProperties",
        "displayName": "SC.Object#concatenatedProperties",
        "objectType": "property",
        "propertyType": "Array",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Object",
        "overview": "The properties named in this array will be concatenated in subclasses\n    instead of replaced.  This allows you to name special properties that\n    should contain any values you specify plus values specified by parents.\n\n    It is used by SproutCore and is available for your use, though you\n    should limit the number of properties you include in this list as it\n    adds a slight overhead to new class and instance creation.",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 1104,
    "name": "Observable",
    "displayName": "SC.Observable",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/mixins/observable.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "Key-Value-Observing (KVO) simply allows one object to observe changes to a\n  property on another object. It is one of the fundamental ways that models,\n  controllers and views communicate with each other in a SproutCore\n  application.  Any object that has this module applied to it can be used in\n  KVO-operations.\n\n  This module is applied automatically to all objects that inherit from\n  SC.Object, which includes most objects bundled with the SproutCore\n  framework.  You will not generally apply this module to classes yourself,\n  but you will use the features provided by this module frequently, so it is\n  important to understand how to use it.\n\n  Enabling Key Value Observing\n  ---\n\n  With KVO, you can write functions that will be called automatically whenever\n  a property on a particular object changes.  You can use this feature to\n  reduce the amount of \"glue code\" that you often write to tie the various\n  parts of your application together.\n\n  To use KVO, just use the KVO-aware methods get() and set() to access\n  properties instead of accessing properties directly.  Instead of writing:\n\n        var aName = contact.firstName ;\n        contact.firstName = 'Charles' ;\n\n  use:\n\n        var aName = contact.get('firstName') ;\n        contact.set('firstName', 'Charles') ;\n\n  get() and set() work just like the normal \"dot operators\" provided by\n  JavaScript but they provide you with much more power, including not only\n  observing but computed properties as well.\n\n  Observing Property Changes\n  ---\n\n  You typically observe property changes simply by adding the observes()\n  call to the end of your method declarations in classes that you write.  For\n  example:\n\n        SC.Object.create({\n          valueObserver: function() {\n            // Executes whenever the \"Value\" property changes\n          }.observes('value')\n        }) ;\n\n  Although this is the most common way to add an observer, this capability is\n  actually built into the SC.Object class on top of two methods defined in\n  this mixin called addObserver() and removeObserver().  You can use these two\n  methods to add and remove observers yourself if you need to do so at run\n  time.\n\n  To add an observer for a property, just call:\n\n        object.addObserver('propertyKey', targetObject, targetAction) ;\n\n  This will call the 'targetAction' method on the targetObject to be called\n  whenever the value of the propertyKey changes.\n\n  Observer Parameters\n  ---\n\n  An observer function typically does not need to accept any parameters,\n  however you can accept certain arguments when writing generic observers.\n  An observer function can have the following arguments:\n\n        propertyObserver(target, key, value, revision) ;\n\n  - *target* - This is the object whose value changed.  Usually this.\n  - *key* - The key of the value that changed\n  - *value* - this property is no longer used.  It will always be null\n  - *revision* - this is the revision of the target object\n\n  Implementing Manual Change Notifications\n  ---\n\n  Sometimes you may want to control the rate at which notifications for\n  a property are delivered, for example by checking first to make sure\n  that the value has changed.\n\n  To do this, you need to implement a computed property for the property\n  you want to change and override automaticallyNotifiesObserversFor().\n\n  The example below will only notify if the \"balance\" property value actually\n  changes:\n\n\n        automaticallyNotifiesObserversFor: function(key) {\n          return (key === 'balance') ? NO : sc_super() ;\n        },\n\n        balance: function(key, value) {\n          var balance = this._balance ;\n          if ((value !== undefined) && (balance !== value)) {\n            this.propertyWillChange(key) ;\n            balance = this._balance = value ;\n            this.propertyDidChange(key) ;\n          }\n          return balance ;\n        }\n\n\n  Implementation Details\n  ---\n\n  Internally, SproutCore keeps track of observable information by adding a\n  number of properties to the object adopting the observable.  All of these\n  properties begin with \"_kvo_\" to separate them from the rest of your object.",
    "methods": [
      {
        "name": "automaticallyNotifiesObserversFor",
        "displayName": "SC.Observable#automaticallyNotifiesObserversFor",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Determines whether observers should be automatically notified of changes\n    to a key.\n\n    If you are manually implementing change notifications for a property, you\n    can override this method to return NO for properties you do not want the\n    observing system to automatically notify for.\n\n    The default implementation always returns YES.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "YES if automatic notification should occur."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the key that is changing"
          }
        ]
      },
      {
        "name": "get",
        "displayName": "SC.Observable#get",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Retrieves the value of key from the object.\n\n    This method is generally very similar to using object[key] or object.key,\n    however it supports both computed properties and the unknownProperty\n    handler.\n\n    Computed Properties\n    ---\n\n    Computed properties are methods defined with the property() modifier\n    declared at the end, such as:\n\n          fullName: function() {\n            return this.getEach('firstName', 'lastName').compact().join(' ');\n          }.property('firstName', 'lastName')\n\n    When you call get() on a computed property, the property function will be\n    called and the return value will be returned instead of the function\n    itself.\n\n    Unknown Properties\n    ---\n\n    Likewise, if you try to call get() on a property whose values is\n    undefined, the unknownProperty() method will be called on the object.\n    If this method reutrns any value other than undefined, it will be returned\n    instead.  This allows you to implement \"virtual\" properties that are\n    not defined upfront.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property value or undefined."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property to retrieve"
          }
        ]
      },
      {
        "name": "set",
        "displayName": "SC.Observable#set",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Sets the key equal to value.\n\n    This method is generally very similar to calling object[key] = value or\n    object.key = value, except that it provides support for computed\n    properties, the unknownProperty() method and property observers.\n\n    Computed Properties\n    ---\n\n    If you try to set a value on a key that has a computed property handler\n    defined (see the get() method for an example), then set() will call\n    that method, passing both the value and key instead of simply changing\n    the value itself.  This is useful for those times when you need to\n    implement a property that is composed of one or more member\n    properties.\n\n    Unknown Properties\n    ---\n\n    If you try to set a value on a key that is undefined in the target\n    object, then the unknownProperty() handler will be called instead.  This\n    gives you an opportunity to implement complex \"virtual\" properties that\n    are not predefined on the obejct.  If unknownProperty() returns\n    undefined, then set() will simply set the value on the object.\n\n    Property Observers\n    ---\n\n    In addition to changing the property, set() will also register a\n    property change with the object.  Unless you have placed this call\n    inside of a beginPropertyChanges() and endPropertyChanges(), any \"local\"\n    observers (i.e. observer methods declared on the same object), will be\n    called immediately.  Any \"remote\" observers (i.e. observer methods\n    declared on another object) will be placed in a queue and called at a\n    later time in a coelesced manner.\n\n    Chaining\n    ---\n\n    In addition to property changes, set() returns the value of the object\n    itself so you can do chaining like this:\n\n          record.set('firstName', 'Charles').set('lastName', 'Jolley');",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Observable",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String|Hash",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property to set"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the value to set or null."
          }
        ]
      },
      {
        "name": "unknownProperty",
        "displayName": "SC.Observable#unknownProperty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Called whenever you try to get or set an undefined property.\n\n    This is a generic property handler.  If you define it, it will be called\n    when the named property is not yet set in the object.  The default does\n    nothing.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The new value for key."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the key that was requested"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The value if called as a setter, undefined if called as a getter."
          }
        ]
      },
      {
        "name": "beginPropertyChanges",
        "displayName": "SC.Observable#beginPropertyChanges",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Begins a grouping of property changes.\n\n    You can use this method to group property changes so that notifications\n    will not be sent until the changes are finished.  If you plan to make a\n    large number of changes to an object at one time, you should call this\n    method at the beginning of the changes to suspend change notifications.\n    When you are done making changes, call endPropertyChanges() to allow\n    notification to resume.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Observable",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": []
      },
      {
        "name": "endPropertyChanges",
        "displayName": "SC.Observable#endPropertyChanges",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Ends a grouping of property changes.\n\n    You can use this method to group property changes so that notifications\n    will not be sent until the changes are finished.  If you plan to make a\n    large number of changes to an object at one time, you should call\n    beginPropertyChanges() at the beginning of the changes to suspend change\n    notifications. When you are done making changes, call this method to allow\n    notification to resume.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Observable",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": []
      },
      {
        "name": "propertyWillChange",
        "displayName": "SC.Observable#propertyWillChange",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Notify the observer system that a property is about to change.\n\n    Sometimes you need to change a value directly or indirectly without\n    actually calling get() or set() on it.  In this case, you can use this\n    method and propertyDidChange() instead.  Calling these two methods\n    together will notify all observers that the property has potentially\n    changed value.\n\n    Note that you must always call propertyWillChange and propertyDidChange as\n    a pair.  If you do not, it may get the property change groups out of order\n    and cause notifications to be delivered more often than you would like.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Observable",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The property key that is about to change."
          }
        ]
      },
      {
        "name": "propertyDidChange",
        "displayName": "SC.Observable#propertyDidChange",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Notify the observer system that a property has just changed.\n\n    Sometimes you need to change a value directly or indirectly without\n    actually calling get() or set() on it.  In this case, you can use this\n    method and propertyWillChange() instead.  Calling these two methods\n    together will notify all observers that the property has potentially\n    changed value.\n\n    Note that you must always call propertyWillChange and propertyDidChange as\n    a pair. If you do not, it may get the property change groups out of order\n    and cause notifications to be delivered more often than you would like.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Observable",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The property key that has just changed."
          },
          {
            "title": "param",
            "type": "Object",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The new value of the key.  May be null."
          },
          {
            "title": "param",
            "type": "Boolean",
            "name": "_keepCache",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Private property"
          }
        ]
      },
      {
        "name": "registerDependentKey",
        "displayName": "SC.Observable#registerDependentKey",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Use this to indicate that one key changes if other keys it depends on\n    change.  Pass the key that is dependent and additional keys it depends\n    upon.  You can either pass the additional keys inline as arguments or\n    in a single array.\n\n    You generally do not call this method, but instead pass dependent keys to\n    your property() method when you declare a computed property.\n\n    You can call this method during your init to register the keys that should\n    trigger a change notification for your computed properties.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the dependent key"
          },
          {
            "title": "param",
            "type": "Array|String",
            "name": "dependentKeys",
            "isOptional": false,
            "defaultValue": "",
            "desc": "one or more dependent keys"
          }
        ]
      },
      {
        "name": "addObserver",
        "displayName": "SC.Observable#addObserver",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds an observer on a property.\n\n      This is the core method used to register an observer for a property.\n\n      Once you call this method, anytime the key's value is set, your observer\n      will be notified.  Note that the observers are triggered anytime the\n      value is set, regardless of whether it has actually changed.  Your\n      observer should be prepared to handle that.\n\n      You can also pass an optional context parameter to this method.  The\n      context will be passed to your observer method whenever it is triggered.\n      Note that if you add the same target/method pair on a key multiple times\n      with different context parameters, your observer will only be called once\n      with the last context you passed.\n\n      Observer Methods\n      ---\n\n      Observer methods you pass should generally have the following signature if\n      you do not pass a \"context\" parameter:\n\n            fooDidChange: function(sender, key, value, rev);\n\n      The sender is the object that changed.  The key is the property that\n      changes.  The value property is currently reserved and unused.  The rev\n      is the last property revision of the object when it changed, which you can\n      use to detect if the key value has really changed or not.\n\n      If you pass a \"context\" parameter, the context will be passed before the\n      revision like so:\n\n            fooDidChange: function(sender, key, value, context, rev);\n\n      Usually you will not need the value, context or revision parameters at\n      the end.  In this case, it is common to write observer methods that take\n      only a sender and key value as parameters or, if you aren't interested in\n      any of these values, to write an observer that has no parameters at all.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "self"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the key to observer"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the target object to invoke"
          },
          {
            "title": "param",
            "type": "String|Function",
            "name": "method",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the method to invoke."
          },
          {
            "title": "param",
            "type": "Object",
            "name": "context",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional context"
          }
        ]
      },
      {
        "name": "removeObserver",
        "displayName": "SC.Observable#removeObserver",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Remove an observer you have previously registered on this object.  Pass\n      the same key, target, and method you passed to addObserver() and your\n      target will no longer receive notifications.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Observable",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "reciever"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the key to observer"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the target object to invoke"
          },
          {
            "title": "param",
            "type": "String|Function",
            "name": "method",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the method to invoke."
          }
        ]
      },
      {
        "name": "hasObserverFor",
        "displayName": "SC.Observable#hasObserverFor",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the object currently has observers registered for a\n      particular key.  You can use this method to potentially defer performing\n      an expensive action until someone begins observing a particular property\n      on the object.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "key to check"
          }
        ]
      },
      {
        "name": "initObservable",
        "displayName": "SC.Observable#initObservable",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This method will register any observers and computed properties saved on\n      the object.  Normally you do not need to call this method youself.  It\n      is invoked automatically just before property notifications are sent and\n      from the init() method of SC.Object.  You may choose to call this\n      from your own initialization method if you are using SC.Observable in\n      a non-SC.Object-based object.\n\n      This method looks for several private variables, which you can setup,\n      to initialize:\n\n        - _observers: this should contain an array of key names for observers\n          you need to configure.\n\n        - _bindings: this should contain an array of key names that configure\n          bindings.\n\n        - _properties: this should contain an array of key names for computed\n          properties.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": []
      },
      {
        "name": "observersForKey",
        "displayName": "SC.Observable#observersForKey",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns an array with all of the observers registered for the specified\n      key.  This is intended for debugging purposes only.  You generally do not\n      want to rely on this method for production code.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "array of Observer objects, describing the observer."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the key to evaluate"
          }
        ]
      },
      {
        "name": "bind",
        "displayName": "SC.Observable#bind",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Manually add a new binding to an object.  This is the same as doing\n      the more familiar propertyBinding: 'property.path' approach.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Binding",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "new binding instance"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "toKey",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the key to bind to"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "target or property path to bind from"
          },
          {
            "title": "param",
            "type": "String|Function",
            "name": "method",
            "isOptional": false,
            "defaultValue": "",
            "desc": "method for target to bind from"
          }
        ]
      },
      {
        "name": "didChangeFor",
        "displayName": "SC.Observable#didChangeFor",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "didChangeFor allows you to determine if a property has changed since the\n      last time the method was called. You must pass a unique context as the\n      first parameter (so didChangeFor can identify which method is calling it),\n      followed by a list of keys that should be checked for changes.\n\n      For example, in your render method you might pass the following context:\n      if (this.didChangeFor('render','height','width')) {\n         // Only render if changed\n      }\n\n      In your view's update method, you might instead pass 'update':\n\n      if (this.didChangeFor('update', 'height', 'width')) {\n        // Only update height and width properties\n      }\n\n      This method works by comparing property revision counts. Every time a\n      property changes, an internal counter is incremented. When didChangeFor is\n      invoked, the current revision count of the property is compared to the\n      revision count from the last time this method was called.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String|Object",
            "name": "context",
            "isOptional": false,
            "defaultValue": "",
            "desc": "a unique identifier"
          },
          {
            "title": "param",
            "type": "String…",
            "name": "propertyNames",
            "isOptional": false,
            "defaultValue": "",
            "desc": "one or more property names"
          }
        ]
      },
      {
        "name": "setIfChanged",
        "displayName": "SC.Observable#setIfChanged",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Sets the property only if the passed value is different from the\n      current value.  Depending on how expensive a get() is on this property,\n      this may be more efficient.\n\n      NOTE: By default, the set() method will not set the value unless it has\n      changed. However, this check can skipped by setting .property().idempotent(NO)\n      setIfChanged() may be useful in this case.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Observable",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String|Hash",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the key to change"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the value to change"
          }
        ]
      },
      {
        "name": "getPath",
        "displayName": "SC.Observable#getPath",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Navigates the property path, returning the value at that point.\n\n      If any object in the path is undefined, returns undefined.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "path",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The property path you want to retrieve"
          }
        ]
      },
      {
        "name": "setPath",
        "displayName": "SC.Observable#setPath",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Navigates the property path, finally setting the value.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Observable",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "path",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property path to set"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the value to set"
          }
        ]
      },
      {
        "name": "setPathIfChanged",
        "displayName": "SC.Observable#setPathIfChanged",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Navigates the property path, finally setting the value but only if\n      the value does not match the current value.  This will avoid sending\n      unecessary change notifications.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "this"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "path",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property path to set"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the value to set"
          }
        ]
      },
      {
        "name": "getEach",
        "displayName": "SC.Observable#getEach",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Convenience method to get an array of properties.\n\n      Pass in multiple property keys or an array of property keys.  This\n      method uses getPath() so you can also pass key paths.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Values of property keys."
          }
        ],
        "params": []
      },
      {
        "name": "incrementProperty",
        "displayName": "SC.Observable#incrementProperty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Increments the value of a property.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "new value of property"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "property name"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "increment",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the amount to increment (optional)"
          }
        ]
      },
      {
        "name": "decrementProperty",
        "displayName": "SC.Observable#decrementProperty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Decrements the value of a property.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Number",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "new value of property"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "property name"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "increment",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the amount to decrement (optional)"
          }
        ]
      },
      {
        "name": "toggleProperty",
        "displayName": "SC.Observable#toggleProperty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Inverts a property.  Property should be a bool.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "new value"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "property name"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional parameter for \"true\" value"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "alt",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional parameter for \"false\" value"
          }
        ]
      },
      {
        "name": "notifyPropertyChange",
        "displayName": "SC.Observable#notifyPropertyChange",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Convenience method to call propertyWillChange/propertyDidChange.\n\n      Sometimes you need to notify observers that a property has changed value\n      without actually changing this value.  In those cases, you can use this\n      method as a convenience instead of calling propertyWillChange() and\n      propertyDidChange().",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Observable",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The property key that has just changed."
          },
          {
            "title": "param",
            "type": "Object",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The new value of the key.  May be null."
          }
        ]
      },
      {
        "name": "allPropertiesDidChange",
        "displayName": "SC.Observable#allPropertiesDidChange",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Notifies observers of all possible property changes.\n\n      Sometimes when you make a major update to your object, it is cheaper to\n      simply notify all observers that their property might have changed than\n      to figure out specifically which properties actually did change.\n\n      In those cases, you can simply call this method to notify all property\n      observers immediately.  Note that this ignores property groups.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Observable",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": []
      },
      {
        "name": "addProbe",
        "displayName": "SC.Observable#addProbe",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Allows you to inspect a property for changes. Whenever the named property\n      changes, a log will be printed to the console. This (along with removeProbe)\n      are convenience methods meant for debugging purposes.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The name of the property you want probed for changes"
          }
        ]
      },
      {
        "name": "removeProbe",
        "displayName": "SC.Observable#removeProbe",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Stops a running probe from observing changes to the observer.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The name of the property you want probed for changes"
          }
        ]
      },
      {
        "name": "logProperty",
        "displayName": "SC.Observable#logProperty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Logs the named properties to the SC.Logger.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "String...",
            "name": "propertyNames",
            "isOptional": false,
            "defaultValue": "",
            "desc": "one or more property names"
          }
        ]
      }
    ],
    "properties": [
      {
        "name": "isObservable",
        "displayName": "SC.Observable#isObservable",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Observable",
        "overview": "Walk like that ol' duck",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 2523,
    "name": "RangeObserver",
    "displayName": "SC.RangeObserver",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/system/range_observer.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "A RangeObserver is used by Arrays to automatically observe all of the\n  objects in a particular range on the array.  Whenever any property on one\n  of those objects changes, it will notify its delegate.  Likewise, whenever\n  the contents of the array itself changes, it will notify its delegate and\n  possibly update its own registration.\n\n  This implementation uses only SC.Array methods.  It can be used on any\n  object that complies with SC.Array.  You may, however, choose to subclass\n  this object in a way that is more optimized for your particular design.",
    "methods": [
      {
        "name": "create",
        "displayName": "SC.RangeObserver#create",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Creates a new range observer owned by the source.  The indexSet you pass\n    must identify the indexes you are interested in observing.  The passed\n    target/method will be invoked whenever the observed range changes.\n\n    Note that changes to a range are buffered until the end of a run loop\n    unless a property on the record itself changes.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RangeObserver",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "instance"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.Array",
            "name": "source",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the source array"
          },
          {
            "title": "param",
            "type": "SC.IndexSet",
            "name": "indexSet",
            "isOptional": false,
            "defaultValue": "",
            "desc": "set of indexes to observer"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the target"
          },
          {
            "title": "param",
            "type": "Function|String",
            "name": "method",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the method to invoke"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "context",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional context to include in callback"
          },
          {
            "title": "param",
            "type": "Boolean",
            "name": "isDeep",
            "isOptional": false,
            "defaultValue": "",
            "desc": "if YES, observe property changes as well"
          }
        ]
      },
      {
        "name": "extend",
        "displayName": "SC.RangeObserver#extend",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Create subclasses for the RangeObserver.  Pass one or more attribute\n    hashes.  Use this to create customized RangeObservers if needed for your\n    classes.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RangeObserver",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "extended range observer class"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Hash",
            "name": "attrs",
            "isOptional": false,
            "defaultValue": "",
            "desc": "one or more attribute hashes"
          }
        ]
      },
      {
        "name": "destroy",
        "displayName": "SC.RangeObserver#destroy",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Destroys an active ranger observer, cleaning up first.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RangeObserver",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.Array",
            "name": "source",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the source array"
          }
        ]
      },
      {
        "name": "update",
        "displayName": "SC.RangeObserver#update",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Updates the set of indexes the range observer applies to.  This will\n    stop observing the old objects for changes and start observing the\n    new objects instead.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RangeObserver",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.Array",
            "name": "source",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the source array"
          },
          {
            "title": "param",
            "type": "SC.IndexSet",
            "name": "indexSet",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The index set representing the change"
          }
        ]
      },
      {
        "name": "beginObserving",
        "displayName": "SC.RangeObserver#beginObserving",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Configures observing for each item in the current range.  Should update\n    the observing array with the list of observed objects so they can be\n    torn down later",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RangeObserver",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": []
      },
      {
        "name": "endObserving",
        "displayName": "SC.RangeObserver#endObserving",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Remove observers for any objects currently begin observed.  This is\n    called whenever the observed range changes due to an array change or\n    due to destroying the observer.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RangeObserver",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": []
      },
      {
        "name": "rangeDidChange",
        "displayName": "SC.RangeObserver#rangeDidChange",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Whenever the actual objects in the range changes, notify the delegate\n    then begin observing again.  Usually this method will be passed an\n    IndexSet with the changed indexes.  The range observer will only notify\n    its delegate if the changed indexes include some of all of the indexes\n    this range observer is monitoring.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RangeObserver",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.IndexSet",
            "name": "changes",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional set of changed indexes"
          }
        ]
      },
      {
        "name": "objectPropertyDidChange",
        "displayName": "SC.RangeObserver#objectPropertyDidChange",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Whenever an object changes, notify the delegate",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RangeObserver",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "the",
            "isOptional": false,
            "defaultValue": "",
            "desc": "object that changed"
          },
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property that changed"
          },
          {
            "title": "param",
            "type": "Null",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "No longer used"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "rev",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The revision of the change"
          }
        ]
      }
    ],
    "properties": [
      {
        "name": "isRangeObserver",
        "displayName": "SC.RangeObserver#isRangeObserver",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.RangeObserver",
        "overview": "Walk like a duck.",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 909,
    "name": "Reducers",
    "displayName": "SC.Reducers",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/mixins/enumerable.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "",
    "methods": [
      {
        "name": "enumerableContentDidChange",
        "displayName": "SC.Reducers#enumerableContentDidChange",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Invoke this method when the contents of your enumerable has changed.\n    This will notify any observers watching for content changes.  If your are\n    implementing an ordered enumerable (such as an array), also pass the\n    start and end values where the content changed so that it can be used to\n    notify range observers.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Number",
            "name": "start",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional start offset for the content change"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "length",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional length of change"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "delta",
            "isOptional": false,
            "defaultValue": "",
            "desc": "if you added or removed objects, the delta change"
          },
          {
            "title": "param",
            "type": "Array",
            "name": "addedObjects",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the objects that were added"
          },
          {
            "title": "param",
            "type": "Array",
            "name": "removedObjects",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the objects that were removed"
          }
        ]
      },
      {
        "name": "reducedProperty",
        "displayName": "SC.Reducers#reducedProperty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Call this method from your unknownProperty() handler to implement\n    automatic reduced properties.  A reduced property is a property that\n    collects its contents dynamically from your array contents.  Reduced\n    properties always begin with \"@\".  Getting this property will call\n    reduce() on your array with the function matching the key name as the\n    processor.\n\n    The return value of this will be either the return value from the\n    reduced property or undefined, which means this key is not a reduced\n    property.  You can call this at the top of your unknownProperty handler\n    like so:\n\n      unknownProperty: function(key, value) {\n        var ret = this.handleReduceProperty(key, value) ;\n        if (ret === undefined) {\n          // process like normal\n        }\n      }",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the reduced property or undefined"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the reduce property key"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "value",
            "isOptional": false,
            "defaultValue": "",
            "desc": "a value or undefined."
          },
          {
            "title": "param",
            "type": "Boolean",
            "name": "generateProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": "only set to false if you do not want\n      an optimized computed property handler generated for this.  Not common."
          }
        ]
      },
      {
        "name": "reduceMax",
        "displayName": "SC.Reducers#reduceMax",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Reducer for @max reduced property.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "reduced value"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "previousValue",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The previous value in the enumerable"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "item",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The current value in the enumerable"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "index",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The index of the current item in the enumerable"
          },
          {
            "title": "param",
            "type": "String",
            "name": "reducerProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": "(Optional) The property in the enumerable being reduced"
          },
          {
            "title": "param",
            "type": "",
            "name": "reducerProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "reduceMaxObject",
        "displayName": "SC.Reducers#reduceMaxObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Reduces an enumberable to the max of the items in the enumerable. If\n    reducerProperty is passed, it will reduce that property. Otherwise, it will\n    reduce the item itself.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "reduced value"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "previousValue",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The previous value in the enumerable"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "item",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The current value in the enumerable"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "index",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The index of the current item in the enumerable"
          },
          {
            "title": "param",
            "type": "String",
            "name": "reducerProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": "(Optional) The property in the enumerable being reduced"
          },
          {
            "title": "param",
            "type": "",
            "name": "reducerProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "reduceMin",
        "displayName": "SC.Reducers#reduceMin",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Reduces an enumberable to the min of the items in the enumerable. If\n    reducerProperty is passed, it will reduce that property. Otherwise, it will\n    reduce the item itself.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "reduced value"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "previousValue",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The previous value in the enumerable"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "item",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The current value in the enumerable"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "index",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The index of the current item in the enumerable"
          },
          {
            "title": "param",
            "type": "String",
            "name": "reducerProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": "(Optional) The property in the enumerable being reduced"
          },
          {
            "title": "param",
            "type": "",
            "name": "reducerProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "reduceMinObject",
        "displayName": "SC.Reducers#reduceMinObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Reduces an enumberable to the max of the items in the enumerable. If\n    reducerProperty is passed, it will reduce that property. Otherwise, it will\n    reduce the item itself.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "reduced value"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "previousValue",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The previous value in the enumerable"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "item",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The current value in the enumerable"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "index",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The index of the current item in the enumerable"
          },
          {
            "title": "param",
            "type": "String",
            "name": "reducerProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": "(Optional) The property in the enumerable being reduced"
          },
          {
            "title": "param",
            "type": "",
            "name": "reducerProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "reduceAverage",
        "displayName": "SC.Reducers#reduceAverage",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Reduces an enumberable to the average of the items in the enumerable. If\n    reducerProperty is passed, it will reduce that property. Otherwise, it will\n    reduce the item itself.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "reduced value"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "previousValue",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The previous value in the enumerable"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "item",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The current value in the enumerable"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "index",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The index of the current item in the enumerable"
          },
          {
            "title": "param",
            "type": "String",
            "name": "reducerProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": "(Optional) The property in the enumerable being reduced"
          },
          {
            "title": "param",
            "type": "",
            "name": "reducerProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "reduceSum",
        "displayName": "SC.Reducers#reduceSum",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Reduces an enumberable to the sum of the items in the enumerable. If\n    reducerProperty is passed, it will reduce that property. Otherwise, it will\n    reduce the item itself.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "reduced value"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "previousValue",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The previous value in the enumerable"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "item",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The current value in the enumerable"
          },
          {
            "title": "param",
            "type": "Number",
            "name": "index",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The index of the current item in the enumerable"
          },
          {
            "title": "param",
            "type": "String",
            "name": "reducerProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": "(Optional) The property in the enumerable being reduced"
          },
          {
            "title": "param",
            "type": "",
            "name": "reducerProperty",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      }
    ],
    "properties": []
  },
  {
    "guid": 2584,
    "name": "RunLoop",
    "displayName": "SC.RunLoop",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/system/run_loop.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Object"
      }
    ],
    "overview": "The run loop provides a universal system for coordinating events within\n  your application.  The run loop processes timers as well as pending\n  observer notifications within your application.\n\n  To use a RunLoop within your application, you should make sure your event\n  handlers always begin and end with SC.RunLoop.begin() and SC.RunLoop.end()\n\n  The RunLoop is important because bindings do not fire until the end of\n  your run loop is reached.  This improves the performance of your\n  application.\n\n  Example:\n\n  This is how you could write your mouseup handler in jQuery:\n\n        $('#okButton').on('click', function() {\n          SC.RunLoop.begin();\n\n          // handle click event...\n\n          SC.RunLoop.end(); // allows bindings to trigger...\n        });",
    "methods": [
      {
        "name": "beginRunLoop",
        "displayName": "SC.RunLoop#beginRunLoop",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Call this method whenver you begin executing code.\n\n    This is typically invoked automatically for you from event handlers and\n    the timeout handler.  If you call setTimeout() or setInterval() yourself,\n    you may need to invoke this yourself.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RunLoop",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": []
      },
      {
        "name": "isRunLoopInProgress",
        "displayName": "SC.RunLoop#isRunLoopInProgress",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "YES when a run loop is in progress",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "endRunLoop",
        "displayName": "SC.RunLoop#endRunLoop",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Call this method whenever you are done executing code.\n\n    This is typically invoked automatically for you from event handlers and\n    the timeout handler.  If you call setTimeout() or setInterval() yourself\n    you may need to invoke this yourself.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RunLoop",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": []
      },
      {
        "name": "flushAllPending",
        "displayName": "SC.RunLoop#flushAllPending",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Repeatedly flushes all bindings, observers, and other queued functions until all queues are empty.",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "invokeOnce",
        "displayName": "SC.RunLoop#invokeOnce",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Invokes the passed target/method pair once at the end of the runloop.\n    You can call this method as many times as you like and the method will\n    only be invoked once.\n\n    Usually you will not call this method directly but use invokeOnce()\n    defined on SC.Object.\n\n    Note that in development mode only, the object and method that call this\n    method will be recorded, for help in debugging scheduled code.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RunLoop",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "Function",
            "name": "method",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "invokeLast",
        "displayName": "SC.RunLoop#invokeLast",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Invokes the passed target/method pair at the very end of the run loop,\n    once all other delayed invoke queues have been flushed.  Use this to\n    schedule cleanup methods at the end of the run loop once all other work\n    (including rendering) has finished.\n\n    If you call this with the same target/method pair multiple times it will\n    only invoke the pair only once at the end of the runloop.\n\n    Usually you will not call this method directly but use invokeLast()\n    defined on SC.Object.\n\n    Note that in development mode only, the object and method that call this\n    method will be recorded, for help in debugging scheduled code.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RunLoop",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "target",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          },
          {
            "title": "param",
            "type": "Function",
            "name": "method",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "flushApplicationQueues",
        "displayName": "SC.RunLoop#flushApplicationQueues",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Executes any pending events at the end of the run loop.  This method is\n    called automatically at the end of a run loop to flush any pending\n    queue changes.\n\n    The default method will invoke any one time methods and then sync any\n    bindings that might have changed.  You can override this method in a\n    subclass if you like to handle additional cleanup.\n\n    This method must return YES if it found any items pending in its queues\n    to take action on.  endRunLoop will invoke this method repeatedly until\n    the method returns NO.  This way if any if your final executing code\n    causes additional queues to trigger, then can be flushed again.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "YES if items were found in any queue, NO otherwise"
          }
        ],
        "params": []
      },
      {
        "name": "begin",
        "displayName": "SC.RunLoop.begin",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": true,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Begins a new run loop on the currentRunLoop.  If you are already in a\n  runloop, this method has no effect.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RunLoop",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": []
      },
      {
        "name": "end",
        "displayName": "SC.RunLoop.end",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": true,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Ends the run loop on the currentRunLoop.  This will deliver any final\n  pending notifications and schedule any additional necessary cleanup.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.RunLoop",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": []
      },
      {
        "name": "isRunLoopInProgress",
        "displayName": "SC.RunLoop.isRunLoopInProgress",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": true,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES when a run loop is in progress",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": []
      }
    ],
    "properties": [
      {
        "name": "currentRunLoop",
        "displayName": "SC.RunLoop.currentRunLoop",
        "objectType": "property",
        "propertyType": "SC.RunLoop",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.RunLoop",
        "overview": "The current run loop.  This is created automatically the first time you\n  call begin().",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "runLoopClass",
        "displayName": "SC.RunLoop.runLoopClass",
        "objectType": "property",
        "propertyType": "Class",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.RunLoop",
        "overview": "The default RunLoop class.  If you choose to extend the RunLoop, you can\n  set this property to make sure your class is used instead.",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 2630,
    "name": "Set",
    "displayName": "SC.Set",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/system/set.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "SproutCore 1.0",
    "version": "",
    "deprecated": "",
    "augments": [
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Enumerable"
      },
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Observable"
      },
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Copyable"
      },
      {
        "title": "augments",
        "type": "",
        "name": "",
        "isOptional": false,
        "defaultValue": "",
        "desc": "SC.Freezable"
      }
    ],
    "overview": "An unordered collection of objects.\n\n  A Set works a bit like an array except that its items are not ordered.\n  You can create a set to efficiently test for membership for an object. You\n  can also iterate through a set just like an array, even accessing objects\n  by index, however there is no gaurantee as to their order.\n\n  Whether or not property observing is enabled, sets offer very powerful\n  notifications of items being added and removed, through the\n  `#js:addSetObserver` and `#js:removeSetObserver` methods; this can be\n  very useful, for instance, for filtering or mapping sets.\n\n  Note that SC.Set is a primitive object, like an array.  It does implement\n  limited key-value observing support, but it does not extend from SC.Object\n  so you should not subclass it.\n\n  Creating a Set\n  --------------\n  You can create a set like you would most objects using SC.Set.create().\n  Most new sets you create will be empty, but you can also initialize the set\n  with some content by passing an array or other enumerable of objects to the\n  constructor.\n\n  Finally, you can pass in an existing set and the set will be copied.  You\n  can also create a copy of a set by calling SC.Set#clone().\n\n      #js\n      // creates a new empty set\n      var foundNames = SC.Set.create();\n\n      // creates a set with four names in it.\n      var names = SC.Set.create([\"Charles\", \"Tom\", \"Juan\", \"Alex\"]) ; // :P\n\n      // creates a copy of the names set.\n      var namesCopy = SC.Set.create(names);\n\n      // same as above.\n      var anotherNamesCopy = names.clone();\n\n  Adding/Removing Objects\n  -----------------------\n  You generally add or remove objects from a set using add() or remove().\n  You can add any type of object including primitives such as numbers,\n  strings, and booleans.\n\n  Note that objects can only exist one time in a set.  If you call add() on\n  a set with the same object multiple times, the object will only be added\n  once.  Likewise, calling remove() with the same object multiple times will\n  remove the object the first time and have no effect on future calls until\n  you add the object to the set again.\n\n  Note that you cannot add/remove null or undefined to a set.  Any attempt to\n  do so will be ignored.\n\n  In addition to add/remove you can also call push()/pop().  Push behaves just\n  like add() but pop(), unlike remove() will pick an arbitrary object, remove\n  it and return it.  This is a good way to use a set as a job queue when you\n  don't care which order the jobs are executed in.\n\n  Testing for an Object\n  ---------------------\n  To test for an object's presence in a set you simply call SC.Set#contains().\n  This method tests for the object's hash, which is generally the same as the\n  object's guid; however, if you implement the hash() method on the object, it will\n  use the return value from that method instead.\n\n  Observing changes\n  -----------------\n  When using `#js:SC.Set` (rather than `#js:SC.CoreSet`), you can observe the\n  `#js:\"[]\"` property to be alerted whenever the content changes.\n\n  This is often unhelpful. If you are filtering sets of objects, for instance,\n  it is very inefficient to re-filter all of the items each time the set changes.\n  It would be better if you could just adjust the filtered set based on what\n  was changed on the original set. The same issue applies to merging sets,\n  as well.\n\n  `#js:SC.Set` and `#js:SC.CoreSet` both offer another method of being observed:\n  `#js:addSetObserver` and `#js:removeSetObserver`. These take a single parameter:\n  an object which implements `#js:didAddItem(set, item)` and\n  `#js:didRemoveItem(set, item)`.\n\n  Whenever an item is added or removed from the set, all objects in the set\n  (a SC.CoreSet, actually) of observing objects will be alerted appropriately.\n\n  BIG WARNING\n  ===========\n  SetObservers are not intended to be used \"_creatively_\"; for instance, do\n  not expect to be alerted immediately to any changes. **While the notifications\n  are currently sent out immediately, if we find a fast way to send them at end\n  of run loop, we most likely will do so.**",
    "methods": [
      {
        "name": "create",
        "displayName": "SC.Set#create",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Creates a new set, with the optional array of items included in the\n    return set.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Set",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.Enumerable",
            "name": "items",
            "isOptional": false,
            "defaultValue": "",
            "desc": "items to add"
          }
        ]
      },
      {
        "name": "firstObject",
        "displayName": "SC.Set#firstObject",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns the first object in the set or null if the set is empty",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "clear",
        "displayName": "SC.Set#clear",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Clears the set",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Set",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": []
      },
      {
        "name": "contains",
        "displayName": "SC.Set#contains",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Call this method to test for membership.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "isEqual",
        "displayName": "SC.Set#isEqual",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the passed object is also a set that contains the same\n    objects as the receiver.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "SC.Set",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the other object"
          }
        ]
      },
      {
        "name": "addSetObserver",
        "displayName": "SC.Set#addSetObserver",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Adds a set observers. Set observers must implement two methods:\n\n    - didAddItem(set, item)\n    - didRemoveItem(set, item)\n\n    Set observers are, in fact, stored in another set (a CoreSet).",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "setObserver",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "removeSetObserver",
        "displayName": "SC.Set#removeSetObserver",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Removes a set observer.",
        "exceptions": [],
        "returns": [],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "setObserver",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "add",
        "displayName": "SC.Set#add",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Call this method to add an object. performs a basic add.\n\n    If the object is already in the set it will not be added again.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Set",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object to add"
          }
        ]
      },
      {
        "name": "addEach",
        "displayName": "SC.Set#addEach",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Add all the items in the passed array or enumerable",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Set",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Array",
            "name": "objects",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "remove",
        "displayName": "SC.Set#remove",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Removes the object from the set if it is found.\n\n    If the object is not in the set, nothing will be changed.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Set",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object to remove"
          }
        ]
      },
      {
        "name": "pop",
        "displayName": "SC.Set#pop",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Removes an arbitrary object from the set and returns it.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "an object from the set or null"
          }
        ],
        "params": []
      },
      {
        "name": "removeEach",
        "displayName": "SC.Set#removeEach",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Removes all the items in the passed array.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Set",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Array",
            "name": "objects",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "copy",
        "displayName": "SC.Set#copy",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Clones the set into a new set.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Set",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "new copy"
          }
        ],
        "params": []
      },
      {
        "name": "destroy",
        "displayName": "SC.Set#destroy",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Return a set to the pool for reallocation.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "SC.Set",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "receiver"
          }
        ],
        "params": []
      }
    ],
    "properties": [
      {
        "name": "isSet",
        "displayName": "SC.Set#isSet",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Set",
        "overview": "Walk like a duck",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "length",
        "displayName": "SC.Set#length",
        "objectType": "property",
        "propertyType": "",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "SC.Set",
        "overview": "This property will change as the number of objects in the set changes.",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  },
  {
    "guid": 2717,
    "name": "String",
    "displayName": "SC.String",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/system/string.js",
    "isNamespace": false,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "Implements support methods useful when working with strings in SproutCore\n  applications.",
    "methods": [
      {
        "name": "fmt",
        "displayName": "SC.String#fmt",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Apply formatting options to the string.  This will look for occurrences\n    of %@ in your string and substitute them with the arguments you pass into\n    this method.  If you want to control the specific order of replacement,\n    you can add a number after the key as well to indicate which argument\n    you want to insert.\n\n    Ordered insertions are most useful when building loc strings where values\n    you need to insert may appear in different orders.\n\n    Examples\n    -----\n\n        \"Hello %@ %@\".fmt('John', 'Doe') => \"Hello John Doe\"\n        \"Hello %@2, %@1\".fmt('John', 'Doe') => \"Hello Doe, John\"",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "String",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "formatted string"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object...",
            "name": "args",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional arguments"
          },
          {
            "title": "param",
            "type": "",
            "name": "formats",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "w",
        "displayName": "SC.String#w",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Splits the string into words, separated by spaces. Empty strings are\n    removed from the results.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "An array of non-empty strings"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "",
            "name": "str",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ]
      }
    ],
    "properties": []
  },
  {
    "guid": 4703,
    "name": "String",
    "displayName": "String",
    "objectType": "symbol",
    "filePath": "",
    "isNamespace": true,
    "isPrivate": false,
    "isStatic": false,
    "author": "",
    "see": [],
    "since": "",
    "version": "",
    "deprecated": "",
    "augments": [],
    "overview": "",
    "methods": [
      {
        "name": "fmt",
        "displayName": "String#fmt",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "SC.String.fmt"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "",
        "exceptions": [],
        "returns": [],
        "params": []
      },
      {
        "name": "w",
        "displayName": "String#w",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [
          "SC.String.w"
        ],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "",
        "exceptions": [],
        "returns": [],
        "params": []
      }
    ],
    "properties": []
  },
  {
    "guid": 11,
    "name": "SC",
    "displayName": "window.SC",
    "objectType": "symbol",
    "filePath": "/Users/majd/work/sproutcore/frameworks/runtime/core.js",
    "isNamespace": true,
    "isPrivate": false,
    "isStatic": true,
    "author": "",
    "see": [],
    "since": "",
    "version": "1.6.0.beta.3",
    "deprecated": "",
    "augments": [],
    "overview": "All SproutCore methods and functions are defined\n  inside of this namespace.  You generally should not add new properties to\n  this namespace as it may be overwritten by future versions of SproutCore.\n\n  You can also use the shorthand \"SC\" instead of \"SproutCore\".\n\n  SproutCore-Base is a framework that provides core functions for SproutCore\n  including cross-platform functions, support for property observing and\n  objects.  It's focus is on small size and performance.  You can use this\n  in place of or along-side other cross-platform libraries such as jQuery or\n  Prototype.\n\n  The core Base framework is based on the jQuery API with a number of\n  performance optimizations.",
    "methods": [
      {
        "name": "typeOf",
        "displayName": "window.SC#typeOf",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns a consistent type for the passed item.\n\n    Use this instead of the built-in typeOf() to get the type of an item.\n    It will return the same result across all browsers and includes a bit\n    more detail.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "String",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "One of the following, depending on the type of the item<br>\n            SC.T_STRING: String primitive,<br>\n            SC.T_NUMBER: Number primitive,<br>\n            SC.T_BOOLEAN: Boolean primitive,<br>\n            SC.T_NULL: Null value,<br>\n            SC.T_UNDEFINED: Undefined value,<br>\n            SC.T_FUNCTION: A function,<br>\n            SC.T_ARRAY: An instance of Array,<br>\n            SC.T_CLASS: A SproutCore class (created using SC.Object.extend()),<br>\n            SC.T_OBJECT: A SproutCore object instance,<br>\n            SC.T_HASH: A JavaScript object not inheriting from SC.Object"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "item",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the item to check"
          }
        ]
      },
      {
        "name": "none",
        "displayName": "window.SC#none",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the passed value is null or undefined.  This avoids errors\n    from JSLint complaining about use of ==, which can be technically\n    confusing.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "value to test"
          }
        ]
      },
      {
        "name": "empty",
        "displayName": "window.SC#empty",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Verifies that a value is either null or an empty string. Return false if\n    the object is not a string.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "value to test"
          }
        ]
      },
      {
        "name": "isArray",
        "displayName": "window.SC#isArray",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns YES if the passed object is an array or Array-like.\n\n    SproutCore Array Protocol:\nthe object has an objectAt property; or\nthe object is a native Array; or\nthe object is an Object, and has a length property\n\n    Unlike SC.typeOf this method returns true even if the passed object is\n    not formally array but appears to be array-like (i.e. has a length\n    property, responds to .objectAt, etc.)",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object to test"
          }
        ]
      },
      {
        "name": "makeArray",
        "displayName": "window.SC#makeArray",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Makes an object into an Array if it is not array or array-like already.\n    Unlike SC.A(), this method will not clone the object if it is already\n    an array.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Actual array"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "object to convert"
          }
        ]
      },
      {
        "name": "A",
        "displayName": "window.SC#A",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Converts the passed object to an Array.  If the object appears to be\n    array-like, a new array will be cloned from it.  Otherwise, a new array\n    will be created with the item itself as the only item in the array.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "Array of items"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "any enumerable or array-like object."
          }
        ]
      },
      {
        "name": "guidFor",
        "displayName": "window.SC#guidFor",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "\"\n    Returns a unique GUID for the object.  If the object does not yet have\n    a guid, one will be assigned to it.  You can call this on any object,\n    SC.Object-based or not, but be aware that it will add a _guid property.\n\n    You can also use this method on DOM Element objects.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "String",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the unique guid for this instance."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "any object, string, number, Element, or primitive"
          }
        ]
      },
      {
        "name": "keyFor",
        "displayName": "window.SC#keyFor",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns a key name that combines the named key + prefix.  This is more\n    efficient than simply combining strings because it uses a cache\n    internally for performance.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "String",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "result"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "prefix",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the prefix to attach to the key"
          },
          {
            "title": "param",
            "type": "String",
            "name": "key",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The key"
          }
        ]
      },
      {
        "name": "generateGuid",
        "displayName": "window.SC#generateGuid",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Generates a new guid, optionally saving the guid to the object that you\n    pass in.  You will rarely need to use this method.  Instead you should\n    call SC.guidFor(obj), which return an existing guid if available.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "String",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the guid"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object to assign the guid to"
          },
          {
            "title": "param",
            "type": "String",
            "name": "prefix",
            "isOptional": false,
            "defaultValue": "",
            "desc": "prefixes the generated guid"
          }
        ]
      },
      {
        "name": "hashFor",
        "displayName": "window.SC#hashFor",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns a unique hash code for the object. If the object implements\n    a hash() method, the value of that method will be returned. Otherwise,\n    this will return the same value as guidFor().\n\n    If you pass multiple arguments, hashFor returns a string obtained by\n    concatenating the hash code of each argument.\n\n    Unlike guidFor(), this method allows you to implement logic in your\n    code to cause two separate instances of the same object to be treated as\n    if they were equal for comparisons and other functions.\n\n    <b>IMPORTANT</b>: If you implement a hash() method, it MUST NOT return a\n    number or a string that contains only a number. Typically hash codes\n    are strings that begin with a \"%\".",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "String",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the hash code for this instance."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object...",
            "name": "objects",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object(s)"
          }
        ]
      },
      {
        "name": "isEqual",
        "displayName": "window.SC#isEqual",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This will compare the two object values using their hash codes.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Boolean",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "YES if the two have equal hash code values."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "a",
            "isOptional": false,
            "defaultValue": "",
            "desc": "first value to compare"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "b",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the second value to compare"
          }
        ]
      },
      {
        "name": "compare",
        "displayName": "window.SC#compare",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "This will compare two javascript values of possibly different types.\n   It will tell you which one is greater than the other by returning\n   -1 if the first is smaller than the second,\n    0 if both are equal,\n    1 if the first is greater than the second.\n\n   The order is calculated based on SC.ORDER_DEFINITION , if types are different.\n   In case they have the same type an appropriate comparison for this type is made.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "NUMBER",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "-1 if v < w, 0 if v = w and 1 if v > w."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "v",
            "isOptional": false,
            "defaultValue": "",
            "desc": "first value to compare"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "w",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the second value to compare"
          }
        ]
      },
      {
        "name": "K",
        "displayName": "window.SC#K",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Empty function.  Useful for some operations.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": ""
          }
        ],
        "params": []
      },
      {
        "name": "beget",
        "displayName": "window.SC#beget",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Creates a new object with the passed object as its prototype.\n\n    This method uses JavaScript's native inheritence method to create a new\n    object.\n\n    You cannot use beget() to create new SC.Object-based objects, but you\n    can use it to beget Arrays, Hashes, Sets and objects you build yourself.\n    Note that when you beget() a new object, this method will also call the\n    didBeget() method on the object you passed in if it is defined.  You can\n    use this method to perform any other setup needed.\n\n    In general, you will not use beget() often as SC.Object is much more\n    useful, but for certain rare algorithms, this method can be very useful.\n\n    For more information on using beget(), see the section on beget() in\n    Crockford's JavaScript: The Good Parts.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the new object."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object to beget"
          }
        ]
      },
      {
        "name": "copy",
        "displayName": "window.SC#copy",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Creates a clone of the passed object.  This function can take just about\n    any type of object and create a clone of it, including primitive values\n    (which are not actually cloned because they are immutable).\n\n    If the passed object implements the clone() method, then this function\n    will simply call that method and return the result.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the cloned object"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the object to clone"
          },
          {
            "title": "param",
            "type": "Boolean",
            "name": "deep",
            "isOptional": false,
            "defaultValue": "",
            "desc": "if true, a deep copy of the object is made"
          }
        ]
      },
      {
        "name": "merge",
        "displayName": "window.SC#merge",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns a new object combining the values of all passed hashes.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "new Object"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object...",
            "name": "object",
            "isOptional": false,
            "defaultValue": "",
            "desc": "one or more objects"
          }
        ]
      },
      {
        "name": "keys",
        "displayName": "window.SC#keys",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns all of the keys defined on an object or hash.  This is useful\n    when inspecting objects for debugging.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "array of keys"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The Object"
          }
        ]
      },
      {
        "name": "inspect",
        "displayName": "window.SC#inspect",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Convenience method to inspect an object.  This method will attempt to\n    convert the object into a useful string description.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "String",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "A description of the object"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "Object",
            "name": "obj",
            "isOptional": false,
            "defaultValue": "",
            "desc": "The object you want to inspec."
          }
        ]
      },
      {
        "name": "tupleForPropertyPath",
        "displayName": "window.SC#tupleForPropertyPath",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Returns a tuple containing the object and key for the specified property\n    path.  If no object could be found to match the property path, then\n    returns null.\n\n    This is the standard method used throughout SproutCore to resolve property\n    paths.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Array",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "array with [object, property] if found or null"
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "path",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the property path"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "root",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional parameter specifying the place to start"
          }
        ]
      },
      {
        "name": "objectForPropertyPath",
        "displayName": "window.SC#objectForPropertyPath",
        "objectType": "method",
        "isPrivate": false,
        "isStatic": false,
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "augments": [],
        "overview": "Finds the object for the passed path or array of path components.  This is\n    the standard method used in SproutCore to traverse object paths.",
        "exceptions": [],
        "returns": [
          {
            "title": "return",
            "type": "Object",
            "name": "",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the found object or undefined."
          }
        ],
        "params": [
          {
            "title": "param",
            "type": "String",
            "name": "path",
            "isOptional": false,
            "defaultValue": "",
            "desc": "the path"
          },
          {
            "title": "param",
            "type": "Object",
            "name": "root",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional root object.  window is used otherwise"
          },
          {
            "title": "param",
            "type": "Integer",
            "name": "stopAt",
            "isOptional": false,
            "defaultValue": "",
            "desc": "optional point to stop searching the path."
          }
        ]
      }
    ],
    "properties": [
      {
        "name": "EMPTY_ARRAY",
        "displayName": "window.SC#EMPTY_ARRAY",
        "objectType": "property",
        "propertyType": "Array",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "window.SC",
        "overview": "Empty array.  Useful for some optimizations.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "EMPTY_HASH",
        "displayName": "window.SC#EMPTY_HASH",
        "objectType": "property",
        "propertyType": "Hash",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "window.SC",
        "overview": "Empty hash.  Useful for some optimizations.",
        "isConstant": false,
        "isPrivate": false
      },
      {
        "name": "EMPTY_RANGE",
        "displayName": "window.SC#EMPTY_RANGE",
        "objectType": "property",
        "propertyType": "Range",
        "author": "",
        "see": [],
        "since": "",
        "version": "",
        "deprecated": "",
        "memberOf": "window.SC",
        "overview": "Empty range. Useful for some optimizations.",
        "isConstant": false,
        "isPrivate": false
      }
    ]
  }
];