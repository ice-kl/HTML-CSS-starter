/* รูแปบบฟังก์ชัน

1. ฟังก์ชันที่ไม่มีการรับและส่งค่า

function ชื่อฟังก์ชัน(){
    คำสั่งต่างๆ
}

การเรียกใช้งานฟังก์ชัน

ชื่อฟังก์ชัน();
*/

// function print(){
//     console.log("HelloWorld");
// }

// function message(){
//     alert("แจ้งเตือนโอนเงิน");
// }

// function displayName(){
//     document.write("Java");
// }

// print();  //เรียกใช้งานฟังก์ชัน
// print();

// message();

/* รูปแบบฟังก์ชัน

2. ฟังก์ชันที่มีการรับค่าเข้ามาทำงาน

function ชื่อฟังก์ชัน(parameter1,parameter2,...){
    กลุ่มคำสั่งต่างๆ
}

การเรียกใช้งานฟังก์ชัน

ชื่อฟังก์ชัน(argument1,argument2,...);

argument คือ ตัวแปรหรือค่าที่ต้องการส่งมาให้กับฟังก์ชัน (ตัวแปรส่ง)
parameter คือ ตัวแปรที่ฟังก์ชันสร้างไว้สำหรับรับค่าที่จะส่งเข้ามาให้กับฟังก์ชัน (ตัวแปรรับ)
*/

function plusNumber(x){
    console.log("เลขที่ส่งมา คือ ",x);
}

plusNumber(5);

let number = 200;
plusNumber(number);


function fullName(fname , lname){  //fname กับ lname เป็น parameter
    console.log("ชื่อจริง = ",fname, "นามสกุล = ",lname);  
}

fullName("ชินจัง","จอมแก่น");


function sum(x,y){
    let total = x+y;
    console.log("ผลรวม = ",total);
}

sum(10,50);

/* รูปแบบฟังก์ชัน

3. ฟังก์ชัน return ค่า/ฟังก์ชันที่มีส่งค่าออกมา

function ชื่อฟังก์ชัน(){
    return ค่าที่จะส่งออกไป
}

*/

function getComIP(){
    return "127.0.0.1";
}

let myIP = getComIP();  // การกำหนด let ด้านนอก คือยังให้สามารถนำไปใช้ในบรรทัดอื่นได้
console.log("IP = ",myIP);

function getNumber(){
    return 100*100;
}

let total = getNumber();
console.log("Total = ",total);

function getAddress(){
    let city = "ระยอง";  // ให้ค่า city = "ระยอง" แสดงผลแค่บรรทัดเดียว แบบไม่สามารถนำไปใช้ในบรรทัดอื่นได้
    return city;
}

console.log("ที่อยู่ = ",getAddress());

/* รูปแบบฟังก์ชัน

4. ฟังก์ชันรับค่าและ return ค่า

function ชื่อฟังก์ชัน(parameter1,parameter2,...){
    return ค่าที่จะส่งออกไป
}

*/

function setSalary(salary){
    let bonus = 1000;
    return salary+bonus;
}

let a = setSalary(15000);
a -= 500;
console.log("A เงินเดือนรวม = ",a);

let b = setSalary(20000);
console.log("B เงินเดือนรวม = ",b);


function summation(x,y){
    return x+y;
}

let summ = summation(50,100);  // x = 50 , y = 100
console.log("ผลรวม = ",summ);


function getName(name,city){
    return name + city;
}

console.log(getName("ใจดี","ระยอง"));

/*
ฟังก์ชันแบบกำหนดค่าเริ่มต้น

function ชื่อฟังก์ชัน(name="ชินจัง",parameter2,...){
    คำสั่งต่างๆ
}
*/

function fullName(fname , lname, city="กรุงเทพ"){  //fname lname city เป็น parameter, กำหนดค่าเริ่มต้นของ city="กรุงเทพ" เมื่อระบุข้อมูลไม่ครบ
    console.log("ชื่อ = ",fname, "นามสกุล = ",lname, "ที่อยู่ = ",city);  
}

fullName("ชีโร่","หมา","ญี่ปุ่น")
fullName("มิซาเอะ","อิอิ")