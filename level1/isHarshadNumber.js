function solution(x) {
    var sum = (x+'').split('').map(v => parseInt(v)).reduce(function(acc,cur){return acc+cur;});
    return (x%sum == 0)? true : false;
}