package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func startRepl() {
	scanner := bufio.NewScanner(os.Stdin)

	for {
		i := 0
		fmt.Print("Pokedex > ")
		scanner.Scan()

		userInput := scanner.Text()
		cleaned := cleanInput(userInput)

		if len(cleaned) == 0 {
			continue
		}

		if string(cleaned[i]) == "exit" {
			fmt.Print(commandExit())
			os.Exit(0)
		}

		i++
	}
}

func cleanInput(text string) []string {
	text = strings.ToLower(strings.TrimSpace(text))
	return strings.Fields(text)
}

func commandExit() error {
	return fmt.Errorf("Closing the Pokedex... Goodbye!")
}
