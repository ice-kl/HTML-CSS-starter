// การเปลี่ยนแปลงค่าสมาชิกภายใน Array โดยจะเก็บค่าไว้ใน Array ก้อนใหม่

const numbers = [10,20,30,40]

const result = numbers.map(e => {      // call back function ต้องมีการ return ค่า    array ก้อนใหม่ถูกเก็บไว้ใน result
    const a = e * 2    // [10*2,20*2,30*2,40*2]
    return a
})

console.log(result);


const data = ['rain','hot','very hot','hot','rain','cool','snow']
const result2 = data.map((e,i) => {
    return `day ${i+1} , feel like ${e}`
})

console.log(result2);


const data3 = [
    {day:'01/06/2023',weather:'hot',temp:30},
    {day:'02/06/2023',weather:'rain',temp:27},
    {day:'03/06/2023',weather:'cool',temp:25}
]

const result3 = data3.map(e => e.weather)  // ดึงข้อมูลเฉพาะ weather

console.log(result3);