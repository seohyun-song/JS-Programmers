function solution(arr) {
    if(arr.length == 1) return [-1];
    /*
        function.apply(thisObj, argArray);
        function:가져다쓸 메서드
        thisObj (optional)현재 객체로 사용될 객체
        argArray: 함수에 전달될 인수 집합
        apply를 통해 Math.min(x,y,z,....n) 매개변수로 전달해야하는 값을 줄 수 있음

        *call메서드와 동일하나 call 메서드는 인자하나 하나를 , apply는 인자 리스트를 전달
    */
    var min= Math.min.apply(null, arr);

    // var idx=arr.indexOf(min);
    // arr.splice(idx,1);

    arr.splice(arr.indexOf(min),1);
    return arr;
    
}