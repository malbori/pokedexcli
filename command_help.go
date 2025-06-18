package main

import (
	"fmt"
)

func commandHelp(config *Config) {
	helpMessage := "Welcome to the Pokedex!\nUsage:\n\n"
	fmt.Print(helpMessage)

	for _, cmd := range getCommands() {
		fmt.Printf("%s: %s\n", cmd.name, cmd.description)
	}
	fmt.Println()
}
