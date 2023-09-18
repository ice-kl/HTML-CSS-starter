/* DOM document
- เปลี่ยนเนื้อหา HTML: element.innerHTML
- เปลี่ยนเนื้อหา Text: element.innerText
- เปลี่ยน style Element: element.style.properties = value

การดำเนินการผ่าน Method
- element.setAttribute(attribute,value)
*/

const titleEl=document.getElementById('title');  //อ้างอิงผ่าน id
const contentEl=document.querySelector('.content');  //อ้างอิงผ่าน class
const allEl=document.querySelectorAll('p');  //อ้างอิงผ่าน Tag

const box=document.querySelector('.box');

//เปลี่ยน style title

// function displayText(){
//     // titleEl.style.color="red";

//     // contentEl.setAttribute('class','contentja');  // เปลี่ยน class name จาก content เป็น contentja
//     box.setAttribute('class','dark');
// }

function lightmode(){
    box.setAttribute('class','light')
}

function darkmode(){
    box.setAttribute('class','dark')
}