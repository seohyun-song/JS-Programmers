/*
    월간 코드 챌린지2 - 음양 더하기
    어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
    
    제한 사항
    ● absolutes의 길이는 1이상 1,000이하입니다.
    ● signs의 길이는 absolutes의 길이와 같습니다. 
    입출력 예 #1

    signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
    따라서 세 수의 합인 9를 return 해야 합니다.
    입출력 예 #2

    signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
    따라서 세 수의 합인 0을 return 해야 합니다.

    * 사인에 따른 플러스누적썸 혹은 마이너스누적썸 문제
 */
function solution(absolutes, signs) {
    var answer = 0;
    for(var i = 0; i < signs.length; i++) {
        if(signs[i] == true) {
            answer += absolutes[i];
        } else {
            answer -= absolutes[i];
        }
    }
    return answer;
}