/**
 * 문자열 계산하기
 * my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
 * 연산자는 +, -만 존재합니다.
 * 문자열의 시작과 끝에는 공백이 없습니다.
 * 0으로 시작하는 숫자는 주어지지 않습니다.
 * 잘못된 수식은 주어지지 않습니다.
 * 5 ≤ my_string의 길이 ≤ 100
 * my_string을 계산한 결과값은 1 이상 100,000 이하입니다.
 * return type 은 정수형입니다.
 * my_string의 숫자와 연산자는 공백 하나로 구분되어 있습니다.
 */
function solution(my_string) {
  var answer = 0;
  my_string = my_string.split(" ");
  let i = 0;
  while (i < my_string.length) {
    if (my_string[i] == "+") {
      answer += parseInt(my_string[i + 1]);
      i += 2;
    } else if (my_string[i] == "-") {
      answer -= parseInt(my_string[i + 1]);
      i += 2;
    } else {
      answer += parseInt(my_string[i]);
      i++;
    }
  }
  return answer;
}

// 다른 사람 풀이
// 양수, 음수
function solution2(my_string) {
  const arr = [];
  let sign = 1;
  for (let char of my_string.split(" ")) {
    if (char == "+") {
      sign = 1;
    } else if (char == "-") {
      sign = -1;
    } else {
      arr.push(sign * parseInt(char));
    }
  }
  return arr.reduce((acc, curr) => acc + curr, 0);
}
