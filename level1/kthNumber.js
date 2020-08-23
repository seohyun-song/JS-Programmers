function solution(array, commands) {
    var output = [];
    for(var i in commands) {
        /*
            arr.sort([compareFunction]) compareFunction이 주어지지않으면 각소의 문자열 변환에 따라
            각 문자의 유니코드 포인트 값에 따라 정렬됨.
            정렬할 요소가 숫자인경우 유니코드는 0~9까지 값만 있으므로 각 문자와 비교함.
            compareFunction으로 값을 기준으로 정렬하도록해야함

            slice(begin, end) 어떤 배열의 begin부터 end(end 미포함!!)까지에 대한 복사본을 새로운 배열 객체로 반환
            원본 배열은 바뀌지 않음
        */
        var arr = array.slice(commands[i][0]-1, commands[i][1]).sort(function(a,b) {
            //오름차순
            return a-b;
        });
        output.push(arr[commands[i][2]-1]);
    }
    return output;
}
