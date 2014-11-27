
var pct = '(?:\\%[0-9a-fA-F]{2})',
    gen = '(?:\\:|\\/|\\?|\\#|\\[|\\]|\\@)',
    sub = '(?:\\!|\\$|\\&|\\\'|\\(|\\)|\\*|\\+|\\,|\\;|\\=)',
    reserved = '(?:' + sub + '|' + gen + ')',
    unreserved = '[a-zA-Z0-9\\-\\.\\_\\~]',
    
    scheme = '([a-zA-Z][a-zA-Z0-9\\+\\-\\.]*)',
    
    userinfo = '((?:' + unreserved + '|' + pct + '|' + sub + '|\\:)*)',
    
    decOct = '(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5]))',
    IPv4 = '(?:(?:' + decOct + '\\.){3}' + decOct + ')',
    
    h16 = '(?:[a-fA-F0-9]{1,4})',
    ls32 = '(?:(?:' + h16 + '\\:' + h16 + ')' + '|' + IPv4 + ')',
    
    IPv6 = '(?:' +
              '(?:(?:' + h16 + '\\:' + '){6}' + ls32 + ')|' +
              '(?:\\:\\:(?:' + h16 + '\\:' + '){5}' + ls32 + ')|' +
              '(?:(?:' + h16 + ')?\\:\\:(?:' + h16 + '\\:' + '){4}' + ls32 + ')|' +
              '(?:(?:(?:' + h16 + '\\:)?' + h16 + ')?\\:\\:(?:' + h16 + '\\:' + '){3}' + ls32 + ')|' +
              '(?:(?:(?:' + h16 + '\\:){0,2}' + h16 + ')?\\:\\:(?:' + h16 + '\\:' + '){2}' + ls32 + ')|' +
              '(?:(?:(?:' + h16 + '\\:){0,3}' + h16 + ')?\\:\\:' + h16 + '\\:' + ls32 + ')|' +
              '(?:(?:(?:' + h16 + '\\:){0,4}' + h16 + ')?\\:\\:' + ls32 + ')|' +
              '(?:(?:(?:' + h16 + '\\:){0,5}' + h16 + ')?\\:\\:' + h16 + ')|' +
              '(?:(?:(?:' + h16 + '\\:){0,6}' + h16 + ')?\\:\\:)'
            + ')',
    
    IPvF = '(?:v[a-fA-F0-9]+\\.(?:' + unreserved + '|' + sub + '|\\:)+)',
    IPLiteral = '(?:\\[(?:' + IPv6 + '|' + IPvF + ')\\])',
    regName = '(?:(?:' + unreserved + '|' + pct + '|' + sub + ')*)',
    
    host = '(' + IPLiteral + '|' + IPv4 + '|' + regName + ')',
    port = '([0-9]*)',
    
    authority = '(?:' + userinfo + '\\@)?' + host + '(\\:' + port + ')?',
    
    pchar = '(?:' + unreserved + '|' + pct + '|' + sub + '|\\:|\\@)',
    segment = '(?:' + pchar + '*)',
    segmentNz = '(?:' + pchar + '+)',
    
    pathAbempty = '(?:(?:\\/' + segment + ')*)',
    pathAbsolute = '(\\/' + '(?:' + segmentNz + pathAbempty + ')?)',
    pathRootless = '(' + segmentNz + pathAbempty + ')',
    pathEmpty = '()',
    
    hier =  '(?:(?:\/\/' + authority + '(' + pathAbempty + ')' + 
            '|' + pathAbsolute + '|' + pathRootless + '|' + pathEmpty + ')?)',
    query = '((?:' + pchar + '|' + '\\/' + '|' + '\\?)*)',
    fragment = query;

module.exports = new RegExp(
  '(?:' + scheme + '\\:(?!\\s|$)' + 
  hier + '(?:\\?' + query + ')?(?:\\#' + fragment + ')?)',
  'g');
