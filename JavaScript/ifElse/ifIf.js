// if ซ้อน if

let age = 20;

// เงื่อนไขใน if นอกจะต้องเป็นจริง ถึงจะทำการเช็ค if ด้านใน
if(age<=15){
    if(age==15){
        console.log("ม.3");
    }else if(age==14){
        console.log("ม.2");
    }
    else if(age==13){
        console.log("ม.1");
    }else{
        console.log("ประถม");
    }
// ไม่เข้าเงื่อนไข if ด้านบน
}else{
    console.log("ม.ปลาย");
}