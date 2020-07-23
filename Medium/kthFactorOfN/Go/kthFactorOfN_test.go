package kthFactorOfN

import "testing"

func TestKthFactor(t *testing.T) {
	t.Run("Example 1", func(t *testing.T) {
		expected := 3
		output := kthFactor(12, 3)

		if output != expected {
			t.Errorf("got %v but expected %v", output, expected)
		}
	})

	t.Run("Example 2", func(t *testing.T) {
		expected := -1
		output := kthFactor(4, 4)

		if output != expected {
			t.Errorf("got %v but expected %v", output, expected)
		}
	})

	t.Run("Example 3", func(t *testing.T) {
		expected := 4
		output := kthFactor(1000, 3)

		if output != expected {
			t.Errorf("got %v but expected %v", output, expected)
		}
	})
}
