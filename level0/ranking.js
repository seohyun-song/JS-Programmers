/**
 * 등수 매기기
 * 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
 * 0 ≤ score[0], score[1] ≤ 100
 * 1 ≤ score의 길이 ≤ 10
 * score의 원소 길이는 2입니다.
 * score는 중복된 원소를 갖지 않습니다.
 */
function solution(score) {
  var answer = [];
  let average = [];
  // 평균점수 저장
  for (let i = 0; i < score.length; i++) {
    average[i] = (score[i][0] + score[i][1]) / 2;
  }

  // 등수매기기
  for (let i = 0; i < average.length; i++) {
    let rank = average.length;
    for (let j = 0; j < average.length; j++) {
      if (i == j) continue;
      if (average[i] >= average[j]) rank--;
    }
    answer.push(rank);
  }
  return answer;
}

// 다른 사람 풀이
function solution2(score) {
  // 1. score의 평균 점수 구함
  let avg = score.map((v) => (v[0] + v[1]) / 2);

  // 2. avg를 내립차순으로 정렬한 배열 sorted를 선언함
  // slice(): 원본 배열을 변경하지 않음. 인수를 생략할 경우 얕은 복사를 함.
  // sort(): 원본 배열을 직접 변경하여 정렬함
  let sorted = avg.slice().sort((a, b) => b - a);

  // 3. avg의 요소와 동일한 sorted 배열의 index값에 1을 더함
  // indexOf(): 배열에서 지정된 요소를 찾을 수 있는 ★첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
  return avg.map((v) => sorted.indexOf(v) + 1);
}
