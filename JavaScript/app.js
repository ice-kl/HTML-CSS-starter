// document.write("<h1>Hello World</h1>");

// alert("Welcome");
// console.log("Hello JavaScript");
// console.error("Found virus")
// console.warn("Something went wrong");

/* */

// let สามารถเปลี่ยนค่าได้
// let name = "Thailand" , age = 20;

// console.log(name);
// document.write(name);
// console.log("อายุ = ",age);
// document.write(age);

// // const เป็นค่าคงที่ ไม่สามารถเปลี่ยนค่าได้
// const vat = 0.07;
// console.log("before = ",vat);

/* */

// let age = 20.05;
// let math = 20+10;  //int
// let year = "20"+10; //string
// let checkName = false;

// console.log(typeof(age));
// console.log(math);
// console.log(year);
// console.log(typeof(checkName));

/* */

// การแปลงชนิดข้อมูล
// แปลงจาก string เป็น Number
// let age = parseInt("20.15");  //แปลงเป็น Int
// let age1 = +"20.15";

// console.log(age);
// console.log(typeof(age));
// console.log(age1);
// console.log(typeof(age1));

// // แปลงจาก Number เป็น string
// let price = 99+"";  //แปลงเป็น string โดย add +"" ท้าย number

// console.log(price);
// console.log(typeof(price));

/* */

// // วิธีที่ 1
// let number = Array(1,2,3,4,5,6);

// console.log(number);
// console.log(number[0]);  //สมาชิกตัวแรกคือ index 0

// // วิธีที่ 2
// let color = ["red","green","blue","yellow"];
// color[1] = "black";  //เปลี่ยน index ที่ 1 จาก green เป็น black

// console.log(color);
// console.log(color[0]);

/* */

// // Operator เครื่องหมายหรือสัญลักษณ์ เช่น A+B  (+ is operator, A B is operand)
// // + - * / %(หารเอาเศษ) **(ยกกำลัง)
// console.log(5+10);
// console.log("ผลบวก = ",5+10);

// // == != > < >= <=   result is boolean (true, false)
// let a = 5 , b = 10 ;
// let check = true;

// console.log("เท่ากันหรือไม่ = ",a == b);
// console.log("ไม่เท่ากันหรือไม่ = ",a != b);
// console.log(!check);  //เปลี่ยนค่าเป็นตรงกันข้าม

// // &&(AND) ||(OR) !(NOT)
// // ตัดเกรด
// // 80 - 100 => A
// // 70 - 80 => B
// // <49 => F

// let score = 81;

// console.log(score >= 80 && score <= 100,"A");
// console.log(score >= 70 || score <= 80,"B");
// console.log(score <= 49,"F");

/* */

// // ++(Prefix)  เช่น  ++a  เพิ่มค่าให้ a ก่อน 1 ค่าแล้วนำไปใช้
// // ++(Postfix) เช่น  a++  นำค่า ปจบ ใน a ไปใช้ก่อนแล้วค่อยเพิ่มค่า
// // --(Prefix)  เช่น  --b  ลดค่าให้ b ก่อน 1 ค่าแล้วนำไปใช้
// // --(Postfix) เช่น  b--  นำค่า ปจบ ใน b ไปใช้ก่อนแล้วค่อยลดค่า

// let a = 5 , b = 10 ;

// // // เพิ่มค่า Prefix
// // console.log("ค่าเริ่มต้น = ",a);
// // console.log("แบบ Prefix = ",++a);  //เพิ่มค่าทันที
// // console.log("ค่าปัจจุบัน = ",a);

// // a = 5 //reset
// // // เพิ่มค่า Postfix
// // console.log("ค่าเริ่มต้น = ",a);
// // console.log("แบบ Postfix = ",a++);  //เพิ่มค่าในครั้งถัดไป
// // console.log("ค่าปัจจุบัน = ",a);

// // ลดค่า Prefix
// console.log("ค่าเริ่มต้น = ",b);
// console.log("แบบ Prefix = ",--b);  //ลดค่าทันที
// console.log("ค่าปัจจุบัน = ",b);

// b = 10 //reset
// // ลดค่า Postfix
// console.log("ค่าเริ่มต้น = ",b);
// console.log("แบบ Postfix = ",b--);  //ลดค่าในครั้งถัดไป
// console.log("ค่าปัจจุบัน = ",b);

/* */
