import { stat } from "fs";
import { State } from "../state.js";

export async function commandExplore(state: State, areaName?: string): Promise<void> {
    if (!areaName) {
        console.log("Please provide a location area.");
        return;
    }

    const location = await state.pokeAPI.fetchLocation(areaName);

    console.log(`Exploring ${areaName}...`);
    console.log("Found Pokemon:");

    for (const encounter of location.pokemon_encounters) {
        console.log(` - ${encounter.pokemon.name}`);
    }
}