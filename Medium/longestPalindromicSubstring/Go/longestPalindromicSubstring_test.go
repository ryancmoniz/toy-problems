package longestPalindromicSubstring

import "testing"

func TestLongestPalindrome(t *testing.T) {
	input := "babad"
	output := longestPalindrome(input)
	expected := "bab"

	if output != expected{
		t.Errorf("got %v but expected %v", output, expected)
	}
}
