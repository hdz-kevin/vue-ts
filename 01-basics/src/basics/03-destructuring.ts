
interface Hero {
    id: string;
    name: string;
    age: number;
    codeName: string;
    // optional property
    power?: string;
}

export const hero: Hero = {
    id: Date.now().toString(),
    name: 'Tony',
    age: 45,
    codeName: 'IronMan',
}

// default value if `power` is not provided or undefined
const { id, name, age, codeName, power = 'Without' } = hero;

console.log({
    id,
    name,
    age,
    codeName,
    power,
});


// Destructuring in function args

interface CreateHeroArgs {
    name: string,
    age: number,
    codeName: string,
    power?: string,
}

const createHero = ({ name, age, codeName, power = 'No Power' }: CreateHeroArgs): Hero =>
    ({
        id: Date.now().toString(),
        name,
        age,
        codeName,
        power,
    });

console.log(createHero({
    name: 'Peter Parker',
    age: 25,
    codeName: 'SpiderMan',
}));
