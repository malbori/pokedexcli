import { stdin, stdout } from "node:process";
import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./util.ts/commands.js";
import { PokeAPI } from "./api/pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
}

export type State = {
    readline: Interface;
    cmdRegistry: Record<string, CLICommand>;

    pokeAPI: PokeAPI;

    nextLocationURL: string | null;
    prevLocationURL: string | null;
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
        pokeAPI: new PokeAPI(),
        nextLocationURL: null,
        prevLocationURL: null,
    };

}