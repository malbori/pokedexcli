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
		fmt.Print("Pokedex > ")
		scanner.Scan()

		userInput := scanner.Text()
		cleaned := cleanInput(userInput)

		if len(cleaned) == 0 {
			continue
		}

		command, exists := getCommands()[string(cleaned[0])]

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
	}
}

func cleanInput(text string) []string {
	text = strings.ToLower(strings.TrimSpace(text))
	return strings.Fields(text)
}

type cliCommand struct {
	name        string
	description string
	callback    func() error
}

func getCommands() map[string]cliCommand {
	return map[string]cliCommand{
		"help": {
			name:        "help",
			description: "Displays a help message",
			callback:    commandHelp,
		},
		"exit": {
			name:        "exit",
			description: "Exit the Pokedex",
			callback:    commandExit,
		},
	}
}
