function solution(arr) {
    /*
        N복잡도 문제발생. 효율성 떨어짐
        splice()메서드가 N복잡도 for문과 겹쳐서 N제곱이 됨
        for(var i=arr.length-1; i>0; i--){
            if(arr[i] == arr[i-1]){
                arr.splice(i,1);
            }
        }
    return arr;
    */

    /*
        var output = [];
        output[0] = arr[0];
        for(var i=1; i<arr.length; i++) {
            if(arr[i] != arr[i-1]) {
                output.push(arr[i]);
            }
        }
        return output;
    */
    var output = [];
    var x = -1;

    for(var i=0; i<arr.length; i++){
        if(x != arr[i]){
            output.push(arr[i]);
        }
        x=arr[i];
    }
    return output;


}