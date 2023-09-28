// การทำงานกับ array โดย join, concat 
const data = [100, 200, 300]
console.log(data);

// แปลง array เป็น string แล้วเก็บไว้ในตัวแปร  โดยใช้ join
const result = data.join(" ") // เปลี่ยนสัญลักษณ์ , ให้เป็นแบบที่เราต้องการ โดยใส่สัญลักษณ์ไว้ใน  ()
console.log(result);

// การต่อสมาชิกภายใน array โดยใช้ concat
const data1 = [200, 300, 400]
const data2 = [400, 500]

const allData = data1.concat(data2)
console.log(allData)