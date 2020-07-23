package kthFactorOfN

func kthFactor(n int, k int) int {
	idx := 0
	res := -1
	for i := 1; i <= n; i++{
		if n % i == 0{
			idx++
		}

		if idx == k{
			res = i
			break
		}
	}
	return res
}