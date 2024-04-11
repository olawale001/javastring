let greet = "HELLO World";
let greeter = greet.length;
console.log(greeter)

console.log(greet.toUpperCase())

console.log(greet.toLowerCase())

console.log(greet.slice(0))

console.log(greet.concat("World!"))

console.log(greet.replace("HELLO", "Ade"))

console.log(greet.split(""))

console.log(greet.lastIndexOf("d"))


console.log(greet.indexOf("r"))

console.log(greet.charAt(8))



function getRandom() {
    console.log(Math.random()*100)
    console.log(Math.floor(3.45))
    console.log(Math.ceil(3.45))
    console.log(Math.round())
}
getRandom()


function difference(a, b) {
    return Math.abs(a - b)
}
console.log(difference(3, 5))

console.log(difference(5, 3))

console.log(difference(1.23456, 7.89012))



let answer = Math.random()*100;
console.log(Math.random(answer))
console.log(Math.trunc(answer))