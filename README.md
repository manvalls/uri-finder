# URI finder

## Sample usage:

```javascript
var uriFinder = require('uri-finder'),
    text =  'Check this out: ' +
            'http://user:password@foo.com:8080/' +
            'index.html?foo=bar&place=holder#lorem-ipsum',
    result;

result = uriFinder.find(text);
// ['http://user:password@foo.com:8080/index.html?foo=bar&place=holder#lorem-ipsum']

uriFinder.find(text,function(uri,scheme,userinfo,host,port,path,query,fragment){
  // ...
});

result = uriFinder.replace(text,'<a href="$uri">$host$path</a>');

result = uriFinder.replace(text,function(uri,scheme /* etc */ ){
  if(scheme.match(/^https?$/)) return '<a href="' + uri + '">' + uri + '</a>';
  else return uri;
});

```

