function solution(A,B) {
    //오름차순 정렬
    A.sort(function(a,b){return a-b;});
    //내림차순 정렬
    B.sort(function(a,b){return b-a;});

    var sum = 0;
    //누적된 값이 최솟값이 되기 위해 가장 작은 수는 가장 큰 수와 곱해져야함
    for(var i=0; i<A.length; i++){
        sum += A[i]*B[i];
    }
    return sum;
}