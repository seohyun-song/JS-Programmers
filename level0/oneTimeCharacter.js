/**
 * 한 번만 등장한 문자 -> indexOf & lastIndexOf
 * 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
 * 0 < s의 길이 < 1,000
 * s는 소문자로만 이루어져 있습니다.
 */
function solution(s) {
  var answer = "";
  s = s.split("").sort().join("");
  for (let i = 0; i < s.length; i++) {
    let count = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[i] == s[j]) count++;
    }
    if (count == 1) answer += s[i];
  }
  return answer;
}

// 다른 사람 풀이
// 이중포문 안씀. indexOf&lastIndexOf 활용
function solution2(s) {
  let res = [];
  for (let c of s) {
    if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  }
  return res.sort().join("");
}
