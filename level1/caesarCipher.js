function solution(s,n) {
    var output = '';
    for(var i in s) {
        //주어진 인덱스에 대한 UTF-16코드를 나타내는 0qnxj 65535사이의 정수를 반환
        var uni = s.charCodeAt(i);
        var uniN = uni + n;
        //upper case
        if(65<=uni && uni<=90) {
            if(uniN>90) {
                uniN = uniN - 26;
            };
            //UTF-16코드 유닛의 시퀀스로부터 문자열을 생성해 반환
            output += String.fromCharCode(uniN);
        
        //lower case
        } else if(97<=uni && uni<=122) {
            if(uniN>122) {
                uniN = uniN - 26;
            };
            output +=String.fromCharCode(uniN);
        
        //space case
        } else {output += ' ';}
    }
    return output;
}