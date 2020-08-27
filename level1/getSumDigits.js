function solution(n)
{   
    var arr = [];
    var sum = 0;
    arr=(n+'').split('').map(v => parseInt(v));
    for(var i in arr) {sum += arr[i];}
    return sum;
}