class Solution {
  var memo: [String: [String]] = [:]

  func wordBreak(_ str: String, _ wordDict: [String]) -> [String] {
    if let ans = memo[str] {
      return ans
    }
      var ans: [String] = []
      for word in wordDict {
        if str.hasPrefix(word) {
          if str.count == word.count {
            ans.append(word)
          } else {
            let substr = String(str[word.endIndex...])
            let subwords = wordBreak(substr, wordDict)
            for substr in subwords {
              ans.append(word + " " + substr)
            }
          }
        }
      }
    memo[str] = ans
    return ans
  }
}
