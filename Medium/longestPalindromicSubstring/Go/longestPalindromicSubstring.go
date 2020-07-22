package longestPalindromicSubstring

func longestPalindrome(s string) string {
	var palindrome string
	length := len(s)
	for i := 0; i < length; i++ {
		pal1 := getLongestPalindrome(s,i,i)
		pal2 := getLongestPalindrome(s,i,i+1)
		maxL := len(palindrome)


		if len(pal1) > maxL{
			palindrome = pal1
		}

		if len(pal2) > maxL{
			palindrome = pal2
		}
	}
	return palindrome
}

func getLongestPalindrome(s string, l, r int) string {
	length := len(s)
	for l >= 0 && r < length && s[l] == s[r] {
		l--
		r++
	}
	return s[l+1:r]
}

