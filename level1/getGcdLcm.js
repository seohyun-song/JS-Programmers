function solution(n, m) {
    var output = [];
    if(n == m) return [n,n];
    var max = Math.max(n,m);
    var min = Math.min(n,m);
    
    if(max%min == 0){
        output.push(min);
        output.push(max);
        return output;
    } else {
        var val = max;
        var div = min;
        while(1){
            var rest = max%min;
            if(max%min==0){break;}
            max=min;
            min=rest;
        }
        output.push(min);
        output.push((val/min)*(div/min)*min);
        return output;
    }

}