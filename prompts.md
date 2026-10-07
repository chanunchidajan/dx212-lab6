function calculateFare(distance) {
    const baseFare = 35;
    const ratePerKm = 5;
    const randomFee = Math.floor(Math.random() * 11); // 0–10 บาท

    return Math.round(baseFare + (distance * ratePerKm) + randomFee);
}
const calcFare = (distanceKm) => {
  // ตรวจสอบระยะทาง
  if (typeof distanceKm !== "number" || !Number.isFinite(distanceKm) || distanceKm < 0) {
    return 0;
  }

  // 2 กม.แรก 10 บาท
  if (distanceKm <= 2) {
    return 10;
  }

  // กม.ถัดไปคิด กม.ละ 2 บาท และปัดเศษขึ้น
  return 10 + Math.ceil(distanceKm - 2) * 2;
};

console.log(calcFare(1.5)); // 10
console.log(calcFare(2));   // 10
console.log(calcFare(7.2)); // 22s
### Part B ข้อ 2: ตรวจสอบคำอธิบาย
- ตรวจสอบคำอธิบายตารางจาก AI แล้ว อธิบายถูกต้องทุกบรรทัด ไม่พบจุดผิด
## Part C: Debugging Log
- **บั๊กจุดที่ 1:** arrow function ที่มีปีกกา `{ }` ต้องมีคำว่า `return` เสมอ (ถ้าไม่มีจะได้ undefined)
- **บั๊กจุดที่ 2:** การใช้ `reduce` กับ Array of Objects ต้องใส่ค่าเริ่มต้น (Initial value) เป็น `0` เสมอ ไม่งั้นตัวแปรแรกจะเอาทั้ง Object มาบวก ทำให้ได้ผลลัพธ์ผิดพลาด

### Checkpoint C
- arrow function ที่มีปีกกาต้องมี `return`
- `reduce` บน Array of Objects ควรใส่ค่าเริ่มต้นเสมอ (เช่น `0`)
```[cite: 10]
## Part D: User Story -> Prompt -> Code -> Test

### Prompt ที่ใช้
"ในฐานะผู้ใช้ ฉันอยากเห็นรายการเมนูอาหารที่ราคาไม่เกินงบประมาณที่กำหนด ขอฟังก์ชัน JavaScript ทำงานกับ Array of Object โดยก่อนเขียนโค้ดให้ถามคำถาม 3 ข้อก่อน"

### คำถามที่ AI ถามเพื่อความชัดเจน
1. โครงสร้าง Data ของเมนูเป็นอย่างไร
2. งบประมาณรับค่าในรูปแบบไหน
3. ถ้าไม่พบเมนูให้ออกผลลัพธ์อย่างไร

### ผลการทดสอบ (node d_story.js)
- ผ่านทั้ง 3 กรณี (รวมกรณีขอบ)
- รอบที่ iterate: 1 รอบ
