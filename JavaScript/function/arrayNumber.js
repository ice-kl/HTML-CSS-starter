let points = [20,-5,10,-2,500,-100];

console.log(points);
// น้อยไปมาก
points.sort(function(a,b){
    return a-b;                      // a คือค่าลบจะถูกเรียงก่อน , b คือค่าบวกจะถูกเรียงหลัง
});

console.log(points);

//มากไปน้อย เปลี่ยน return b-a;        // b คือค่าบวกจะถูกเรียงก่อน , a คือค่าลบจะถูกเรียงหลัง

points.sort(function(a,b){
    return b-a;                      
});

console.log(points);