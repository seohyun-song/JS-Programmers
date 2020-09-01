function solution(n, lost, reserve) {
    var arr = [];
    var count = 0;

    for(var i=0; i<n; i++){
        arr.push(1);
    }

    //lost와 reserve가 같을 경우 -1리턴
    for(var j=0; j<lost.length; j++){
        for(var z=0; z<reserve.length; z++){
            if(lost[j] == reserve[z]){
                lost[j] = -1;
                reserve[z]= -1;
                continue;
            }
        }
    }
    //체육복이 없는 사람을 0값으로 바꿈
    for(var i=0; i<lost.length; i++){
        if(lost[i] != -1) arr[lost[i]-1]=0;
    }
    
    //체육복이 없는 사람의 인덱스와 빌려주는 사람의 인덱스를 비교
    for(var i=0; i<arr.length; i++){
        if(arr[i] == 1) continue;
        for(var j=0; j<reserve.length; j++) {
            if(reserve[j] == -1) continue;
            if(Math.abs(i - (reserve[j]-1)) == 1) {
                arr[i] = 1;
                reserve[j] = -1;
                break;
            }
        }
    }
    //체육복이 있는 사람의 수를 카운팅함
    for(var i in arr) {
        if(arr[i] == 1) count++;
    }
    return count;
}