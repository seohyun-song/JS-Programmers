function solution(s) {
    /*
        split() : string 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔
        sort(): 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 포인트 값에 따라 정렬->오름차순
        reverse(): 순서 반전
        join(); split()에서 구분자로 나웠던 문자열을 합침
    */
    return s.split('').sort().reverse().join('');
}