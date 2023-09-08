let score = 20;

/*
มากกว่า 70 => A
มากกว่า 60 => B
มากกว่า 50 => C
มากกว่า 40 => D
*/

//ถ้าเข้าเงื่อนไข 1 จะไม่นำไปเช็คต่อ 
//ถ้าไม่เข้าเงื่อนไข จะไปเช็คเงื่อนไขต่อไป
if(score>70){
    console.log("เกรด A");
}
else if(score>60){
    console.log("เกรด B");
}
else if(score>50){
    console.log("เกรด C");
}
else if(score>40){
    console.log("เกรด D");
}else{
    //ทุกเงื่อนไขเป็นเท็จ
    console.log("เกรด F");
}