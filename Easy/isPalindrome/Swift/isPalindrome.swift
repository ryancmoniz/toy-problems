class Program {
  func isPalindrome(string: String) -> Bool {
    var leftP = 0
		var rightP = string.count - 1
		var leftIdx = string.index(string.startIndex, offsetBy: leftP)
		var rightIdx = string.index(string.startIndex, offsetBy: rightP)

		while leftIdx < rightIdx {
			if string[leftIdx] != string[rightIdx] {
				return false
			}

			leftP += 1
			rightP -= 1
			leftIdx = string.index(string.startIndex, offsetBy: leftP)
			rightIdx = string.index(string.startIndex, offsetBy: rightP)
		}

    return true
  }
}