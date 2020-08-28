function solution(num) {
    var count = 0;
    while(num !== 1){
        if(num%2 == 0){
            num = num/2;
            count++;
        } else {
            num = num*3 + 1;
            count++;
        }
        if(count == 500){break;}
    }
    return (count<500)? count : -1;
}


/* 다른사람코드
    const solution = (num) => collatzGuessCount(num, 0);

    const collatzGuessCount = (num, acc) => 
    (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);

    const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);
*/