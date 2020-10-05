/*
    두 수의 최소공배수(least common multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를
    의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는
    n개의 수들의 배수 줄 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를
    반환하는 함수 solution을 완성해주세요.

    두 수끼리 LCM을 구해서 누적하여 최종 LCM을 구한다.
 */
function solution(arr) {
    var result = arr.reduce(function(accumulator, currentValue, currentIndex, arr){
        var gcd = 1;
        var min = Math.min(accumulator, currentValue);
        var max = Math.max(accumulator, currentValue);
        if(max%min == 0){
            gcd = min;
        } else{
            while(max%min != 0){
                gcd = max%min;
                max=min;
                min=gcd;
            }
        }
        return (accumulator/gcd)*(currentValue/gcd)*gcd;
    })
    return result;
}