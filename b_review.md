# Part B: Code Review Log

## 1. คำแนะนำจาก Senior Developer (3 ข้อ)
const devs = team.filter(member => member.role === "Dev");

const devTasks = devs.reduce(
  (sum, member) => sum + member.tasksDone,
  0
);
const teamNames = team.map(
  member => `${member.name} (${member.role})`
);

const devMembers = team.filter(
  member => member.role === "Dev"
);
const teamNames = team.map(
  member => `${member.name} (${member.role})`
);

const devMembers = team.filter(
  member => member.role === "Dev"
);

## 2. สิ่งที่เลือกนำไปแก้ไขจริง
- **เลือกข้อ:** ข้อ 1 เรื่องการยุบรวม filter และ reduce ซ้ำซ้อน
- **เพราะอะไร:** เพราะเป็นจุดที่เห็นได้ชัดที่สุดว่าโค้ดมี การทำงานซ้ำ (duplicate work)
- **โค้ดหลังแก้ไขแล้ว:**
```javascript
const team = [
  { name: "ฟ้า", role: "PO", tasksDone: 5 },
  { name: "ต้น", role: "Dev", tasksDone: 0 },
  { name: "นนท์", role: "SM", tasksDone: 3 },
  { name: "เจ", role: "Dev", tasksDone: 6 },
];

const names = team.map(member => `${member.name} (${member.role})`);

const devs = team.filter(member => member.role === "Dev");

const totalTasks = team.reduce(
  (sum, member) => sum + member.tasksDone,
  0
);

const devTasks = devs.reduce(
  (sum, member) => sum + member.tasksDone,
  0
);
## 3. ข้อที่ไม่เลือกนำมาใช้
- **ไม่เลือกข้อ:** การใส่ Type Validation เพิ่มเติม
- **เพราะอะไร:** เกินความจำเป็นสำหรับการเขียนฟังก์ชันจัดการข้อมูลขนาดเล็กในแล็บนี้
## Checkpoint B
**ตอบ:** AI ไม่รู้ว่าโค้ดนี้นำไปใช้ในบริบทไหน (Context) เช่น เป็นโค้ดเรียนฝึกหัดสั้น ๆ หรือระบบ Production ใหญ่ ทำให้ AI อาจแนะนำสิ่งที่ซับซ้อนเกินไป เราจึงต้อง "เข้าใจโค้ดก่อน" เพื่อเลือกปรับเฉพาะสิ่งที่เหมาะกับงานจริง
```[cite: 4]