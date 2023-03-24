/**
 * 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
 * 1 ≤ my_string의 길이 ≤ 100
 * my_string에는 숫자가 한 개 이상 포함되어 있습니다.
 * my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다.
 */
function solution(my_string) {
  var answer = [];
  answer = [...my_string.replace(/[^0-9]/g, "")] // 0~9까지의 숫자가 아닌 문자 삭제
    .map((el) => Number(el))
    .sort((a, b) => a - b);
  return answer;
}

// 다른 사람 풀이
// isNaN(value) 어떤 값이 NaN인지 판별합니다.
function solution2(my_string) {
  const answer = my_string
    .split("")
    .filter((char) => !isNaN(char))
    .map((char) => Number(char))
    .sort((a, b) => a - b);
  return answer;
}
