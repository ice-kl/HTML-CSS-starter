// /* TS Object
// let ObjectName = {propertyName:value}
// */
// let user = {
//     name:"AA",
//     age:20,
//     email:"AA@gmail.com"
// };

// /* การเข้าถึงข้อมูล
// ObjectName.propertyName
// */
// console.log("ชื่อ = ",user.na.me);
// console.log("อายุ = ",user.age);


// JS Method เราสามารถเขียน function ด้านใน object 

let product = {
    name: "Mango",
    price: 150,
    color: "Yellow",
    getProduct:function(){
        return "ชื่อสินค้า = "+ this.name + " ราคา = "+ this.price + " สี = "+ this.color;
    },
    discount:function(){
        return this.price - 25;
    }
};

//เรียกใช้ method
console.log(product.getProduct());
product.discount()
console.log(product.discount());