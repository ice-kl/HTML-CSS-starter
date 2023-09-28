// คัดกรองสมาชิกภายใน array ที่ผ่านเงื่อนไขตามที่เราได้กำหนดขึ้นมา สมาชิกใน array ที่ผ่านการคัดกรองจะถูกนำไปเก็บไว้ใน array ก้อนใหม่
 
const data = [10,20,30,40]

const result = data.filter(e => e > 20)

console.log(result);