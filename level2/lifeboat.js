function solution(people, limit) {
        /* 
            탐욕법(greedy)
            min + max > limit => max는 어떠한 값과도 함께 구명보트를 탈수 없다.
        */
        var startIdx = 0;
        var endIdx = people.length-1;
        var count = 0;
        people.sort(function(a,b){return a-b});
        
        //startIdx = endIdx => 값이 혼자 남았을 때 if문 상관없이 count++되고 while문을 나옴
        while(startIdx <= endIdx) {
            if((people[startIdx]+people[endIdx]) <= limit){
                startIdx++;
            }
            count++;
            endIdx--;
        }
        return count;
        
    }   
    /* 오답 */
    //     var count = 0;
    //     people.sort(function(a,b){return b-a;});
        
    //     for(var i=people.length-1; i>=0; i--){
    //         for(var j=i-1; j>=0; j--){
    //             if((people[i]+people[j])<=limit){
    //                 count++;
    //                 people.splice(j);
    //                 break;
    //             } 
    //         }
    //     }
    //     count += people.length;
    //     return count;