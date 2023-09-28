// การกำหนดค่าที่อยู่ภายใน array หรือ object ให้กับตัวแปร โดยใช้วิธีการจับคู่ตัวแปรกับค่าใน array หรือ object เช่น
/* 
Array

const colors = ["white", "red"]
const a = colors[0]  // a = white
const b = colors[1]  // b = red

Destructuring

const colors = ["white", "red"]
const [a,b] = colors
*/

// Array
const colors = ["green", "red", "yellow"]

const green = colors[0]
const red = colors[1]
const yellow = colors[2]

console.log(green)
console.log(red)
console.log(yellow)

// Destructuring มี 2 ส่วน ด้านซ้ายเป็นตัวแปร ด้านขวาเป็น array
const [green2,red2,yellow2] = colors

console.log(green2)
console.log(red2)
console.log(yellow2)

// ถ้าต้องการแค่ yellow
const [,,yellow3] = colors
console.log(yellow3)

// Object
const product = {
    productName : "Computer",  //property 
    price : 30000,
    stock : 10
}

// const productname = product.productName // ต้องการรู้ชื่อสินค้า ต้องทำการสร้างตัวแปรมาเก็บชื่อสินค้าไว้
// const price = product.price
// const stock = product.stock

// console.log(productname)
// console.log(price)
// console.log(stock)

// Destructuring ด้านซ้ายเป็นตัวแปร จับคู่ระหว่างตัวแปรกับ property ด้านขวาเป็น object 
const {productName:productName,price:price,stock:stock} = product // ฝั่งสีม่วงเป็นตัวแปรที่เอาไว้เก็บค่า property

console.log(productName) // print variable ฝั่งสีม่วง
console.log(price)
console.log(stock)