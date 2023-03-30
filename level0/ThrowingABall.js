/**
 * 공 던지기
 * 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.
 * 2 < numbers의 길이 < 100
 * 0 < k < 1,000
 * numbers의 첫 번째와 마지막 번호는 실제로 바로 옆에 있습니다. ★
 * numbers는 1부터 시작하며 번호는 순서대로 올라갑니다. ★
 */
function solution(numbers, k) {
  var answer = 1;
  for (let i = 2; i <= k; i++) {
    answer += 2;
    if (answer > numbers.length) {
      if (numbers.length % 2 == 0) {
        // 배열길이 짝수
        answer = 1;
      } else {
        // 배열길이 홀수
        if (answer - 2 == numbers.length) {
          answer = 2;
        } else {
          answer = 1;
        }
      }
    }
  }
  return answer;
}

// 다른 사람 풀이
// 나머지연산자 활용
// 던진 사람의 위치 k-1해주고 한 사람씩 건너뛰므로 2를 곱해준 값을 배열의 크기로 나눈 인덱스의 숫자가 답
// 나머지 연산자로 해당 배열의 길이가 넘었을 경우, 나눈 나머지 값으로 다음에 위치할 인덱스 값이 나옴!
function solution2(numbers, k) {
  k = (2 * (k - 1)) % numbers.length;
  return numbers[k];
}
