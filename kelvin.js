// set initial constant
const kelvin = 273;

// convert to celsius
const celsius = kelvin - 273;

// calculating Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// rounding down using inbuilt Math library
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${kelvin} degrees Kelvin.`);

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
