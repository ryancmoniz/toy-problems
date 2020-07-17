package Go

import "testing"

func TestIsMonotonic(t *testing.T) {
	expected := true
	output := isMonotonic([]int{-1, -5, -10, -1100, -1100, -1101, -1102, -9001})

	if expected != output {
		t.Errorf("got %v but expected %v", output, expected)
	}
}

