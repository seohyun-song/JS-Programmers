function solution(s) {
    //slice(): extracts parts of a string returns thr extracted parts in a new string
    return isNaN(Number(s)) ? s[0]+parseInt(s.slice(1)) : parseInt(s);
}