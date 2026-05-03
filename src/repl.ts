import { createInterface } from 'node:readline';
import { stdin, stdout } from "node:process";
import { getCommands } from './util.ts/commands.js';

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

        const comm = input[0];
        const commands = getCommands();
        const cmd = commands[comm];


        if (!cmd) {
            console.log(
                `Unknown command: "${comm}". Type "help" for a list of commands.`,
            );
            rl.prompt();
            return;
        }
        try {

            cmd.callback(commands);

        } catch (error) {
            console.log(error);
        }

        rl.prompt();
    });
}