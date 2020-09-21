function solution(n) {
    var bin = n.toString(2);
    var countN = count(bin);

    //2진수로 변환한 값들의 1의 갯수와 다음 큰 숫자를 만족할 때의 값을 리턴함
    for(var i=n+1; ;i++){
        if(countN == count(i.toString(2))) return i;
    }

    //2진수의 1의 갯수를 카운팅함
    function count(a) {
        var countOne = 0;
        for(var i=0; i<a.length; i++){
            if(a[i] == 1) countOne++;
        }
        return countOne;
    }
}