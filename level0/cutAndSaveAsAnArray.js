/**
 * 잘라서 배열로 저장하기
 * 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
 * 1 ≤ my_str의 길이 ≤ 100
 * 1 ≤ n ≤ my_str의 길이
 * my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.
 *
 * str.slice(start, end): 문자열의 일부를 추출하면서 새로운 문자열 반환. end인덱스 문자 포함하지 않음
 */
function solution(my_str, n) {
  var answer = [];
  let i = 0;
  while (i < my_str.length) {
    answer.push(my_str.slice(i, i + n));
    i += n;
  }
  return answer;
}
