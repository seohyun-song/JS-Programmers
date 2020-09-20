function solution(a,b) {
    var output = 0;
    
    if(a>b) {
        for(var i=b; i<=a; i++) {
            output += i;
        }
        return output;
    } else if(a<b) {
        for(var j=a; j<=b; j++) {
            output += j;
        }
        return output;
    } else {return a;}
}