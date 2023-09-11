// For ใช้ในกรณีรู้จำนวนรอบที่ชัดเจน

let count = 1; 

/* 
for(ค่าเริ่มต้นของตัวแปร;เงื่อนไข;เปลี่ยนแปลงค่าตัวแปร){
    คำสั่งเมื่อเงื่อนไขเป็นจริง;
}
*/

for(let count = 1; count<=10; count++){
    if(count==5)break;  //break ให้หยุดทำซ้ำ ออกจาก loop
    console.log(count);
}
console.log("End");



for(let count2 = 1; count2<=10; count2++){
    if(count2==5)continue;  //continue ให้ข้ามรอบที่ 5 แต่ทำรอบต่อไป
    console.log(count2);
}
console.log("End2");