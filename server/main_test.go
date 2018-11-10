package main

import "testing"

func TestFib(t *testing.T) {
	var num int
	f:= fibonacci()
	for i := 0; i < 13; i++ {
		num = f()
	}
    if num != 144 {
       t.Errorf("Number was incorrect, got: %d, want: %d.", num, 144)
    }
}