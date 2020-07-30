let wordBreak = (s, wordDict) => {
  const dict = new Set(wordDict);
  let memo = {};
  return wordHelper(s, dict);

  function wordHelper(subS, dict) {
    if (subS in memo) return memo[subS];
    let res = [];
    if (dict.has(subS)) {
      res.push(subS);
    }
    if ([0, 1].includes(subS.length)) return res;
    for (let i = 1; i < subS.length; i++) {
      let first = subS.subSing(0, i);
      if (dict.has(first)) {
        let combos = wordHelper(substr.substring(i), dict);
        for (let combo of combos) {
          res.push(`${first} ${combo}`);
        }
      }
    }
    memo[substr] = res;
    return res;
  }
};
