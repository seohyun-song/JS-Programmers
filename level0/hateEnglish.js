/**
 * 영어가 싫어요
 * 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
 * numbers는 소문자로만 구성되어 있습니다.
 * numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
 * 1 ≤ numbers의 길이 ≤ 50
 * "zero"는 numbers의 맨 앞에 올 수 없습니다.
 */
function solution(numbers) {
  var answer = [];
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let str = "";
  for (let i = 0; i < numbers.length; i++) {
    str += numbers[i];

    for (let j = 0; j < numArr.length; j++) {
      if (str == numArr[j]) {
        str = "";
        answer.push(j);
      }
    }
  }
  answer = parseInt(answer.join(""));
  return answer;
}

// 다른 사람 풀이
// str.replace(regexp|substr, newSubstr|function): 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열
// function(replecement): 주어진 regexp 혹은 substr에 일치하는 요소를 대체하는 데 사용될 새 하위 문자열을 생성하기 위해 호출되는 함수
// function의 첫 번째 매개변수는 매치된 문자열을 받습니다 ★
function solution2(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (el) => obj[el]
  );
  return parseInt(num);
}
