/**
 * 안전지대
 * 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다. 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
 * board는 n * n 배열입니다.
 * 1 ≤ n ≤ 100
 * 지뢰는 1로 표시되어 있습니다.
 * board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.
 * 
 */

function solution(board) {
  var answer = 0;
  // 이차원 배열 생성
  let safeZone = new Array(board.length)
    .fill(0)
    .map(() => new Array(board.length).fill(0));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == 1) {
        safeZone[i][j] = 1;
        if (i - 1 >= 0) {
          safeZone[i - 1][j] = 1;
          if (j - 1 >= 0) safeZone[i - 1][j - 1] = 1;
          if (j + 1 <= board.length - 1) safeZone[i - 1][j + 1] = 1;
        }
        if (i + 1 <= board.length - 1) {
          safeZone[i + 1][j] = 1;
          if (j - 1 >= 0) safeZone[i + 1][j - 1] = 1;
          if (j + 1 <= board.length - 1) safeZone[i + 1][j + 1] = 1;
        }

        if (j - 1 >= 0) safeZone[i][j - 1] = 1;
        if (j + 1 <= board.length - 1) safeZone[i][j + 1] = 1;
      }
    }
  }

  // 안전지대 카운트
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (safeZone[i][j] == 0) answer++;
    }
  }
  return answer;
}

// 다른 사람 풀이
// 깊은복사: JSON.parse(JSON.stringify(arr))
/*  방향 탐색
    (x-1, y+1) (x, y+1) (x+1, y+1)
    (x-1,   y) (x,   y) (x+1,   y)
    (x-1, y-1) (x, y-1) (x+1, y+1)
 */
// arr.flat(): 중첩배열의 평탄화
// [1, 2, [3, 4]].flat() => [1, 2, 3, 4]
function solution(board) {
  // 방향탐색
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [1, 0, -1, 1, -1, 1, 0, -1];

  // 깊은 복사
  const copy = JSON.parse(JSON.stringify(board));
  const n = board.length;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      // 지뢰만 찾음(1)
      if (!board[x][y]) continue;
      copy[x][y] = 1;
      // 위험지역 표시
      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx > n || ny < 0 || ny > n) {
          continue;
        }
        copy[nx][ny] = 1;
      }
    }
  }
  // 안전지역(0)의 개수 반환
  return copy.flat().filter((v) => !v).length;
}
