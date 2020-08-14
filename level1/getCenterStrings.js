function solution(s) {
    var len = s.length;

    //parses a string and returns an integer for using the index
    var i = parseInt(len / 2);
    
    if ((len % 2) === 0){
        return s[i-1]+s[i];
    } else {
        return s[i];
}