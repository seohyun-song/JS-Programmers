function solution(n) {
    var count = 0;
    var sum = 0;

    for(var i=1; i<=n; i++){
        sum = i;
        for(var j=i+1; j<=n; j++){
            sum += j;
            if(sum == n) count++;
            if(sum > n) break;
        }
    }
    return count+1;
}