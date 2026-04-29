
const firstName = "Tony";
const lastName = "Stark";

if (true) {
    // const y let respetan el scope en donde se crean las variables
    const firstName = "Hulk";
}

export const fullName = `${firstName} ${lastName}`;
console.log(fullName);
