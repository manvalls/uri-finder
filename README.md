[![NPM](https://nodei.co/npm/uri-finder.png?downloads=true)](https://nodei.co/npm/uri-finder/)

This package uses or may use at some point in the future ECMAScript 6 features. Use it on a compatible environment or transpile it with Traceur, Closure Compiler, es6-transpiler or equivalent. Please note that some of these have flaws and bugs, test your code carefully until you find a suitable tool for your task.

When cloning this repository, put the folder inside another named "node_modules" in order to avoid potential errors related to npm's dependency handling, and then run `npm install` on it.

No piece of software is ever completed, feel free to contribute and be humble.

# URI finder

## Sample usage:

```javascript
var uriFinder = require('uri-finder'),
    text =  'Check this out: ' +
            'http://user:password@foo.com:8080/index.html?foo=bar&place=holder#lorem-ipsum',
    result;

result = uriFinder.find(text);
// ['http://user:password@foo.com:8080/index.html?foo=bar&place=holder#lorem-ipsum']

uriFinder.find(text,function(uri,scheme,userinfo,host,port,path,query,fragment){
  // ...
});

result = uriFinder.replace(text,'<a href="$uri">$host$path</a>');

result = uriFinder.replace(text,function(uri,scheme/* etc */){
  if(scheme.match(/^https?$/)) return '<a href="' + uri + '">' + uri + '</a>';
  else return uri;
});

```

