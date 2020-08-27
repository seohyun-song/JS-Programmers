function solution(n) {
    //n의 제곱근 리턴
    var x = Math.sqrt(n);

    //제곱근이 정수인지 판별
    return Number.isInteger(x) ? Math.pow(x+1,2) : -1;
}