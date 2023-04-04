/**
 * 외계어 사전
 * PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
 * spell과 dic의 원소는 알파벳 소문자로만 이루어져있습니다.
 * 2 ≤ spell의 크기 ≤ 10
 * spell의 원소의 길이는 1입니다.
 * 1 ≤ dic의 크기 ≤ 10
 * 1 ≤ dic의 원소의 길이 ≤ 10
 * spell의 원소를 모두 사용해 단어를 만들어야 합니다.
 * spell의 원소를 모두 사용해 만들 수 있는 단어는 dic에 두 개 이상 존재하지 않습니다.
 * dic과 spell 모두 중복된 원소를 갖지 않습니다.
 */
function solution(spell, dic) {
  for (let i = 0; i < dic.length; i++) {
    let count = 0; // spell의 원소 모두 사용하는 지 체크
    for (let j = 0; j < spell.length; j++) {
      if (dic[i].includes(spell[j])) count++;
    }
    if (count == spell.length) return 1; // spell의 원소 모두 사용해 단어 만들어야함
  }
  return 2;
}

// 다른 사람 풀이
// Array.some(): 배열 안의 어떤 요소라도 주어진 판별할수를 적어도 하나라도 통과하는지 테스트 함.
// 숫자나 문자열 비교할 때는 ==나 === 연산자를 이용하면 되지만, 배열이나 객체를 비교할 때 불가능
// 배열이나 객체는 참조차입으로써 값이 비교되는 것이 아니라 주소값이 비교됨
// 따라서 아래에서 sort()통해 정렬후 문자열로 변환하여 비교함!!
function solution2(spell, dic) {
  return dic.some((el) => spell.sort().toString() == [...el].sort().toString())
    ? 1
    : 2;
}
