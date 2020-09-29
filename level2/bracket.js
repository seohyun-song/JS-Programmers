function solution(s) {
    /*
        스택구조를 활용한 짝찾기 문제
        '('일 경우 push , ')'일경우 스택에 '('이 있으면 pop 없으면 continue;
        마지막에 스택이 비어 있을 경우 true를 리턴함
    */
    var result = 0;

    if(s[0] === ')') return false;
    for(var i=0; i<s.length; i++){
        if(s[i] === '('){
            result++;
        } else {
            if(result > 0){
                result--;
            } else {continue;}
        }
    }
    return result == 0 ? true : false;
}
