export const hero = {
    lastName: "Stark",
    age: 45,
    address: {
        city: "New York",
        zip: 51323,
        lat: 14.23232,
        lng: 34.5667,
    }
} // as const; convierte todas las propiedades como readonly,
// por tanto, no pueden ser modificadas, sólo leídas

// Crea una copia del objeto, rompiendo la referencia del objeto principal
// pero no de objetos anidados
const hero2 = { ...hero };

hero2.lastName = "Hulk";
hero2.address.city = "LA"; // cambiar la propiedad en hero2 y hero, address en un objeto anidado

console.log(hero);
console.log(hero2);

// la función structuredClone permite clonar un objeto, rompiendo la referencia
// por completo, incluso teniendo multiples objetos anidados
const hero3 = structuredClone(hero);
hero3.lastName = "SpiderMan";
hero3.address.city = "California";

console.log(hero3);
console.log(hero);
