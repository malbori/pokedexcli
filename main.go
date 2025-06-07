package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	fmt.Print("Pokedex > ")

	for scanner.Scan() {

		userInput := scanner.Text()
		cleaned := cleanInput(userInput)

		fmt.Printf("Your command was: %s\n", cleaned[0])
		fmt.Print("Pokedex > ")
	}
}
