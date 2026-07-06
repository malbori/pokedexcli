import { commandExit } from "../commands/command_exit.js";
import { commandHelp } from "../commands/command_help.js";
import { commandMap } from "../commands/command_map.js";
import { commandMapb } from "../commands/command_mapb.js";
import { CLICommand } from "../state.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        map: {
            name: "map",
            description: "Displays the names of the next 20 locations",
            callback: commandMap,
        },
        mapb: {
            name: "map back",
            description: "Displays the names of the previous 20 locations",
            callback: commandMapb,
        },
    };
}