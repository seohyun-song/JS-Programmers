function solution(strings, n) {
    /*
        arr.sort([compareFunction])
        compareFunction이 제공되지 않으면 요소를 문자열ㄹ로 변환하고 유니코드 포인트 순서로 문자열을 비교하여 정렬
        a>b return 1 -> b a순 정렬
        a<b return -1 -> a b순 정렬
        a==b return 0 -> 그대로
    */
    strings.sort(function(a,b) {
        if(a[n] > b[n]) {return 1;}
        if(a[n] < b[n]) {return -1;}
        /*
            referenceStr.localeCompare(compareStr)
            참조 '문자열'이 정렬순서에서 앞/뒤/같은지를 숙자로 반환
        */
        if(a[n] === b[n]) {return a.localeCompare(b);}
    });

    return strings;
}