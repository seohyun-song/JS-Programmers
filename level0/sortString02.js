/**
 * 문자열 정렬하기 (2)
 * 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
 * 0 < my_string 길이 < 100
 *
 * Array.sort(): 비교함수 제공하지 않을 시, 기본 정렬 순서는 모든 원소를 문자열로 취급해 사전적으로 정렬함.
 */
function solution(my_string) {
  var answer = "";
  answer = my_string.toLowerCase().split("").sort().join("");
  return answer;
}
