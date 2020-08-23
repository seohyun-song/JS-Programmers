function solution(participant, completion) {
    //배열의 요소를 정렬하여 그 배열을 반환. 기본 정렬 순서는 문자열의 유니코드 포인트 따름
    participant.sort();
    completion.sort();
    var idx = participant.length;
    
    //배열을 정렬했으므로 앞에서 순서대로 비교하면 됨
    for(var i in completion) {
        if(participant[i]!== completion[i]){
            return participant[i];
        }
    }
    //participant마지막 요소에 완주하지 못한 선수가 있을 경우
    return participant[idx-1];
/*
    time out!
    for(var i in participant) {
        var index=completion.indexOf(participant[i]);
        if(completion.includes(participant[i])==true){
            completion.splice(index,1);
        }else {
            return participant[i];
        }
    } 
*/
}