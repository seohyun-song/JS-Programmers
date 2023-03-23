/**
 * 외계행성의 나이
 * 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
 * age는 자연수입니다.
 * age ≤ 1,000
 * PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.
 *
 * Array.map(): 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열 반환.
 */
function solution(age) {
  var answer = "";
  answer = String(age)
    .split("")
    .map(function (el) {
      if (el == "0") {
        return "a";
      } else if (el == "1") {
        return "b";
      } else if (el == "2") {
        return "c";
      } else if (el == "3") {
        return "d";
      } else if (el == "4") {
        return "e";
      } else if (el == "5") {
        return "f";
      } else if (el == "6") {
        return "g";
      } else if (el == "7") {
        return "h";
      } else if (el == "8") {
        return "i";
      } else if (el == "9") {
        return "j";
      }
    })
    .join("");

  return answer;
}

// 다른 사람 풀이
// 문자열 내의 문자는 왼쪽에서 오른쪽으로 순번(인데스)이 매겨집니다.
// 문자열[index]로 문자열내 특정 index의 문자를 읽을 수 있음
function solution2(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
