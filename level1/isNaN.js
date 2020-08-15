function solution(s) {
    var len=s.length;
    /*
      Number() 숫자가 아닌 값을 입력했을 때는 NaN값을 리턴
      e 자연상수로서 숫자로 읽힐 수 있음  
     */
    return (len==4||len==6) && !isNaN(Number(s)) ? !s.includes('e'): false;
}