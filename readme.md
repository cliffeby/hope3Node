##Framework
An approach to setting up the MobileHope framework using the Node/Express template on Webstorm 10.  The only addition was nodemon  (npm i nodemon -g) to facilitate restarts (rs) in lieu of CtrlC Y npm start.

I was unable to structure this framework into the meanjs 4.0 file layout.  The Routes path seems to require a specific directory.
Additionally, the Node/Express template on Webstorm 10 requires an HTML template.
Jade was the default setting.

###Install and run
The Node/Express template on Webstorm 10 requires an npm install to install the node and express modules.
Nodemon  (npm i nodemon -g) was added to facilitate restarts (rs) in lieu of CtrlC Y npm start.

* npm install nodemon
* npm install
* npm start
* use a browser to access http://localhost:3000/

##HOPE Data model
* Users -properties and attributes TBD
* Categories -properties and attributes TBD
* Items -properties and attributes TBD
* Locations
* About

##RESTful URLs
###General guidelines for RESTful URLs
* A URL identifies a resource
* URLs should include nouns, not verbs
* Use plural nouns only for consistency (no singular nouns)
* Use HTTP verbs (GET, POST, PUT, DELETE) to operate on the collections and elements
* You shouldn’t need to go deeper than resource/identifier/resource
* Put the version number at the base of your URL, for example http://example.com/v1/path/to/resource
* URL v. header: ?If it changes the logic you write to handle the response, put it in the URL
* If it doesn’t change the logic for each response, like OAuth info, put it in the header
* Specify optional fields in a comma separated list
* Formats should be in the form of api/v2/resource/{id}.json

### URL examples

* List of categories: ?GET http://localhost:3000/api/v1/categories.json
* Filtering is a query: ?GET http://localhost:3000/api/v1/categories.json?type=perishable&sort=desc
* A single category in JSON format: ?GET http://localhost:3000/api/v1/categories/1234.json
* All items in (or belonging to) this category: ?GET http://localhost:3000/api/v1/categories/1234/items.json
* All items in this category in XML format: ?GET http://localhost:3000/api/v1/categories/1234/items.xml
* Add a new article to a particular magazine: ?POST http://localhost:3000/api/v1/categories/1234/items

   ### Hope Routes implemented
     
     * /
     * /categories
     * /categories/items/
     * /categories/1/items
     * /locations
     * /about
     * /help


###HTTP Verbs
HTTP verbs, or methods, should be used in compliance with their definitions under the HTTP/1.1 standard.
The action taken on the representation will be contextual to the media type being worked on and
its current state. Here's an example of how HTTP verbs map to create, read, update, delete operations
in a particular context:




###Grunt
Grunt is a task runner added to simplify cli input for default and testing scenarios.  Use grunt, grunt lint, grunt jshint, and grunt jasmine.

###JSHint and ESLint
gruntfile.js includes paramaeters for each.  

###Karma and Jasmine
Testing frameworks.  Karma //TODO.  For Jasmine, spec directory created and sample controller test configured.

