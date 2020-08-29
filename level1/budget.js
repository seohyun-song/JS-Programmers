function solution(d, budget) {
    var sum = 0;
    var count = 0;
    //오름차순으로 정렬함
    d.sort(function(a,b){return a-b;});

    //예산을 채울 수 있는 최대의 부서값을 구하기 위해 탐욕법을 사용하여 작은 값부터 더함
    for(var i=0; i<d.length; i++) {
        sum += d[i];
        if(sum <= budget) {
            count++;
        } else {break;}
    }
    return count;
}