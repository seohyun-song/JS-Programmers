function solution(answers) {
    var std1 = [1, 2, 3, 4, 5];
    var std2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var count1 = 0, count2 = 0, count3 = 0;
    var num1 = 0, num2 = 0, num3 = 0;

    //각 학생의 정답수를 체크함
    for(var i in answers){
        //후위연산자와 배열 인덱스를 활용하여 카운팅함
        if(std1[num1++ % std1.length] == answers[i]) count1++;
        if(std2[num2++ % std2.length] == answers[i]) count2++;
        if(std3[num3++ % std3.length] == answers[i]) count3++;
   
    }

    //정답자를 오름차순으로 return하기 위해 순서대로 배열생성
    var count = [count1, count2, count3];
    var max = Math.max.apply(null, count);
    var output = [];
    for(var j=0; j<count.length; j++){
        if(count[j] == max) {output.push(j+1);}
    }
    return output;
}