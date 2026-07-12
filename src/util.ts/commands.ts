import { commandCatch } from "../commands/command_catch.js";
import { commandExit } from "../commands/command_exit.js";
import { commandExplore } from "../commands/command_explore.js";
import { commandHelp } from "../commands/command_help.js";
import { commandInspect } from "../commands/command_inspect.js";
import { commandMap } from "../commands/command_map.js";
import { commandMapb } from "../commands/command_mapb.js";
import { commandPokedex } from "../commands/command_pokedex.js";
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
        explore: {
            name: "explore",
            description: "Explore a location",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Catch a pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "inspect details about a pokemon",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Display all the pokemon you've got in your Pokedex",
            callback: commandPokedex,
        },
    };
}