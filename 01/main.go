package main

import (
	"fmt"
	"io/ioutil"
	"strconv"
	"strings"
)

func main() {
	buf, _ := ioutil.ReadFile("./input.txt")
	input := strings.TrimSpace(string(buf))
	splited := strings.Split(input, "")

	total := 0
	prev := 2 // first char
	for _, v := range splited {
		num, _ := strconv.Atoi(v)
		if num == prev {
			total = total + num
			continue
		}
		prev = num
	}

	fmt.Println("first solution: ", total)

	fullLength := len(splited)
	halfLength := fullLength / 2
	total = 0
	halfWay := halfLength

	for _, v := range splited {
		num, _ := strconv.Atoi(v)
		if halfWay == fullLength {
			halfWay = 0
		}
		halfValue, _ := strconv.Atoi(splited[halfWay])
		if num == halfValue {
			total = total + num
		}
		halfWay = halfWay + 1
	}

	fmt.Println("second solution: ", total)
}
