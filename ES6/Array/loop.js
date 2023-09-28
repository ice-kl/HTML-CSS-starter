// การ Loop Array
// For Loop, ForEach, ForOf

const data = [10, 20, 30, 40, 50]

// loop for แบบทั่วไป
// for(let i = 0 ; i < data.length ; i++){
//     if (data[i] >= 30) break
//     console.log(`ลำดับที่ ${i} = ${data[i]}`);
// }

// ForEach ไม่สามารถใส่ break กับ continue ได้
data.forEach(element => {   // element คือสมาชิกที่จะให้วนลูปใน data
    console.log(element);
}); 

// ForOf สามารถใส่ break กับ continue ได้
for ( const element of data){  // ด้านซ้ายคือ element ที่เราไปดึงมาแต่ละค่าในการวนลูป ด้านขวาคือชื่อ array = ให้ทำการดึงสมาชิกแต่ละตัวใน data มาใช้งาน
    if(element >= 30) break
    console.log(element);
}