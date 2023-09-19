/*
document.createElement(element) สร้าง element ใหม่
document.removeChild(element) ลบ node ลูก
document.appendChild(element) นำ element ไปต่อใน node แม่
document.replaceChild(new,old) แทนที่ element
*/

const menu = document.getElementById('menu');
// const item = document.createElement('li');  //สร้าง li
// item.innerText = "Item";
// menu.appendChild(item);
let count = 1;
function addItem(){
    const item = document.createElement('li');  //สร้าง li
    item.innerText = "Item "+(count++);  //ข้อความที่สร้างขึ้นมาจะชื่อว่า Item
    menu.appendChild(item);  //เอาไปต่อใน ul id="menu"
}