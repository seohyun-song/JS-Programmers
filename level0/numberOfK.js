/**
 * k의 개수
 * 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.
 * 1 ≤ i < j ≤ 100,000
 * 0 ≤ k ≤ 9
 */
function solution(i, j, k) {
  var answer = 0;
  let str = "";
  for (let l = i; l <= j; l++) {
    str += l.toString();
  }
  str.split("").forEach(function (char) {
    if (char == k.toString()) answer++;
  });
  return answer;
}

// 다른 사람 풀이
function solution2(i, j, k) {
  let a = "";
  for (let l = i; l <= j; l++) {
    a += l;
  }
  return a.split("").filter((item) => item === k.toString()).length;
}
