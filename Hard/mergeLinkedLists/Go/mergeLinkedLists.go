package main

type LinkedList struct {
	Value int
	Next  *LinkedList
}

func MergeLinkedLists(headOne *LinkedList, headTwo *LinkedList) *LinkedList {
	var primary *LinkedList
	var secondary *LinkedList

	if headOne.Value < headTwo.Value {
		primary, secondary = headOne, headTwo
	} else {
		primary, secondary = headTwo, headOne
	}

	current := primary
	for secondary != nil {
		if secondary.Value >= current.Value {
			if current.Next != nil && current.Next.Value >= secondary.Value {
				secondary = InsertBetween(secondary, current, current.Next)
				current = current.Next
			} else if current.Next == nil {
				current.Next = secondary
				break
			} else if secondary.Value > current.Next.Value {
				current = current.Next
			}
		}
	}
	return primary
}

func InsertBetween(insert *LinkedList, node1 *LinkedList, node2 *LinkedList) *LinkedList {
	tail := insert.Next

	insert.Next = node2
	node1.Next = insert

	return tail
}
