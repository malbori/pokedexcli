import { CLICommand } from "../types/command.js";

export function commandHelp(registry: Record<string, CLICommand>): void {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");

    for (const key in registry){
        const command = registry[key];

        console.log(`${command.name}: ${command.description}`);
    }
    return;
};