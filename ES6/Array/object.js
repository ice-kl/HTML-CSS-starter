// ทำงานกับ object

// ตัวแปรเก็บข้อมูล
const username = "Joody";
const age = 25;
const address = "Bangkok";

// ผูกตัวแปรเข้ากับ property ใน object
const customer = {
    customerName :username,
    age,  // ถ้าชื่อ property กับตัวแปรซ้ำกัน สามารถใส่ชื่อครั้งเดียวได้เลย
    address
}

console.log(customer);