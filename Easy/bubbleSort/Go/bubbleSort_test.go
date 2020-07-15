package bubblesort

import (
	"reflect"
	"testing"
)

func TestBubbleSort(t *testing.T) {
	expected := []int{2, 3, 5, 5, 6, 8, 9}
	output := bubbleSort([]int{8, 5, 2, 9, 5, 6, 3})

	if !reflect.DeepEqual(expected, output) {
		t.Errorf("got %d but expected %d", output, expected)
	}
}
