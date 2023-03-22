/**
 * 배열 회전시키기
 * 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
 * 3 ≤ numbers의 길이 ≤ 20
 * direction은 "left" 와 "right" 둘 중 하나입니다.
 */
function solution(numbers, direction) {
  var answer = [];
  const lastCopy = numbers[numbers.length - 1];
  const firstCopy = numbers[0];
  if (direction == "right") {
    for (let i = numbers.length; i >= 0; i--) {
      numbers[i] = numbers[i - 1];
    }
    numbers[0] = lastCopy;
    numbers.pop();
  } else {
    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = numbers[i + 1];
    }
    numbers[numbers.length - 1] = firstCopy;
  }
  answer = numbers;
  return answer;
}

// 다른 사람 풀이
// pop(), push(), shift(), unshift() 메소드 활용
// Array.unshift(): 새로운 요소를 맨 앞쪽에 추가하고, 새로운 길이를 반환함.
// Array.shift(): 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환함. 이 메서드는 배열의 길이를 변하게 함
function solution2(numbers, direction) {
  var answer = [];
  if (direction == "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  answer = numbers;
  return answer;
}
