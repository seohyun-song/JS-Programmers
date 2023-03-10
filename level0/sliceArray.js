/**
 * 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
 * 2 ≤ numbers의 길이 ≤ 30
 * 0 ≤ numbers의 원소 ≤ 1,000
 * 0 ≤num1 < num2 < numbers의 길이
 *
 * Array.slice(begin, end): 어떤 배열의 begin 인덱스부터 end 인덱스까지(end 미포함!!)에 대한 복사본을 새로운 배열 객체로 반환함. 원본 배열은 바뀌지 않음.
 */
function solution(numbers, num1, num2) {
  var answer = [];
  answer = numbers.slice(num1, num2 + 1);
  return answer;
}
