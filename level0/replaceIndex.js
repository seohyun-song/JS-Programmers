/**
 * 인덱스 바꾸기
 * 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
 * 1 < my_string의 길이 < 100
 * 0 ≤ num1, num2 < my_string의 길이
 * my_string은 소문자로 이루어져 있습니다.
 * num1 ≠ num2
 */
function solution(my_string, num1, num2) {
  var answer = "";
  my_string = my_string.split("");
  const newWords = [];
  for (let i = 0; i < words.length; i++) {
    if (i == num1) {
      newWords[num1] = words[num2];
    } else if (i == num2) {
      newWords[num2] = words[num1];
    } else {
      newWords[i] = words[i];
    }
  }
  answer = newWords.join("");
  return answer;
}

// 다른 사람 풀이
// 구조분해할당 응용
function solution2(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}
