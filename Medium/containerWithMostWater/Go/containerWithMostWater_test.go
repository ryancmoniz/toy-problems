package containerWithMostWater

import "testing"

func TestContainerWithMostWater(t *testing.T) {
	input := []int{1, 8, 6, 2, 5, 4, 8, 3, 7}
	output := containerWithMostWater(input)
	expected := 49

	if output != expected{
		t.Errorf("got %v but expected %v", output, expected)
	}
}
