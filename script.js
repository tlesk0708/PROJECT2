// แสดงกล่องข้อมูล
function showInfo() {
    const infoBox = document.getElementById("info-box");
    infoBox.style.display = "block"; // เปลี่ยนการแสดงผล
}

// ซ่อนกล่องข้อมูล
function closeInfo() {
    const infoBox = document.getElementById("info-box");
    infoBox.style.display = "none"; // ซ่อนกล่องข้อมูล
}

function validateForm() {
    const age = document.forms[0]["age"].value.trim();
    const password = document.forms[0]["password"].value;

    // ตรวจสอบอายุ: ต้องเป็นตัวเลขที่ไม่ต่ำกว่า 0
    if (age < 0) {
        alert("อายุไม่สามารถต่ำกว่า 0 ได้");
        return false;
    }

    // ตรวจสอบรหัสผ่าน: อย่างน้อย 8 ตัว มีตัวอักษรและตัวเลข
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร และประกอบด้วยตัวอักษรและตัวเลข");
        return false;
    }

    return true; // ส่งฟอร์มถ้าทุกอย่างถูกต้อง
}

// ฟังก์ชันตรวจสอบรหัสผ่าน
function validatePassword(password) {
    // ใช้ Regular Expression ตรวจสอบว่ารหัสผ่านมีตัวอักษรอย่างน้อย 4 ตัวและมีตัวเลข
    const passwordPattern = /^(?=(.*[a-zA-Z]){4,})(?=.*\d).*$/;
    return passwordPattern.test(password);
}

// ฟังก์ชัน validate ฟอร์มการสมัคร
function validateForm() {
    const password = document.forms[0]["password"].value;

    // ตรวจสอบรหัสผ่าน
    if (!validatePassword(password)) {
        alert("รหัสผ่านต้องมีตัวอักษรอย่างน้อย 4 ตัวและต้องมีตัวเลข");
        return false; // หยุดการส่งฟอร์ม
    }

    return true; // ส่งฟอร์ม
}

