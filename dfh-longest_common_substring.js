var dfh = dfh || {};

dfh.longestCommonSubstring = function(s1, s2) {
  var partialResults = new Array(s1.length);
  for (let i = 0; i < s1.length; i++) {
    partialResults[i] = new Array(s2.length);
  }
  var greatestLengthSoFar = 0;
  var ret = new Set();
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1.charAt(i) === s2.charAt(j)) {
        let currentLength, k, substring;
        if (i && j) {
          currentLength = partialResults[i][j] = partialResults[i-1][j-1] + 1;
        } else {
          currentLength = partialResults[i][j] = 1;
        }
        if (currentLength > greatestLengthSoFar) {
          greatestLengthSoFar = currentLength;
          k = i + 1;
          substring = s1.substring(k - greatestLengthSoFar, k);
          ret = new Set().add(substring);
        } else if (currentLength === greatestLengthSoFar) {
          k = i + 1;
          substring = s1.substring(k - greatestLengthSoFar, k);
          ret.add(substring);
        }
      } else {
        partialResults[i][j] = 0;
      }
    }
  }
  return ret;
};

dfh.lcs = dfh.longestCommonSubstring;