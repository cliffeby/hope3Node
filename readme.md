<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<h1>Framework</h1>
I used the Node/Express template on Webstrorm 10.  The only addition was nodemon  (npm i nodemon -g) to facilitate restarts (rs) in lieu of CtrlC Y npm start.

I was unable to structure this framework into the meanjs 4.0 file layout.  The Routes path seems to require a specific directory.  Additionally, the Node/Express template on Webstrorm 10 requires an HTML template.  Jade was the default setting.

<h1>Install and run</h1>
The Node/Express template on Webstrorm 10 requires an npm install to install the node and express modules.  Nodemon  (npm i nodemon -g) was added to facilitate restarts (rs) in lieu of CtrlC Y npm start.
To run, use <b>npm start.</b>

<h1>HOPE Data model</h1>
<ul>
<li>Users -properties and attributes TBD</li>
<li>Categories -properties and attributes TBD</li>
<ul>
<li>Items -properties and attributes TBD</li>
</ul>
<li>Locations</li>  
<li>About</li>    
</ul>
<h1>RESTful URLs</h1> 
<h2>General guidelines for RESTful URLs</h2>
<ul>
<li>A URL identifies a resource. </li>
<li>URLs should include nouns, not verbs. </li>
<li>Use plural nouns only for consistency (no singular nouns).          </li>
<li>Use HTTP verbs (GET, POST, PUT, DELETE) to operate on the collections and elements.    </li>
<li>You shouldn’t need to go deeper than resource/identifier/resource.       </li>
<li>Put the version number at the base of your URL, for example http://example.com/v1/path/to/resource. </li>
<li>URL v. header: ?If it changes the logic you write to handle the response, put it in the URL. </li>
<li>If it doesn’t change the logic for each response, like OAuth info, put it in the header.  </li>
<li>Specify optional fields in a comma separated list.   </li>
<li>Formats should be in the form of api/v2/resource/{id}.json  </li>
<li></li>
</ul>

<h2>HOPE URL examples</h2>
<ul>
<li>List of categories: ?GET http://localhost:3000/api/v1/categories.json </li>
<li>Filtering is a query: ?GET http://localhost:3000/api/v1/categories.json?type=perishable&sort=desc </li>
<li>A single category in JSON format: ?GET http://localhost:3000/api/v1/categories/1234.json  </li>
<li>All items in (or belonging to) this category: ?GET http://localhost:3000/api/v1/categories/1234/items.json </li>
<li>All items in this category in XML format: ?GET http://localhost:3000/api/v1/categories/1234/items.xml </li>
<li>Add a new article to a particular magazine: ?POST http://localhost:3000/api/v1/categories/1234/items  </li>
 </ul>

<h2>HTTP Verbs</h2>
HTTP verbs, or methods, should be used in compliance with their definitions under the HTTP/1.1 standard.
The action taken on the representation will be contextual to the media type being worked on and
its current state. Here's an example of how HTTP verbs map to create, read, update, delete operations
in a particular context:



</body>
</html>
