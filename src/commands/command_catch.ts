import { State } from "../state.js";

export async function commandCatch(state: State, name?: string): Promise<void> {
    if (!name) {
        console.log("Please specify a pokemon.");
        return;
    }

    const pokemon = await state.pokeAPI.fetchPokemon(name);

    console.log(`Throwing a Pokeball at ${name}...`);
    console.log("Found Pokemon:");

    const chance = Math.random();
    const difficulty = pokemon.base_experience / 500;

    if (chance > difficulty) {
        console.log(`${pokemon.name} was caught!`);
        state.pokedex[pokemon.name] = pokemon;
    } else {
        console.log(`${pokemon.name} escaped!`);
    }

}