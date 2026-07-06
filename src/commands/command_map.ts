import { stat } from "fs";
import { State } from "../state.js";

export async function commandMap(state: State): Promise<void> {
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationURL ?? undefined);

    state.nextLocationURL = locations.next;
    state.prevLocationURL = locations.previous;

    for (const location of locations.results) {
        console.log(location.name);
    }
}