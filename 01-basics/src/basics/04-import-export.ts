
import heroes, { type Hero, type Owner } from "./../data/heroes";

const getHero = (id: number): Hero | undefined => {
    return heroes.find(hero => hero.id === id);
}

console.log(getHero(5)?.id);

const getHeroesByOwner = (owner: Owner): Hero[] => {
    return heroes.filter(hero => hero.owner === owner);
}

console.log(getHeroesByOwner('DC'));

export {
    getHero,
    getHeroesByOwner,
}
