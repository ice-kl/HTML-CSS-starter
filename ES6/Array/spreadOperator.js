// กระจายสมาชิกที่อยู่ใน array1 ไป array2 โดยการใส่ ...

const newArr = [100,200,300]
const data = [10,20,...newArr]

console.log(data);


const colors = ['red','green','black']
const allcolors = ['white','orange',...colors]

const newColors = ['Blue']

// เพิ่ม value ใน newColors เข้าไปใน allcolors
allcolors.push(...newColors)

console.log(allcolors);

