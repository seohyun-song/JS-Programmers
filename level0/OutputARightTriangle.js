/**
 * 직각삼각형 출력하기
 * "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
 * 1 ≤ n ≤ 10
 *
 * readline모듈
 * str.repeat(count): 문자열을 주어진 횟수(count) 만큼 반복해 붙인 새로운 문자열을 반환함.
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
});
