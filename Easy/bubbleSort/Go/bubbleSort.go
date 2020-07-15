package bubblesort

func bubbleSort(array []int) []int {
    for i := len(array); i > 0; i-- {
        for j := 0; j < i-1; j++ {
            if array[j] > array[j+1] {
	            array[j], array[j+1] = array[j+1], array[j]
            }
        }
    }
    return array
}
