# BLUPAY - A SIMPLE API CHALLENGE
Submission by [Daniel Segovia](https://github.com/sego90)
## About
Topcoder challenge by IBM. The purpose of the challenge is to create a simple API that serves a json response to a get request to the route `/products`. 
## How to Start the Server
Download and extract the files on a folder. Once in root file do the following:  
First run `npm install`.  
Then run `npm start`, the server defaults to port 3000.
If you open a broswer and enter [http://localhost:3000/products](http://localhost:3000/products) you should recieve a json with the products. You could also do a postman GET request to the same route. 
## Packages Used
### Init
* [express-generator](https://expressjs.com/en/starter/generator.html) - Used this generator to create the starting file structure to simulate an unopinionated aproach. 
### Depencies
* [debug](https://www.npmjs.com/package/debug) - A tiny node.js debugging utility modelled after node core's debugging technique.
* [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
* [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js
### Dev-Depencies
* [eslint](https://www.npmjs.com/package/eslint) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb) - This package provides Airbnb's .eslintrc as an extensible shared config.
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) - This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
## Postman Collection
In the root directory there is a file named `Products.postman_collection.json` that can be opened with postman to load the collection. 