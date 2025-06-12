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
			err := command.callback()
			if err != nil {
				fmt.Print(err)
			}

			if command.name == "exit" {
				os.Exit(0)
			}
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
	fmt.Print("Closing the Pokedex... Goodbye!\n")
	return nil
}

func commandHelp() error {
	helpMessage := "Usage:\n\nhelp: Displays a help message\nexit: Exit the Pokedex\n"
	fmt.Print(helpMessage)
	return nil
}
