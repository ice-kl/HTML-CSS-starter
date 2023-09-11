// if (1 เงื่อนไข)
age = 15;
let result = (age == 15);  //true / false

// if(เงื่อนไขที่เป็นจริง boolean)
if(result){
    // คำสั่งให้ทำอะไร
    console.log("คำนำหน้าเป็น นาย / นางสาว");
}

// if-else (2 เงื่อนไข)

let balance = 5000;
let withDraw = 5600;

if(withDraw<=balance){
    //เงื่อนไขเป็นจริง
    console.log("ดำเนินการถอนเงิน = ",withDraw);
    balance-=withDraw
    console.log("ยอดเงินคงเหลือ = ",balance);
}else{
    //เงื่อนไขเป็นเท็จ
    console.log("ยอดเงินของคุณไม่พอ");
}

