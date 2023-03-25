/**
 * A로 B 만들기
 * 0 < before의 길이 == after의 길이 < 1,000
 * before와 after는 모두 소문자로 이루어져 있습니다.
 */
function solution(before, after) {
  var answer = 0;
  before = before.split("").sort().join("");
  after = after.split("").sort().join("");

  for (let i = 0; i < before.length; i++) {
    if (before[i] != after[i]) return answer;
  }
  answer = 1;
  return answer;
}
