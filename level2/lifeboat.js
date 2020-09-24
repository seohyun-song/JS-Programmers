function solution(people, limit) {
 
        var startIdx = 0;
        var endIdx = people.length-1;
        var count = 0;
        people.sort(function(a,b){return a-b});
        
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