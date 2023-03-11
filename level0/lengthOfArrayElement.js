/**
 * 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
 * 1 ≤ strlist 원소의 길이 ≤ 100
 * strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.
 */
function solution(strlist) {
  var answer = [];
  strlist.forEach((item) => answer.push(item.length));
  return answer;
}

// 다른 사람 풀이
// map(): 수행결과를 새 배열 객체로 반환
function solution(strlist) {
  var answer = [];
  answer = strlist.map((el) => el.length);
  return answer;
}
