package main

type cliCommand struct {
	name        string
	description string
	callback    func() error
}

var Commands = map[string]cliCommand{
	"exit": {
		name:        "exit",
		description: "Exit the Pokedex",
		callback:    commandExit,
	},
	"help": {
		name:        "help",
		description: "Help command",
		callback:    commandHelp,
	},
}
