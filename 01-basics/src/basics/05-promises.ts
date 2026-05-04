import type { Hero } from "../data/heroes"
import { getHero } from "./04-import-export"


const getHeroByIdAsync = (id: number): Promise<Hero> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHero(id);

            hero ? resolve(hero) : reject('Hero not found');
        }, 1.5 * 1000)
    })

getHeroByIdAsync(50)
    .then(hero => console.log(`Hero: ${hero.name}`))
    .catch(console.warn)




// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Valor de resolucion de la Promesa");

//     reject("Valor de rechazo de la Promesa");
//   }, 1000);
// })
//     .then((message) => console.log(message))
//     .catch((err) => console.warn(err));
