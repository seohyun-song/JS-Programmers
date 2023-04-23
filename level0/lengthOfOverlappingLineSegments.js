/**
 * 겹치는 선분의 길이 (배열 카운터)
 * 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

    lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.
    
    선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.
 * lines의 길이 = 3
 * lines의 원소의 길이 = 2
 * 모든 선분은 길이가 1 이상입니다.
 * lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
 * -100 ≤ a < b ≤ 100
 */
function solution(lines) {
  // -100 ≤ a < b ≤ 100 -> +100 배열의 인덱스는 0부터 시작함.
  let countArr = new Array(200).fill(0);

  for (let i = 0; i < lines.length; i++) {
    let a = lines[i][0] + 100;
    let b = lines[i][1] + 100;
    // 배열에 해당 선분이 차지하는 범위만큼 카운팅
    for (let j = a; j < b; j++) {
      countArr[j] += 1;
    }
  }
  return countArr.filter((v) => v >= 2).length;
}
