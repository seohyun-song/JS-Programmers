/*
    int로 표현할 수 있는 자료형의 범위 내에서 항상 값이 있을 수 있도록해야함
    (A + B) % C = (A % C)+(B % C) 성질을 이용하여 매번 계산 결과에 
    1234567으로 나눈 나머지를 대신 넣는 것으로 int 범위 내에 항상 값이 존재함을 보장함
 */
function solution(n) {
    var fibo = [0, 1];
    for(var i=2; i<=n; i++){
        fibo.push((fibo[i-2]+fibo[i-1]) % 1234567);
    }
    return fibo[n];
}