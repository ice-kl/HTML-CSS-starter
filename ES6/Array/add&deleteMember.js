/* 
push  การนำเอาสมาชิกไปเพิ่มต่อท้าย
pop ลบสมาชิกด้านหลังทิ้ง
shift  ลบสมาชิกด้านหน้าออกไป
unshift เพิ่มสมาชิกด้านหน้า
splice ตำแหน่งที่จะลบ, จำนวนที่จะลบ, สมาชิกที่ต้องการแทรก
slice ดึงเอาสมาชิกใน array มาใช้งาน (ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย -1)
*/

// push
const data = [10, 20, 30]
data.push(500)
data.push(...[600, 700])

console.log(data)

// pop
const number = [1, 2, 3, 4, 5]
number.pop()

console.log(number)

// shift
data.shift()
console.log(data)

// unshift
data.unshift(999)
console.log(data)

// splice
const data2 = [10, 20, 30, 40, 50]
data2.splice(1,3, 100)  // เริ่มลบ index[1], ลบไป 3 ตัว 

console.log(data2);

// slice
const data3 = [100, 200, 300, 400, 500]
// ต้องหาตัวแปรมารับค่า เพราะ slice จะเปลี่ยนค่าแค่ในบรรทัดของตัวเองเท่านั้น
const lastData = data3.slice(1,3)  // จะดึงสมาชิก 200, 300     200 คือ [1] จุดเริ่มต้นของสมาชิกใน array เริ่มที่ตำแหน่งที่เท่าไหร่, 300 [2] แต่ต้องเป็น [3] - [1] = [2]

console.log(lastData);