package longestSubstringWithoutDuplication

import "testing"

func TestLongestSubstringWithoutDuplication(t *testing.T) {

	t.Run("Example 1", func(t *testing.T) {
		input := "clementisacap"
		expected := "mentisac"
		output := LongestSubstringWithoutDuplication(input)

		if output != expected {
			t.Errorf("got %v but expected %v", output, expected)
		}
	})

	t.Run("Example 2", func(t *testing.T) {
		input := "abccdeaabbcddef"
		expected := "cdea"
		output := LongestSubstringWithoutDuplication(input)

		if output != expected {
			t.Errorf("got %v but expected %v", output, expected)
		}
	})

}
