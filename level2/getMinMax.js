function solution(s) {
    var result = [];
    result = s.split(' ').map(v => parseInt(v)).sort(function(a,b){return a-b;});
    return result[0]+' '+result.pop();
}