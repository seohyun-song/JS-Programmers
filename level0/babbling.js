/**
 * 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
 *
 * String.prototype.replace(pattern, replacement): 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환
 */
function solution(babbling) {
  var answer = 0;
  var possibleWord = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    possibleWord.forEach((el) => {
      // 네 가지 발음을 최대 한 번씩 사용해 조합한-> 네 가지 발음 한 번씩만 검사하면됨
      babbling[i] = babbling[i].replace(el, " ");
    });
    if (babbling[i].replaceAll(" ", "").length === 0) {
      answer++;
    }
  }

  return answer;
}
