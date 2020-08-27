function solution(arr1, arr2) {
    var output=[[]];
    //다음코드 없으면 안됨
    for(var z=0; z<arr1.length; z++){output.push([]);}
    for(var i=0; i<arr1.length; i++){
        for(var j=0; j<arr1[0].length; j++){
            output[i][j]=(arr1[i][j]+arr2[i][j]);
        }
    }
    return output;

    //다른사람풀이
    // return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
}