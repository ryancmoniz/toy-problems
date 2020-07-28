class Program {
  func binarySearch(array: [Int], target: Int) -> Int {
		return helper(array: array, target:target, leftP: 0, rightP: array.count - 1)
	}

	func helper(array: [Int], target: Int, leftP: Int, rightP: Int) -> Int{
		if leftP > rightP{
			return -1
		}

		let pivot = (leftP + rightP) / 2
		let potentialMatch = array[pivot]

		if target == potentialMatch{
			return pivot
		} else if target < potentialMatch{
			return helper(array:array, target: target, leftP: leftP, rightP: pivot - 1)
		} else {
			return helper(array: array, target: target, leftP: pivot + 1, rightP: rightP)
		}
	}
}
