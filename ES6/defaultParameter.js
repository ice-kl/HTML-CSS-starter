// การกำหนดค่าเริ่มต้นของ parameter ที่อยู่ใน function
getDataCustomer = (customerName, customerAddress = "Bangkok") => {  // แบบใหม่ กำหนดค่าเริ่มต้นกรณีที่ไม่ได้ใส่ค่าใน customerAddress

    // if(!customerAddress){                 // แบบเก่า กำหนดค่าเริ่มต้นกรณีที่ไม่ได้ใส่ค่าใน customerAddress
    //     customerAddress = "Bangkok"
    // }

    const address = `Customer name : ${customerName}
    Address : ${customerAddress}`
    return address
}

console.log(getDataCustomer("Joody","Chiang Mai"));
console.log(getDataCustomer("Joody"));