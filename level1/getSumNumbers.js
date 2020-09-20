function solution(numbers) {
    var answer = [];
    //서로 다른 인덱스에 있는 두 수를 더함
    for(var i=0; i<numbers.length; i++){
        for(var j=i+1; j<numbers.length; j++){
            answer.push(numbers[i]+numbers[j]);
        }
    }
    //오름차순으로 정렬
    answer.sort(function(a,b){return a-b;});
    //같은 수는 제거함
    for(var i=answer.length-1; i>0;i--){
        if(answer[i-1] == answer[i]) answer.splice(i,1);
    }

    return answer;
}