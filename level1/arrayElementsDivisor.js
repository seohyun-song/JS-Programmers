function solution(arr, divisor) {
    var output = [];
    //배열을 오름차순으로 정렬함
    arr.sort(function(a,b){
        return a-b;
    });

    for(var i=0; i<arr.length; i++){
        if((arr[i]%divisor) == 0){
            output.push(arr[i]);
        }
    }

    //빈 배열일 때 -1을 담아 반환
    if(output.length == 0) {
        output.push(-1);
        return output;
    }
    return output;
}