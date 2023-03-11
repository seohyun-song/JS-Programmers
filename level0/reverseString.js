/**
 * 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
 * 1 ≤ my_string의 길이 ≤ 1,000
 */
function solution(my_string) {
  var answer = "";
  answer = my_string.split("").reverse().join("");
  return answer;
}

// 다른 사람 풀이
// spread 문법
function solution2(my_string) {
  const answer = [...my_string].reverse().join("");
  return answer;
}
