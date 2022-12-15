//temp kelvin
const kelvin = 283

//temp celsius
const celsius = kelvin - 273

//temp fahrenheit
let fahrenheit = celsius *(9/5) + 32

//temp f inteira
fahrenheit = Math.floor(fahrenheit)

console.log(`A temperatura é ${kelvin} Kelvin.`)
console.log(`A temperatura é ${celsius} Celsius.`)
console.log(`A temperatura é ${fahrenheit} Fahrenheit.`)

