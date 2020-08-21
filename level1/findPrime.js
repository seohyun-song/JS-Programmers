function solution(n) {
    var num = [];
    var output = 0;
    for(var i=0; i<=n; i++) {
        num.push(i);
    }
    
    num[0] = 0;
    num[1] = 0;
    
    for(var i=2; i<=n; i++){
        if(num[i]==0) continue;
        for(var j=i*2; j<=n; j+=i){
            num[j] = 0;
        }
    }
    
    for(var i=0; i<=n; i++){
        if(num[i]!=0) output++;
    }
    return output;
    
}