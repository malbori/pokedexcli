import { State } from "../state.js";

export async function commandHelp(state: State): Promise<void> {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");

    for (const key in state.cmdRegistry){
        const command = state.cmdRegistry[key];

        console.log(`${command.name}: ${command.description}`);
    }
    return;
};