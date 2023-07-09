let numbers = [1,2,3,4,5,6,7,8]
let alphabet = ['a','b','c','d','e','f','g','h']
let chessHouses = []
for (let i = 0; i < alphabet.length; i++) {
    numbers.forEach( e => {
        chessHouses.push(`${alphabet[i]}${e}`)
    });
}
console.log(chessHouses);