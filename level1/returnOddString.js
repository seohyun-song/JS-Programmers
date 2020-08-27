function solution(s) {
    //단어(공백기준)별로 짝/홀수 인덱스 판단 하기 위함
    var count = 0;
    var output = '';

    for(var i=0; i<s.length; i++) {
        if(s[i] == ' ') {
            output += ' ';
            count = 0;
            continue;
        }
        //0%n은 무조건 0임->0번째 인덱스 짝수번ㄷ째 알파벳으로 처리
        if(count%2 == 0) {
            output += s[i].toUpperCase();
        } else {
            output += s[i].toLowerCase();
        }
        count++;
    }
    return output;
}