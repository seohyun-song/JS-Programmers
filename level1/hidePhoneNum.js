function solution(phone_number) {
    var len = phone_number.length;

    if(len == 4) {
        return phone_number;
    }
    for( var i = 0; i < len-4; i++) {
        /*
            searches a string for a specified value, or a regular expression, and returns a new string where thr specified values are replaced.
            If u are replacing a value(and not a regular expression), only the first instance of the value will be replaced.
            This method does not change the original string.
        */
        phone_number = phone_number.replace(phone_number[i],'*');
    }
    return phone_number;
}