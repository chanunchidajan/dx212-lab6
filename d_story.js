// ฟังก์ชันค้นหาเมนูที่ราคาไม่เกินงบประมาณ
const findMenusByBudget = (menus, budget) => {
  return menus.filter(menu => menu.price <= budget);
};

// Mock Data
const menus = [
  { id: 1, name: "ข้าวกะเพรา", price: 50, category: "อาหารจานเดียว" },
  { id: 2, name: "ข้าวมันไก่", price: 60, category: "อาหารจานเดียว" },
  { id: 3, name: "ผัดไทยกุ้ง", price: 100, category: "อาหารจานเดียว" },
  { id: 4, name: "สเต๊ก", price: 180, category: "อาหารจานเดียว" },
  { id: 5, name: "ชาเย็น", price: 40, category: "เครื่องดื่ม" }
];

// กรณีที่ 1: มีหลายเมนูที่อยู่ในงบ
console.log("กรณีที่ 1:", findMenusByBudget(menus, 100));

// กรณีที่ 2: ไม่พบเมนูที่อยู่ในงบ
console.log("กรณีที่ 2:", findMenusByBudget(menus, 30));

// กรณีที่ 3: กรณีขอบ - งบเท่ากับราคาเมนู
console.log("กรณีที่ 3:", findMenusByBudget(menus, 50));