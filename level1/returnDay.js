function solution(a, b) {
    /*
        숫자를 사용한 Date객체 생성
        getDay: returns the day of the week(0~6). SUN is 0.
    */
    var day = new Date(2016, a-1, b).getDay();
    if(day == 0) {return 'SUN';}
    if(day == 1) {return 'MON';}
    if(day == 2) {return 'TUE';}
    if(day == 3) {return 'WED';}
    if(day == 4) {return 'THU';}
    if(day == 5) {return 'FRI';}
    if(day == 6) {return 'SAT';}
}