package main

import (
	"strings"
)

func cleanInput(text string) []string {
	text = strings.ToLower(strings.TrimSpace(text))
	words := strings.Split(text, " ")

	//Remove empty strings resulting from multiple spaces
	res := []string{}

	for _, word := range words {
		if word != "" {
			res = append(res, word)
		}
	}
	return res
}