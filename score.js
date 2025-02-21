function calculateScore_R(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มอัตโนมัติ

    const form = document.getElementById("quizForm");
    const questions = form.querySelectorAll(".whitebox"); // นับจำนวนคำถามทั้งหมด
    const selectedAnswers = document.querySelectorAll("input[type='radio']:checked");

    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (selectedAnswers.length < questions.length) {
        alert("กรุณาตอบคำถามให้ครบทุกข้อ!");
        return; // หยุดการทำงาน และไม่เปลี่ยนหน้า
    }
    // แสดงแจ้งเตือนให้ยืนยัน
    let confirmSave = confirm("คุณแน่ใจหรือไม่ว่าจะบันทึกคำตอบ?");
    if (!confirmSave) {
        return; // ถ้ากด 'Cancel' ให้อยู่ที่หน้าเดิม
    }

    let totalScore_R = 0;

    selectedAnswers.forEach((answer) => {
        totalScore_R += parseInt(answer.nextElementSibling.getAttribute("data-number"));
    });

    // เก็บคะแนนลงใน Local Storage
    localStorage.setItem('totalScore_R', totalScore_R);

    // ส่งฟอร์มไปยังหน้าถัดไป
    form.submit();
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------
function calculateScore_I(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มอัตโนมัติ

    const form = document.getElementById("quizForm");
    const questions = form.querySelectorAll(".whitebox"); // นับจำนวนคำถามทั้งหมด
    const selectedAnswers = document.querySelectorAll("input[type='radio']:checked");

    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (selectedAnswers.length < questions.length) {
        alert("กรุณาตอบคำถามให้ครบทุกข้อ!");
        return; // หยุดการทำงาน และไม่เปลี่ยนหน้า
    }
    // แสดงแจ้งเตือนให้ยืนยัน
    let confirmSave = confirm("คุณแน่ใจหรือไม่ว่าจะบันทึกคำตอบ?");
    if (!confirmSave) {
        return; // ถ้ากด 'Cancel' ให้อยู่ที่หน้าเดิม
    }

    let totalScore_I = 0;

    selectedAnswers.forEach((answer) => {
        totalScore_I += parseInt(answer.nextElementSibling.getAttribute("data-number"));
    });

    // เก็บคะแนนลงใน Local Storage
    localStorage.setItem('totalScore_I', totalScore_I);

    // ส่งฟอร์มไปยังหน้าถัดไป
    form.submit();
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
function calculateScore_A(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มอัตโนมัติ

    const form = document.getElementById("quizForm");
    const questions = form.querySelectorAll(".whitebox"); // นับจำนวนคำถามทั้งหมด
    const selectedAnswers = document.querySelectorAll("input[type='radio']:checked");

    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (selectedAnswers.length < questions.length) {
        alert("กรุณาตอบคำถามให้ครบทุกข้อ!");
        return; // หยุดการทำงาน และไม่เปลี่ยนหน้า
    }
    // แสดงแจ้งเตือนให้ยืนยัน
    let confirmSave = confirm("คุณแน่ใจหรือไม่ว่าจะบันทึกคำตอบ?");
    if (!confirmSave) {
        return; // ถ้ากด 'Cancel' ให้อยู่ที่หน้าเดิม
    }

    let totalScore_A = 0;

    selectedAnswers.forEach((answer) => {
        totalScore_A += parseInt(answer.nextElementSibling.getAttribute("data-number"));
    });

    // เก็บคะแนนลงใน Local Storage
    localStorage.setItem('totalScore_A', totalScore_A);

    // ส่งฟอร์มไปยังหน้าถัดไป
    form.submit();
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------
function calculateScore_S(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มอัตโนมัติ

    const form = document.getElementById("quizForm");
    const questions = form.querySelectorAll(".whitebox"); // นับจำนวนคำถามทั้งหมด
    const selectedAnswers = document.querySelectorAll("input[type='radio']:checked");

    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (selectedAnswers.length < questions.length) {
        alert("กรุณาตอบคำถามให้ครบทุกข้อ!");
        return; // หยุดการทำงาน และไม่เปลี่ยนหน้า
    }
    // แสดงแจ้งเตือนให้ยืนยัน
    let confirmSave = confirm("คุณแน่ใจหรือไม่ว่าจะบันทึกคำตอบ?");
    if (!confirmSave) {
        return; // ถ้ากด 'Cancel' ให้อยู่ที่หน้าเดิม
    }

    let totalScore_S = 0;

    selectedAnswers.forEach((answer) => {
        totalScore_S += parseInt(answer.nextElementSibling.getAttribute("data-number"));
    });

    // เก็บคะแนนลงใน Local Storage
    localStorage.setItem('totalScore_S', totalScore_S);

    // ส่งฟอร์มไปยังหน้าถัดไป
    form.submit();
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------
function calculateScore_E(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มอัตโนมัติ

    const form = document.getElementById("quizForm");
    const questions = form.querySelectorAll(".whitebox"); // นับจำนวนคำถามทั้งหมด
    const selectedAnswers = document.querySelectorAll("input[type='radio']:checked");

    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (selectedAnswers.length < questions.length) {
        alert("กรุณาตอบคำถามให้ครบทุกข้อ!");
        return; // หยุดการทำงาน และไม่เปลี่ยนหน้า
    }
    // แสดงแจ้งเตือนให้ยืนยัน
    let confirmSave = confirm("คุณแน่ใจหรือไม่ว่าจะบันทึกคำตอบ?");
    if (!confirmSave) {
        return; // ถ้ากด 'Cancel' ให้อยู่ที่หน้าเดิม
    }

    let totalScore_E = 0;

    selectedAnswers.forEach((answer) => {
        totalScore_E += parseInt(answer.nextElementSibling.getAttribute("data-number"));
    });

    // เก็บคะแนนลงใน Local Storage
    localStorage.setItem('totalScore_E', totalScore_E);

    // ส่งฟอร์มไปยังหน้าถัดไป
    form.submit();
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------
function calculateScore_C(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มอัตโนมัติ

    const form = document.getElementById("quizForm");
    const questions = form.querySelectorAll(".whitebox"); // นับจำนวนคำถามทั้งหมด
    const selectedAnswers = document.querySelectorAll("input[type='radio']:checked");

    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (selectedAnswers.length < questions.length) {
        alert("กรุณาตอบคำถามให้ครบทุกข้อ!");
        return; // หยุดการทำงาน และไม่เปลี่ยนหน้า
    }
    // แสดงแจ้งเตือนให้ยืนยัน
    let confirmSave = confirm("คุณแน่ใจหรือไม่ว่าจะบันทึกคำตอบ?");
    if (!confirmSave) {
        return; // ถ้ากด 'Cancel' ให้อยู่ที่หน้าเดิม
    }

    let totalScore_C = 0;

    selectedAnswers.forEach((answer) => {
        totalScore_C += parseInt(answer.nextElementSibling.getAttribute("data-number"));
    });

    // เก็บคะแนนลงใน Local Storage
    localStorage.setItem('totalScore_C', totalScore_C);

    // ส่งฟอร์มไปยังหน้าถัดไป
    form.submit();
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


