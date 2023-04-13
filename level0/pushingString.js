/**
 * 문자열 밀기
 * 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
 * 0 < A의 길이 = B의 길이 < 100
 * A, B는 알파벳 소문자로 이루어져 있습니다.
 *
 * 배열활용
 */
function solution(A, B) {
  if (A == B) return 0;
  let answer = 0;
  A = A.split("");
  B = B.split("");

  for (let i = 0; i < A.length; i++) {
    answer++;
    let addChar = A.pop();
    A.unshift(addChar);
    if (A.join("") == B.join("")) {
      return answer;
    }
  }
  return -1;
}

// 다른 사람 풀이
// String.slice(start, end) : 문자열의 추출된 부분을 담은 새로운 문자열 반환. end 인덱스 그 직전까지 추출됨
// slice()를 활용해 새 문자열을 생성
function solution2(A, B) {
  if (A === B) return 0;
  for (let i = 0; i < A.length; i++) {
    A = A.slice(-1) + A.slice(0, -1);
    if (A === B) return i + 1;
  }
  return -1;
}
