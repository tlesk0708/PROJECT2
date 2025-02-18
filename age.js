// ฟังก์ชันที่ป้องกันไม่ให้กรอกตัวอักษรหรือเครื่องหมายพิเศษใดๆ
function blockNonNumeric(event) {
    var charCode = event.keyCode || event.which; // หาค่าของ key ที่กด

    // อนุญาตให้กด Backspace (keyCode 8)
    if (charCode === 8) {
        return; // อนุญาตให้ลบได้
    }

    // ตรวจสอบว่ากดตัวเลขจากแป้นพิมพ์หลัก (48-57) หรือจาก numpad (96-105)
    if ((charCode >= 48 && charCode <= 57) || (charCode >= 96 && charCode <= 105)) {
        return; // อนุญาตให้พิมพ์ตัวเลขจากทั้งสองแป้นพิมพ์
    }

    // หากไม่ใช่ตัวเลข ก็ป้องกันการพิมพ์
    event.preventDefault();
}

// ฟังก์ชันนี้จะถูกเรียกเมื่อผู้ใช้กดปุ่มในช่อง input
document.getElementById("age").addEventListener("keydown", blockNonNumeric);