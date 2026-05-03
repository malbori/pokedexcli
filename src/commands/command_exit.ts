import { CLICommand } from "../types/command.js";

export function commandExit(registry: Record<string, CLICommand>): void {
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
};