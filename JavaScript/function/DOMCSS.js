/* DOM CSS Add & Remove Class
- element.classList.add("class");  เพิ่ม class style
- element.classList.remove("class");  ลบ class style
- element.classList.toggle("class");  สลับ class style
- element.classList.contains("class");  เปรียบเทียบ class style  เช็คว่ามีการใส่ style class นี้มั้ย
*/

const box = document.getElementById('box');
let checkStatus;  //สร้างตัวแปรเพื่อเช็ค status การใส่ class 

function addDarkMode(){
    box.classList.add("darkMode");  //เพิ่ม class darkMode ไปที่ id="box"
}

function removeDarkMode(){
    box.classList.remove("darkMode");
}

function switchMode(){
    box.classList.toggle("darkMode");
    checkStatus = box.classList.contains("darkMode");  //เช็คว่า box มีการใส่ class darkMode มั้ย
    if(checkStatus){
        box.style.color="yellow";  //ถ้ามี class darkMode จะเปลี่ยนเป็นสีเหลือง 
    }else{
        box.style.color="red";  //ถ้าไม่มี class darkMode จะเป็นสีแดง
    }
}