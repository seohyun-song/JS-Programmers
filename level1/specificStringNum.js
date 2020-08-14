function solution(s) {
    var str = s.toLowerCase();
    var numP = 0;
    var numY = 0;

    for(var i= 0; i < s.length; i++) {
        if(str[i] == 'p') {
            numP++;
        } else if (str[i] == 'y') {
            numY++;
        }
    }

    if(numP == 0 && numY == 0) {
        return true;
    } else {
        if(numP == numY) {
            return true;
        } else {return false;}
    }

}