var regexp = require('./regexp.js'),
    map = {
      "uri": "$&",
      "scheme": "$1",
      "userinfo": "$2",
      "host": "$3",
      ":port": "$4",
      "port": "$5",
      "path": "$6$7$8$9",
      "query": "$10",
      "fragment": "$11"
    },
    repRegExp = /(\$+)(uri|scheme|userinfo|host|:port|port|path|query|fragment)/g;

function repFun(m,dollars,key){
  if(dollars.length % 2) return map[key];
  return m;
}

exports.find = function(str,check,thisArg){
  var ret;
  
  if(check){
    ret = [];
    
    str.replace(regexp,function(uri,scheme,userinfo,host,p,port,p1,p2,p3,p4,query,fragment){
      if(check.call(thisArg,uri,scheme,userinfo,host,port,p1 || p2 || p3 || p4,query,fragment)) ret.push(uri);
      return '';
    });
    
    return ret;
  }
  
  return str.match(regexp);
};

exports.replace = function(str,replace,thisArg){
  
  if(thisArg || replace.constructor == Function) return str.replace(regexp,
  function(uri,scheme,userinfo,host,p,port,p1,p2,p3,p4,query,fragment){
    return replace.call(thisArg,uri,scheme,userinfo,host,port,p1 || p2 || p3 || p4,query,fragment);
  });
  
  replace = replace.replace(repRegExp,repFun);
  return str.replace(regexp,replace);
};

