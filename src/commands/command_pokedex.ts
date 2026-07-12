import { State } from "../state.js";

export async function commandPokedex(state: State): Promise<void> {

    if (Object.keys(state.pokedex).length === 0) {
        console.log("You have no pokemon in you Pokedex! Go catch some!");
        return;
    }

    console.log("Your Pokedex");

    Object.entries(state.pokedex).forEach(([key, val]) => {
        console.log(`  -${val.name}`);
    });
}