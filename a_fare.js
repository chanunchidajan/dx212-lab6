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
console.log(calcFare(7.2)); // 22