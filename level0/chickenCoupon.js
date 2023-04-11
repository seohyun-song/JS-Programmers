/**
 * 치킨 쿠폰
 * 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.
 * chicken은 정수입니다.
 * 0 ≤ chicken ≤ 1,000,000
 */
function solution(chicken) {
  var answer = 0;
  let remainder = 0;
  while (chicken >= 10) {
    answer += Math.floor(chicken / 10);
    remainder += chicken % 10;
    chicken = Math.floor(chicken / 10);
  }
  remainder += chicken;
  answer +=
    Math.floor(remainder / 10) +
    Math.floor((Math.floor(remainder / 10) + (remainder % 10)) / 10);
  return answer;
}

// 다른 사람 풀이
// 치킨의 갯수가 곧 쿠폰의 개수
function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    answer += parseInt(coupon / 10);
    coupon = parseInt(coupon / 10) + (coupon % 10);
  }

  return answer;
}
