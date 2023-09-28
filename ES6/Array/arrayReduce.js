// การลดข้อมูลสมาชิกภายใน Array แต่ส่งค่ากลับมาแค่ค่าเดียว
// array.reduce((ค่าที่ถูกประมวลผล, e) => {}, ค่าเริ่มต้น)        ค่าที่ถูกประมวลผล เอามาจากค่าเริ่มต้น

// อยากจะหาผลรวมของ data โดยให้ค่าเริ่มต้น total = 0

const data = [10,20,30,40]

data.reduce((value, e) => {        // value = 0 
    const total = e + value        // total = 10 + 0 = 10  loop ถัดไป total จะถูกกำหนดค่าไว้ใน value
    return total
},0)
