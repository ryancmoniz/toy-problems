package Go

import (
	"reflect"
	"testing"
)

func TestMoveElementToEnd(t *testing.T) {
	expected := []int{4, 1, 3, 2, 2, 2, 2, 2}
	output := moveElementToEnd([]int{2, 1, 2, 2, 2, 3, 4, 2}, 2)

	if !reflect.DeepEqual(output, expected){
		t.Errorf("got %v but expected %v", output, expected)
	}
}