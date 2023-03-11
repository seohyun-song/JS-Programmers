/**
 * 숨어있는 숫자의 덧셈(1)
 * 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 * 1 ≤ my_string의 길이 ≤ 1,000
 * my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.
 */
function solution(my_string) {
  var answer = 0;
  answer = my_string
    .split("")
    .filter((el) => parseInt(el)) // 자연수인 배열 원소만 남김
    .map((el) => parseInt(el)) // 배열 원소의 데이터 타입 number변경
    .reduce((acc, curr) => acc + curr); // 누산기
  return answer;
}

// 다른 사람 풀이
/**
 * regex = /[^0-9]/g
 * - 0-9: 0~9 까지의 숫자
 * - ^: 뒤에 나오는 패턴을 부정
 * - /[]/: 대괄호([])안의 패턴을 매칭
 * - g: flag, 매칭된 패턴에 대한 전체 검색
 *
 * reduce(callback[, initialValue])
 * - initialValue: callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용.
 */
function solution2(my_string) {
  const answer = my_string
    .replce(/[^0-9]/g, "")
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  return answer;
}
