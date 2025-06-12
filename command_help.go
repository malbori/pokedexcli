package main

import "fmt"

func commandHelp() error {
	helpMessage := "Welcome to the Pokedex!\nUsage:\n\nhelp: Displays a help message\nexit: Exit the Pokedex\n"
	fmt.Print(helpMessage)
	return nil
}
