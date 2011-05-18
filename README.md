SproutCore Documentation Generator
==================================

A tool to generate documentation for the SproutCore framework and SproutCore projects, using the JSDoc format.

**Authors**: Majd Taby, Peter Wagenet

Usage
-----

### Basic

    sc-docs --input_dir INPUT_DIRECTORY_PATH

This documents the specified directory and then runs a preview sc-server instance.

### Deploy

    sc-docs --input_dir INPUT_DIRECTORY_PATH --deploy --project PROJECT_NAME \
        --output_dir = OUTPUT_DIRECTORY_PATH

The deploy flag runs sc-build and deploys to the specified directory. If no output_dir is specified then it is deployed to `/Library/WebServer/Documents/`.

### HTML Templates

    sc-docs --input_dir INPUT_DIRECTORY_PATH --template TEMPLATE_PATH --html

By default sc-docs assumes that you want to generate docs for the SproutCore based Doc Viewer. However, you can also generate standard HTML templates.

Dependencies
------------

### Gems

* thor
* child_labor
* rack
* thin *(optional, but recommended)*

### Other

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

