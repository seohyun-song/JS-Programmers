//JadenCase: 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열
function solution(s) {
    var idx = 0;
    var answer = '';

    for(var i=0; i<s.length; i++){
        //공백 다음의 문자열의 인덱스를 0으로 설정하여 단어의 첫 문자를 인식
        if(s[i] == ' ') {
            answer += ' ';
            idx = 0;
            continue;
        }

        if(idx == 0) {
            //s[i]값에 새로운 값을 할당할 수 없음. readonly! answer값에 누적하여 string을 구함
            answer += s[i].toUpperCase();
            idx++;
        } else {
            answer += s[i].toLowerCase();
        }
    }
    return answer;
}