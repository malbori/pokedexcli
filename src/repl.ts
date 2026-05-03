import { State } from './state.js';

export function cleanInput(input: string): string[] {
    let inputs = input.trim().toLocaleLowerCase().split(/\s+/);

    return inputs;
}

export function startREPL(state: State) {

    const rl = state.readline;
    const commands = state.cmdRegistry;

    rl.prompt();

    rl.on("line", async (line) => {

        const input = cleanInput(line);

        if (input.length === 0) {
            rl.prompt();
            return;
        }

        const comm = input[0];
        const cmd = commands[comm];


        if (!cmd) {
            console.log(
                `Unknown command: "${comm}". Type "help" for a list of commands.`,
            );
            rl.prompt();
            return;
        }
        try {

            cmd.callback(state);

        } catch (error) {
            console.log(error);
        }

        rl.prompt();
    });
}