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

		command, exists := Commands[string(cleaned[i])]

		if exists {
			if command.name == "exit" {
				command.callback()
				os.Exit(0)
			}
			fmt.Print(command.callback())
		} else {
			fmt.Print("Unknown command\n")
		}

		i++
	}
}

func cleanInput(text string) []string {
	text = strings.ToLower(strings.TrimSpace(text))
	return strings.Fields(text)
}

func commandExit() error {
	return fmt.Errorf("Closing the Pokedex... Goodbye!\n")
}

func commandHelp() error {
	return fmt.Errorf("Helping\n")
}
