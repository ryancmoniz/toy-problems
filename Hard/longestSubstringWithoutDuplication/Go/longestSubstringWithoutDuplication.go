package longestSubstringWithoutDuplication

func LongestSubstringWithoutDuplication(str string) string {
	m := make(map[string]int)
	start := 0
	var result, longest string

	for i, c := range str {
		char := string(c)
		result = result + char

		if _, ok := m[char]; ok && m[char] >= start {
			start = m[char] + 1
			result = str[start : i+1]
		}
		m[char] = i

		if len(result) >= len(longest) {
			longest = result
		}
	}
	return longest
}
