import { createInterface } from 'node:readline';
import { stdin, stdout } from "node:process";
import { commandExit } from './commands/command_exit.js';
import { getCommands } from './command_registry.js';


export function cleanInput(input: string): string[] {
    let inputs = input.trim().toLocaleLowerCase().split(/\s+/);

    return inputs;
}

export function startREPL() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > ",
    });

    rl.prompt();

    rl.on("line", async (line) => {

        const input = cleanInput(line);

        if (input.length === 0) {
            rl.prompt();
            return;
        }

        const commands = getCommands();

        

        rl.prompt();
    });
}