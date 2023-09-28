// ใช้ในการส่งค่า Parameter เข้าไปทำงานใน Function โดยไม่จำกัดจำนวน โดยใช้เครื่องหมาย ...

summation = (...numberArr) => {
    let total = 0
    for(let number of numberArr) total += number //0 + 500 + 1000, total มีค่า = 0 ให้วนลูปบวกค่าใน array ทีละตัว
    return total
}

console.log(summation(500, 1000));
console.log(summation(500, 1000, 800));
console.log(summation(500, 1000, 800, 50));