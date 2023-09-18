/*
การเข้าถึง element ผ่าน id, tag, class
- document.getElementById("ชื่อไอดี");
- document.getElementByTagName("ชื่อแท็ก");
- document.getElementByClassName("ชื่อคลาส");
*/

let a = document.getElementsByTagName('p'); //อ้างอิงผ่าน tag
console.log(a);

let b = document.getElementById('demo');  //อ้างอิงผ่าน id
console.log(b);



// b.innerText="JavaScript เบื้องต้น";  //แสดงผล
// b.innerHTML="<strong>JavaScript เบื้องต้น</strong>";  //Bold

let x = 10;
let y = 20;
function displayText(){
    b.innerHTML="แสดงข้อมูลในตัวแปร = "+x+" และตัวแปร = "+y;
}

let c=document.querySelector('.mycss');  //อ้างอิงผ่าน class
console.log(c);