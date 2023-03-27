/**
 * 숨어있는 숫자의 덧셈 (2)
 * 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 * 1 ≤ my_string의 길이 ≤ 1,000
 * 1 ≤ my_string 안의 자연수 ≤ 1000
 * 연속된 수는 하나의 숫자로 간주합니다.
 * 000123과 같이 0이 선행하는 경우는 없습니다.
 * 문자열에 자연수가 없는 경우 0을 return 해주세요.
 */
function solution(my_string) {
  var answer = 0;
  const numArr = my_string
    .split(/[a-z]/i)
    .filter((el) => el != "")
    .map((el) => parseInt(el));
  for (let i = 0; i < numArr.length; i++) {
    answer += numArr[i];
  }
  return answer;
}

// 다른 사람 풀이
// split & 정규표현식
// reduce와 동시에 형변화하여 누적
function solution2(my_string) {
  return my_string.split(/[a-z]/i).reduce((acc, curr) => acc + Number(curr), 0);
}
