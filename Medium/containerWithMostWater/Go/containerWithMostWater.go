package containerWithMostWater

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func containerWithMostWater(height []int) int {
	j := len(height)-1
	i := 0

	maxV := 0
	for i < j{
		volume := (j-i) * min(height[i], height[j])
		if volume > maxV{
			maxV = volume
		}

		if height[i] < height[j]{
			i++
		} else{
			j--
		}
	}
	return maxV
}
