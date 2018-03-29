# parse-paginate-query

A helper to paginate Parse JS SDK queries

![Travis](https://api.travis-ci.org/owsas/parse-paginate-query.svg?branch=master)

## Usage

```ts
import Parse from 'parse/node';
import { paginateQuery } from 'parse-paginate-query';

const query = new Parse.Query('TestClass');
query.limit(20);
query.skip(100);

paginateQuery(query)
  .then((response) => {
    const total = response.total; // The total of results in the db that match the query
    const results = response.results; // The results, returned by query.find()
    const limit = response.limit; // The limit of the query
    const skip = response.skip; // The skip of the query 
  });
```

## Environments supported
* React Native
* Node.js
* Browser

In fact, we only interact with the provided query functions, and do not call any other Parse API. Therefore you can use it for any of the provided libraries by the Parse community.

## Dev Mode

Clone this repo, and start adding your code in the `index.ts` file.  
When you are done, write the tests in the `index.test.ts` file. For testing, this repo works with [Jest](https://facebook.github.io/jest/).

Once you finished, you can publish your module to npm with `npm publish`. This will compile your Typescript code
and send it to npm.

Make sure to change the name of the package in `package.json`

## Dev Features
* Testing with Jest
* Linting out of the box (checks the style of your code), with TSLint
* Build, prepublish and other scripts to help you to develop
* Works with Typescript: Static typing for your JS Applications, reducing amount of runtime errors
* Coverage out of the box, thanks to Jest
* Uses deterministic module resolving, with Yarn

## Credits

Developed by Juan Camilo Guarín Peñaranda,  
Otherwise SAS, Colombia  
http://owsas.com  
2018

## License 

MIT.