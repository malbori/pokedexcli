import { stat } from "fs";
import { State } from "../state.js";

export async function commandMapb(state: State): Promise<void> {

    if (state.prevLocationURL === null) {
        console.log("you're on the first page");
        return;
    }

    const locations = await state.pokeAPI.fetchLocations(state.prevLocationURL);

    state.nextLocationURL = locations.next;
    state.prevLocationURL = locations.previous;

    for (const location of locations.results) {
        console.log(location.name);
    }
}