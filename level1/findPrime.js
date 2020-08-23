function solution(n) {
    var num = [];
    var output = 0;
    //0~n까지의 배열의 요소 추가
    for(var i=0; i<=n; i++) {
        num.push(i);
    }
    //요소의 값을 0으로 재할당
    num[0] = 0;
    num[1] = 0;
    
    //에라토스테네스의 체로 소수를 찾음
    for(var i=2; i<=n; i++){
        //continue: 현재의 반복에서 명령문의 실행을 종료하고 반복문의 처음으로 돌아가여 루프문의 다음 코드 실행-> 반복문의 횟수를 줄임
        if(num[i]==0) continue;
        for(var j=i*2; j<=n; j+=i){
            num[j] = 0;
        }
    }
    //소수의 개수만 카운팅함
    for(var i=0; i<=n; i++){
        if(num[i]!= 0) output++;
    }
    return output;
    
}