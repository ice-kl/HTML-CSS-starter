/* 
indexOf(data) ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
find(data) ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
findIndex(data) ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
*/

// indexOf
const colors =['red','green','blue','purple','white']

const index = colors.indexOf('red')
console.log(index);

// find
const search = colors.find(element => element === 'green')
console.log(search);

// findIndex
const search2 = colors.findIndex(element => element === 'green')
console.log(search2);
