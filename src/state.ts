import { stdin, stdout } from "node:process";
import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./util.ts/commands.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
}

export type State = {
    readline: Interface;
    cmdRegistry: Record<string, CLICommand>;
}

export function initState(): State {

    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > ",
    });

    const commands = getCommands();

    return {
        readline: rl,
        cmdRegistry: commands,
    }

}