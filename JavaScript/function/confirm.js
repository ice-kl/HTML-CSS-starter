function deleteData(){
    let result=confirm("คุณต้องการลบข้อมูลหรือไม่");
    if(result){
        console.log("ลบข้อมูลเรียบร้อย");  //Click OK = True
    }else{
        console.log("ยกเลิกการลบข้อความ");  //Click Cancel = False
    }
}
    
