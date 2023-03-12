/**
 * 대문자와 소문자
 * 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
 * 1 ≤ my_string의 길이 ≤ 1,000
 * my_string은 영어 대문자와 소문자로만 구성되어 있습니다.
 */
function solution(my_string) {
  var answer = "";
  answer = [...my_string]
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    )
    .join("");
  return answer;
}
