package moveElementToEnd

func moveElementToEnd(array []int, toMove int) []int {
	l, r := 0, len(array)-1
	for l < r {
		if array[l] == toMove && array[r] != toMove {
			array[l], array[r] = array[r], array[l]
		}
		if array[l] != toMove {
			l++
		}
		if array[r] == toMove {
			r--
		}
	}
	return array
}