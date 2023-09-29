// การลดข้อมูลสมาชิกภายใน Array แต่ส่งค่ากลับมาแค่ค่าเดียว
// array.reduce((ค่าที่ถูกประมวลผล, e) => {}, ค่าเริ่มต้น)        ค่าที่ถูกประมวลผล เอามาจากค่าเริ่มต้น

// อยากจะหาผลรวมของ data โดยให้ค่าเริ่มต้น total = 0

const data = [10,20,30,40]

const summation = data.reduce((value, e) => {        // value = 0 
    const total = e + value        // total = 10 + 0 = 10  loop ถัดไป total จะถูกกำหนดค่าไว้ใน value
    return total
},0)

console.log(summation);
// value = 0 10 30 60 100
// (0), (10+0), (20+10), (30+30), (40+60)


// Object
// ต้องการหาผลรวมว่า 3 ชิ้นนี้ราคาเท่าไหร่
const cart = [
    {name:'Bag', price:500},
    {name:'Book', price:900},
    {name:'Camera', price:5000}
]
const totalPayment = cart.reduce((value, e) => e.price + value, 0)
console.log(`ลูกค้าต้องชำระเงิน = ${totalPayment} บาท `);