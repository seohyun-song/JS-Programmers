function solution(n) {
    var output = 0;
    //어떤 수로 정수가 나누어떨어지는 것
    for(var i=1; i<=n; i++) {
        if((n%i)==0){
            output += i;
        }
    }
    return output;
}