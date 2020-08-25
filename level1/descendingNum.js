function solution(n) {
    var str = n.toString();
    str=str.split('').sort(function(a,b){return b-a;}).join('');
    return parseInt(str);

    //return parseInt((n+'').split('').sort().reverse().join(;));
}