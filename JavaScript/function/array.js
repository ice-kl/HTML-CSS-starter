let color = ["แดง","ขาว","ฟ้า","เหลือง","ม่วง"];
let count = color.length;

console.log("ก่อนเรียง = ",color);

let result = color.sort();   // เรียงจาก a-z, ก-ฮ

console.log(count);

console.log("หลังเรียง = ",result);


let fruits = ["มะม่วง","แอปเปิ้ล","กล้วย","ทุเรียน"];

console.log(fruits.sort());
console.log(fruits.reverse());

// การหาสมาชิก

console.log(color[0]);  // หา index ที่ 0
console.log(color[color.length-1]);  // หา index ตัวสุดท้าย

// การเพิ่มสมาชิก

color.push("เขียว");

console.log(color);

// การเข้าถึงสมาชิกด้วย for loop

let colors = ["แดง","ขาว","ฟ้า","เหลือง","ม่วง","น้ำตาล","เขียว","ส้ม","ชมพู"];

// i = 0;i<9;i++
for(let i = 0;i<colors.length;i++){
    console.log("ลำดับที่ = ",(i+1),"มีค่า = ",colors[i]);
}

// การเข้าถึงสมาชิกด้วย for each
colors.forEach(myData);

function myData(item){
    console.log("สี",item);
}

/* แปลง array เป็น string
.toString() แปลงเป็น string
.join("*"); นำค่าแต่ละค่าในตัวแปร array มารวมกันเป็นข้อความและส่งค่ากลับเป็นข้อความที่มีตัวคั่นค่าตัวแปรแต่ละค่าตามที่กำหนด
color.pop();  เอาตัวสุดท้ายออก
let x = color.pop(); เอาตัวสุดท้ายออกแล้วเก็บในตัวแปร x
*/

console.log(typeof(colors));  //type = object (index,value=ค่าที่เก็บในสมาชิก)

// Ex.1 แปลงเป็น string
console.log(colors.toString());

// Ex.2 แปลงเป็น string
let x = colors.toString();
console.log(x);

let colors2 = ["แดง","ขาว","ฟ้า","เหลือง","ม่วง","น้ำตาล","เขียว","ส้ม","ชมพู"];

// Ex.1 join
console.log(colors2.join("*"));

// Ex.2 join
let y = colors2.join(" ");
console.log(y);

// color.pop();  เอาตัวสุดท้ายออก
console.log(colors2);
colors2.pop();
console.log(colors2);

// เอาตัวสุดท้ายออกแล้วเก็บในตัวแปร a
let a = colors2.pop();
console.log(a);

// การรวม array

let fruit = ["ส้ม","องุ่น"];
let vegetable = ["คะน้า","ผักชี","ผักกาด"];
let hardware = ["เม้าส์","คีย์บอร์ด"];

let carts = fruit.concat(vegetable,hardware);
console.log(carts);

