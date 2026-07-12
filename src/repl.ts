import { State } from './state.js';

export function cleanInput(input: string): string[] {
    let inputs = input.trim().toLocaleLowerCase().split(/\s+/);

    return inputs;
}

export async function startREPL(state: State) {

    const rl = state.readline;
    const commands = state.cmdRegistry;

    rl.prompt();

    rl.on("line", async (line) => {

        const [commandName, ...args] = cleanInput(line);


        if (commandName.length === 0) {
            rl.prompt();
            return;
        }

        const cmd = commands[commandName];


        if (!cmd) {
            console.log(
                `Unknown command: "${commandName}". Type "help" for a list of commands.`,
            );
            rl.prompt();
            return;
        }
        try {

            await cmd.callback(state, ...args);

        } catch (error) {
            console.log((error as Error).message);
        }

        rl.prompt();
    });
}