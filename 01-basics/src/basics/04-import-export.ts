
import heroes, { owners } from "./../data/heroes";

const getHero = (id: number) => heroes.find(hero => hero.id === id);

console.log(getHero(10)?.name);

const getHeroesByOwner = (owner: "DC" | "Marvel") => heroes.filter(hero => hero.owner === owner);

console.log(getHeroesByOwner("DC"));

export {
    getHero,
    getHeroesByOwner,
}
