/**
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
 * 0 < array의 길이 < 100
 * 0 ≤ array의 원소 < 1000
 */
function solution(array) {
  let count = 1;
  const compareArr = [];
  array.sort((a, b) => a - b); // 주어진 array가 정렬되어있다는 조건 없음
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      count++;
    } else {
      compareArr.push({ value: array[i], count: count });
      count = 1;
    }
  }
  compareArr.sort((a, b) => b.count - a.count);

  if (compareArr.length == 1) return compareArr[0].value;
  if (compareArr[0].count == compareArr[1].count) {
    return -1;
  } else {
    return compareArr[0].value;
  }
}
