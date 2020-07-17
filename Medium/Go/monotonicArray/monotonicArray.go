package monotonicArray

func isMonotonic(array []int) bool {
	inc := true
	dec := true
	for i := 0; i < len(array)-1; i++ {
		if array[i] > array[i+1] {
			dec = false
		}
		if array[i] < array[i+1] {
			inc = false
		}
	}
	return inc || dec
}