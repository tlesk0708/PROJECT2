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
// คำนวณคะแนนของ E/I
function calculateScore_EI(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มอัตโนมัติ

    let E_score = 0;
    let I_score = 0;

    // ข้อที่ 49-58
    let q49 = document.querySelector('input[name="question49"]:checked');
    if (q49) {
        if (q49.value === "เป็นประจำ") E_score += 1;
        else if (q49.value === "บ่อยครั้ง") E_score += 1;
        else if (q49.value === "บางครั้ง") I_score += 1;
        else if (q49.value === "แทบไม่เคย") I_score += 1;
    }

    let q50 = document.querySelector('input[name="question50"]:checked');
    if (q50) {
        if (q50.value === "ไม่กังวลเลย") E_score += 1;
        else if (q50.value === "กังวลเล็กน้อย") E_score += 1;
        else if (q50.value === "กังวลพอสมควร") I_score += 1;
        else if (q50.value === "กังวลเป็นอย่างมาก") I_score += 1;
    }

    let q51 = document.querySelector('input[name="question51"]:checked');
    if (q51) {
        if (q51.value === "รู้สึกสบายใจมาก") E_score += 1;
        else if (q51.value === "รู้สึกค่อนข้างสบายใจ") E_score += 1;
        else if (q51.value === "รู้สึกไม่ค่อยสบายใจ") I_score += 1;
        else if (q51.value === "รู้สึกไม่สบายใจเลย") I_score += 1;
    }

    let q52 = document.querySelector('input[name="question52"]:checked');
    if (q52) {
        if (q52.value === "สนุกมาก") E_score += 1;
        else if (q52.value === "สนุกพอสมควร") E_score += 1;
        else if (q52.value === "สนุกเล็กน้อย") I_score += 1;
        else if (q52.value === "ไม่สนุกเลย") I_score += 1;
    }

    let q53 = document.querySelector('input[name="question53"]:checked');
    if (q53) {
        if (q53.value === "ไม่จริงเลย") E_score += 1;
        else if (q53.value === "ค่อนข้างไม่จริง") E_score += 1;
        else if (q53.value === "ค่อนข้างจริง") I_score += 1;
        else if (q53.value === "จริงมาก") I_score += 1;
    }

    let q54 = document.querySelector('input[name="question54"]:checked');
    if (q54) {
        if (q54.value === "ฉันแนะนำตัวก่อนเสมอ") E_score += 1;
        else if (q54.value === "บางครังฉันก็แนะนำตัวก่อน") E_score += 1;
        else if (q54.value === "ฉันจะรอให้คนอื่นแนะนำตัว") I_score += 1;
        else if (q54.value === "ฉันไม่แนะนำตัวกับคนอื่น") I_score += 1;
    }

    let q55 = document.querySelector('input[name="question55"]:checked');
    if (q55) {
        if (q55.value === "จริงมาก") E_score += 1;
        else if (q55.value === "ค่อนข้างจริง") E_score += 1;
        else if (q55.value === "ค่อนข้างไม่จริง") I_score += 1;
        else if (q55.value === "ไม่จริงเลย") I_score += 1;
    }

    let q56 = document.querySelector('input[name="question56"]:checked');
    if (q56) {
        if (q56.value === "จริงมาก") E_score += 1;
        else if (q56.value === "ค่อนข้างจริง") E_score += 1;
        else if (q56.value === "ค่อนข้างไม่จริง") I_score += 1;
        else if (q56.value === "ไม่จริงเลย") I_score += 1;
    }

    let q57 = document.querySelector('input[name="question57"]:checked');
    if (q57) {
        if (q57.value === "ทำได้ง่ายมาก") E_score += 1;
        else if (q57.value === "ค่อนข้างเข้ากับคนอื่นได้") E_score += 1;
        else if (q57.value === "ไม่คิดว่าจะทำได้") I_score += 1;
        else if (q57.value === "ทำไม่ได้เลย") I_score += 1;
    }

    let q58 = document.querySelector('input[name="question58"]:checked');
    if (q58) {
        if (q58.value === "จริงมาก") E_score += 1;
        else if (q58.value === "ค่อนข้างจริง") E_score += 1;
        else if (q58.value === "ค่อนข้างไม่จริง") I_score += 1;
        else if (q58.value === "ไม่จริงเลย") I_score += 1;
    }

    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (!q49 || !q50 || !q51 || !q52 || !q53 || !q54 || !q55 || !q56 || !q57 || !q58) {
        alert("กรุณาตอบคำถามให้ครบทุกข้อ!");
        return; // หยุดการทำงานและไม่เปลี่ยนหน้า
    }
    // แสดงแจ้งเตือนให้ยืนยัน
    let confirmSave = confirm("คุณแน่ใจหรือไม่ว่าจะบันทึกคำตอบ?");
    if (!confirmSave) {
        return; // ถ้ากด 'Cancel' ให้อยู่ที่หน้าเดิม
    }

    // เก็บค่าไว้ในตัวแปร
    localStorage.setItem('E_score', E_score);
    localStorage.setItem('I_score', I_score);

    // ส่งฟอร์มไปยังหน้าถัดไป (ถ้าตอบครบ)
    const form = document.getElementById("quizForm");
    form.submit(); // ส่งฟอร์มไปยังหน้าถัดไป
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------
// คำนวณคะแนนของ S/N
function calculateScore_SN(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มอัตโนมัติ

    let S_score = 0;
    let N_score = 0;

    // ข้อที่ 59-68
    let q59 = document.querySelector('input[name="question59"]:checked');
    let q60 = document.querySelector('input[name="question60"]:checked');
    let q61 = document.querySelector('input[name="question61"]:checked');
    let q62 = document.querySelector('input[name="question62"]:checked');
    let q63 = document.querySelector('input[name="question63"]:checked');
    let q64 = document.querySelector('input[name="question64"]:checked');
    let q65 = document.querySelector('input[name="question65"]:checked');
    let q66 = document.querySelector('input[name="question66"]:checked');
    let q67 = document.querySelector('input[name="question67"]:checked');
    let q68 = document.querySelector('input[name="question68"]:checked');
    
    // คำนวณคะแนน
    if (q59) {
        if (q59.value === "ไม่ตื่นเต้นเลย") S_score += 1;
        else if (q59.value === "ตื่นเต้นเล็กน้อย") S_score += 1;
        else if (q59.value === "ตื่นเต้นพอสมควร") N_score += 1;
        else if (q59.value === "ตื่นเต้นมาก") N_score += 1;
    }

    if (q60) {
        if (q60.value === "จริงมาก") S_score += 1;
        else if (q60.value === "ค่อนข้างจริง") S_score += 1;
        else if (q60.value === "ค่อนข้างไม่จริง") N_score += 1;
        else if (q60.value === "ไม่จริงเลย") N_score += 1;
    }

    if (q61) {
        if (q61.value === "ไม่สนุกเลย") S_score += 1;
        else if (q61.value === "สนุกเล็กน้อย") S_score += 1;
        else if (q61.value === "สนุกพอสมควร") N_score += 1;
        else if (q61.value === "สนุกมาก") N_score += 1;
    }

    if (q62) {
        if (q62.value === "ไม่จริงเลย") S_score += 1;
        else if (q62.value === "ค่อนข้างไม่จริง") S_score += 1;
        else if (q62.value === "ค่อนข้างจริง") N_score += 1;
        else if (q62.value === "จริงมาก") N_score += 1;
    }

    if (q63) {
        if (q63.value === "จริงมาก") S_score += 1;
        else if (q63.value === "ค่อนข้างจริง") S_score += 1;
        else if (q63.value === "ค่อนข้างไม่จริง") N_score += 1;
        else if (q63.value === "ไม่จริงเลย") N_score += 1;
    }

    if (q64) {
        if (q64.value === "จริงมาก") S_score += 1;
        else if (q64.value === "ค่อนข้างจริง") S_score += 1;
        else if (q64.value === "ค่อนข้างไม่จริง") N_score += 1;
        else if (q64.value === "ไม่จริงเลย") N_score += 1;
    }

    if (q65) {
        if (q65.value === "ไม่สนใจเลย") S_score += 1;
        else if (q65.value === "สนใจเล็กน้อย") S_score += 1;
        else if (q65.value === "สนใจพอสมควร") N_score += 1;
        else if (q65.value === "สนใจมาก") N_score += 1;
    }

    if (q66) {
        if (q66.value === "ไม่สนุกเลย") S_score += 1;
        else if (q66.value === "สนุกเล็กน้อย") S_score += 1;
        else if (q66.value === "สนุกพอสมควร") N_score += 1;
        else if (q66.value === "สนุกมาก") N_score += 1;
    }

    if (q67) {
        if (q67.value === "จริงมาก") S_score += 1;
        else if (q67.value === "ค่อนข้างจริง") S_score += 1;
        else if (q67.value === "ค่อนข้างไม่จริง") N_score += 1;
        else if (q67.value === "ไม่จริงเลย") N_score += 1;
    }

    if (q68) {
        if (q68.value === "จริงมาก") S_score += 1;
        else if (q68.value === "ค่อนข้างจริง") S_score += 1;
        else if (q68.value === "ค่อนข้างไม่จริง") N_score += 1;
        else if (q68.value === "ไม่จริงเลย") N_score += 1;
    }
    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (!q59 || !q60 || !q61 || !q62 || !q63 || !q64 || !q65 || !q66 || !q67 || !q68) {
        alert("กรุณาตอบคำถามให้ครบทุกข้อ!");
        return; // หยุดการทำงานและไม่เปลี่ยนหน้า
    }
     // แสดงแจ้งเตือนให้ยืนยัน
     let confirmSave = confirm("คุณแน่ใจหรือไม่ว่าจะบันทึกคำตอบ?");
     if (!confirmSave) {
         return; // ถ้ากด 'Cancel' ให้อยู่ที่หน้าเดิม
     }

    // เก็บค่าไว้ในตัวแปร
    localStorage.setItem('S_score', S_score);
    localStorage.setItem('N_score', N_score);

    // ส่งฟอร์มไปยังหน้าถัดไป
    const form = document.getElementById("quizForm");
    form.submit(); // ส่งฟอร์มไปยังหน้าถัดไป
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------
// คำนวณคะแนนของ T/F
function calculateScore_TF(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มอัตโนมัติ

    let T_score = 0;
    let F_score = 0;

    // ข้อที่ 69-78
    let q69 = document.querySelector('input[name="question69"]:checked');
    let q70 = document.querySelector('input[name="question70"]:checked');
    let q71 = document.querySelector('input[name="question71"]:checked');
    let q72 = document.querySelector('input[name="question72"]:checked');
    let q73 = document.querySelector('input[name="question73"]:checked');
    let q74 = document.querySelector('input[name="question74"]:checked');
    let q75 = document.querySelector('input[name="question75"]:checked');
    let q76 = document.querySelector('input[name="question76"]:checked');
    let q77 = document.querySelector('input[name="question77"]:checked');
    let q78 = document.querySelector('input[name="question78"]:checked');
    

    // คำนวณคะแนน
    if (q69) {
        if (q69.value === "ไม่จริงเลย") T_score += 1;
        else if (q69.value === "ค่อนข้างไม่จริง") T_score += 1;
        else if (q69.value === "ค่อนข้างจริง") F_score += 1;
        else if (q69.value === "จริงมาก") F_score += 1;
    }

    if (q70) {
        if (q70.value === "ไม่สำคัญเลย") T_score += 1;
        else if (q70.value === "ค่อนข้างไม่สำคัญ") T_score += 1;
        else if (q70.value === "ค่อนข้างสำคัญ") F_score += 1;
        else if (q70.value === "สำคัญมาก") F_score += 1;
    }

    if (q71) {
        if (q71.value === "จริงมาก") T_score += 1;
        else if (q71.value === "ค่อนข้างจริง") T_score += 1;
        else if (q71.value === "ค่อนข้างไม่จริง") F_score += 1;
        else if (q71.value === "ไม่จริงเลย") F_score += 1;
    }

    if (q72) {
        if (q72.value === "ไม่จริงเลย") T_score += 1;
        else if (q72.value === "ค่อนข้างไม่จริง") T_score += 1;
        else if (q72.value === "ค่อนข้างจริง") F_score += 1;
        else if (q72.value === "จริงมาก") F_score += 1;
    }

    if (q73) {
        if (q73.value === "จริงมาก") T_score += 1;
        else if (q73.value === "ค่อนข้างจริง") T_score += 1;
        else if (q73.value === "ค่อนข้างไม่จริง") F_score += 1;
        else if (q73.value === "ไม่จริงเลย") F_score += 1;
    }

    if (q74) {
        if (q74.value === "จริงมาก") T_score += 1;
        else if (q74.value === "ค่อนข้างจริง") T_score += 1;
        else if (q74.value === "ค่อนข้างไม่จริง") F_score += 1;
        else if (q74.value === "ไม่จริงเลย") F_score += 1;
    }

    if (q75) {
        if (q75.value === "จริงมาก") T_score += 1;
        else if (q75.value === "ค่อนข้างจริง") T_score += 1;
        else if (q75.value === "ค่อนข้างไม่จริง") F_score += 1;
        else if (q75.value === "ไม่จริงเลย") F_score += 1;
    }

    if (q76) {
        if (q76.value === "ไม่จริงเลย") T_score += 1;
        else if (q76.value === "ค่อนข้างไม่จริง") T_score += 1;
        else if (q76.value === "ค่อนข้างจริง") F_score += 1;
        else if (q76.value === "จริงมาก") F_score += 1;
    }

    if (q77) {
        if (q77.value === "จริงมาก") T_score += 1;
        else if (q77.value === "ค่อนข้างจริง") T_score += 1;
        else if (q77.value === "ค่อนข้างไม่จริง") F_score += 1;
        else if (q77.value === "ไม่จริงเลย") F_score += 1;
    }

    if (q78) {
        if (q78.value === "ไม่จริงเลย") T_score += 1;
        else if (q78.value === "ค่อนข้างไม่จริง") T_score += 1;
        else if (q78.value === "ค่อนข้างจริง") F_score += 1;
        else if (q78.value === "จริงมาก") F_score += 1;
    }
    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (!q69 || !q70 || !q71 || !q72 || !q73 || !q74 || !q75 || !q76 || !q77 || !q78) {
        alert("กรุณาตอบคำถามให้ครบทุกข้อ!");
        return; // หยุดการทำงานและไม่เปลี่ยนหน้า
    }
     // แสดงแจ้งเตือนให้ยืนยัน
     let confirmSave = confirm("คุณแน่ใจหรือไม่ว่าจะบันทึกคำตอบ?");
     if (!confirmSave) {
         return; // ถ้ากด 'Cancel' ให้อยู่ที่หน้าเดิม
     }

    // เก็บค่าไว้ในตัวแปร
    localStorage.setItem('T_score', T_score);
    localStorage.setItem('F_score', F_score);

    // ส่งฟอร์มไปยังหน้าถัดไป
    const form = document.getElementById("quizForm");
    form.submit(); // ส่งฟอร์มไปยังหน้าถัดไป
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// คำนวณคะแนนของ J/P
function calculateScore_JP(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มอัตโนมัติ

    let J_score = 0;
    let P_score = 0;

    // ข้อที่ 79-88
    let q79 = document.querySelector('input[name="question79"]:checked');
    let q80 = document.querySelector('input[name="question80"]:checked');
    let q81 = document.querySelector('input[name="question81"]:checked');
    let q82 = document.querySelector('input[name="question82"]:checked');
    let q83 = document.querySelector('input[name="question83"]:checked');
    let q84 = document.querySelector('input[name="question84"]:checked');
    let q85 = document.querySelector('input[name="question85"]:checked');
    let q86 = document.querySelector('input[name="question86"]:checked');
    let q87 = document.querySelector('input[name="question87"]:checked');
    let q88 = document.querySelector('input[name="question88"]:checked');

    // คำนวณคะแนน
    if (q79) {
        if (q79.value === "สะอาดมาก") J_score += 1;
        else if (q79.value === "ค่อนข้างสะอาด") J_score += 1;
        else if (q79.value === "ค่อนข้างไม่สะอาด") P_score += 1;
        else if (q79.value === "ไม่สะอาดเลย") P_score += 1;
    }

    if (q80) {
        if (q80.value === "จริงมาก") J_score += 1;
        else if (q80.value === "ค่อนข้างจริง") J_score += 1;
        else if (q80.value === "ค่อนข้างไม่จริง") P_score += 1;
        else if (q80.value === "ไม่จริงเลย") P_score += 1;
    }

    if (q81) {
        if (q81.value === "ชอบใช้มาก") J_score += 1;
        else if (q81.value === "ใช้พอสมควร") J_score += 1;
        else if (q81.value === "ใช้เล็กน้อย") P_score += 1;
        else if (q81.value === "ไม่ใช้เลย") P_score += 1;
    }

    if (q82) {
        if (q82.value === "ไม่จริงเลย") J_score += 1;
        else if (q82.value === "ค่อนข้างไม่จริง") J_score += 1;
        else if (q82.value === "ค่อนข้างจริง") P_score += 1;
        else if (q82.value === "จริงมาก") P_score += 1;
    }

    if (q83) {
        if (q83.value === "จริงมาก") J_score += 1;
        else if (q83.value === "ค่อนข้างจริง") J_score += 1;
        else if (q83.value === "ค่อนข้างไม่จริง") P_score += 1;
        else if (q83.value === "ไม่จริงเลย") P_score += 1;
    }

    if (q84) {
        if (q84.value === "ไม่จริงเลย") J_score += 1;
        else if (q84.value === "ค่อนข้างไม่จริง") J_score += 1;
        else if (q84.value === "ค่อนข้างจริง") P_score += 1;
        else if (q84.value === "จริงมาก") P_score += 1;
    }

    if (q85) {
        if (q85.value === "ไม่จริงเลย") J_score += 1;
        else if (q85.value === "ค่อนข้างไม่จริง") J_score += 1;
        else if (q85.value === "ค่อนข้างจริง") P_score += 1;
        else if (q85.value === "จริงมาก") P_score += 1;
    }

    if (q86) {
        if (q86.value === "ชอบมาก") J_score += 1;
        else if (q86.value === "ค่อนข้างชอบ") J_score += 1;
        else if (q86.value === "ค่อนข้างไม่ชอบ") P_score += 1;
        else if (q86.value === "ไม่ชอบเลย") P_score += 1;
    }

    if (q87) {
        if (q87.value === "จริงมาก") J_score += 1;
        else if (q87.value === "ค่อนข้างจริง") J_score += 1;
        else if (q87.value === "ค่อนข้างไม่จริง") P_score += 1;
        else if (q87.value === "ไม่จริงเลย") P_score += 1;
    }

    if (q88) {
        if (q88.value === "จริงมาก") J_score += 1;
        else if (q88.value === "ค่อนข้างจริง") J_score += 1;
        else if (q88.value === "ค่อนข้างไม่จริง") P_score += 1;
        else if (q88.value === "ไม่จริงเลย") P_score += 1;
    }
    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (!q79 || !q80 || !q81 || !q82 || !q83 || !q84 || !q85 || !q86 || !q87 || !q88) {
        alert("กรุณาตอบคำถามให้ครบทุกข้อ!");
        return; // หยุดการทำงานและไม่ทำอะไรต่อ
    }
    // แสดงแจ้งเตือนให้ยืนยัน
    let confirmSave = confirm("คุณแน่ใจหรือไม่ว่าจะบันทึกคำตอบ?");
    if (!confirmSave) {
        return; // ถ้ากด 'Cancel' ให้อยู่ที่หน้าเดิม
    }

    // เก็บค่าไว้ในตัวแปร
    localStorage.setItem('J_score', J_score);
    localStorage.setItem('P_score', P_score);

    // คืนค่า Promise ที่จะ resolve เมื่อเสร็จสิ้น
    return Promise.resolve();
}
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function calculateMBTI() {
    // ดึงค่าคะแนนจาก localStorage
    let E_score = parseInt(localStorage.getItem('E_score')) || 0;
    let I_score = parseInt(localStorage.getItem('I_score')) || 0;
    let S_score = parseInt(localStorage.getItem('S_score')) || 0;
    let N_score = parseInt(localStorage.getItem('N_score')) || 0;
    let T_score = parseInt(localStorage.getItem('T_score')) || 0;
    let F_score = parseInt(localStorage.getItem('F_score')) || 0;
    let J_score = parseInt(localStorage.getItem('J_score')) || 0;
    let P_score = parseInt(localStorage.getItem('P_score')) || 0;

    // คำนวณประเภท MBTI
    let resultMBTI = "";
    resultMBTI += (E_score >= I_score) ? "E" : "I";
    resultMBTI += (S_score >= N_score) ? "S" : "N";
    resultMBTI += (T_score >= F_score) ? "T" : "F";
    resultMBTI += (J_score >= P_score) ? "J" : "P";

    // เก็บค่าผลลัพธ์ MBTI ไว้ใน localStorage
    localStorage.setItem('MBTI_result', resultMBTI);
}
// --------------------------------------------------------------------------------------------------------------
function recommendFaculty() {
    let riasecScores = {
        R: parseInt(localStorage.getItem('totalScore_R')) || 0,
        I: parseInt(localStorage.getItem('totalScore_I')) || 0,
        A: parseInt(localStorage.getItem('totalScore_A')) || 0,
        S: parseInt(localStorage.getItem('totalScore_S')) || 0,
        E: parseInt(localStorage.getItem('totalScore_E')) || 0,
        C: parseInt(localStorage.getItem('totalScore_C')) || 0
    };
    
    let mbtiResult = localStorage.getItem('MBTI_result') || "";
    
    let faculties = [
        { name: "คณะเทคโนโลยีการเกษตร", score: (riasecScores.R + riasecScores.I + riasecScores.S), mbti: ["ENFP","ISTP"] },
        { name: "คณะเทคโนโลยีคหกรรมศาสตร์", score: (riasecScores.R + riasecScores.S + riasecScores.A), mbti: ["INFP", "ISFJ"] },
        { name: "คณะเทคโนโลยีสื่อสารมวลชน", score: (riasecScores.A + riasecScores.S + riasecScores.E), mbti: ["ISFP", "ENFP", "ESFP"] },
        { name: "คณะการแพทย์บูรณาการ", score: (riasecScores.I + riasecScores.S + riasecScores.E), mbti: ["ISFJ", "INFJ","ISTJ"] },
        { name: "คณะครุศาสตร์อุตสาหกรรม", score: (riasecScores.R + riasecScores.S + riasecScores.E), mbti: ["ISFJ", "ENFJ", "ESTJ"] },
        { name: "คณะบริหารธุรกิจ", score: (riasecScores.E + riasecScores.C + riasecScores.I), mbti: ["ENTJ", "ENTP", "ENFP", "ESTJ","ESTP","INTJ","INFJ","ISTJ"] },
        { name: "คณะพยาบาลศาสตร์", score: (riasecScores.S + riasecScores.C + riasecScores.I), mbti: ["ESFJ", "ISTJ", "ISFJ"] },
        { name: "คณะวิทยาศาสตร์และเทคโนโลยี", score: (riasecScores.R + riasecScores.I + riasecScores.C), mbti: ["INTP", "ISTP"] },
        { name: "คณะวิศวกรรมศาสตร์", score: (riasecScores.R + riasecScores.I + riasecScores.E), mbti: ["ENTP", "INTJ", "ISTP"] },
        { name: "คณะศิลปกรรมศาสตร์", score: (riasecScores.A + riasecScores.R + riasecScores.E), mbti: ["ESTP", "ESFP", "INFP", "ISFP"] },
        { name: "คณะศิลปศาสตร์", score: (riasecScores.A + riasecScores.S + riasecScores.R), mbti: ["ESFJ", "ENTJ", "ENFJ"] },
        { name: "คณะสถาปัตยกรรมศาสตร์", score: (riasecScores.A + riasecScores.R + riasecScores.E), mbti: ["INTP", "INFP"] }
    ];
    
    // กรองคณะที่ตรงกับ MBTI และมีคะแนนมากกว่า 0
    let matchingFaculties = faculties.filter(faculty => 
        faculty.mbti.includes(mbtiResult) && (faculty.score > 0)
    );
    
    // เรียงลำดับผลลัพธ์จากคะแนนสูงสุด
    matchingFaculties.sort((a, b) => b.score - a.score);
    
    if (matchingFaculties.length > 0) {
        let result = "คณะที่เหมาะสมกับคุณคือ: ";
        result += matchingFaculties.map((faculty, index) => `${index + 1}. ${faculty.name}`).join("\n");
        
    } else {
        alert("ไม่พบคณะที่ตรงกับผลลัพธ์ของคุณ");
    }
}



// ฟังก์ชันที่ทำงานเมื่อกดปุ่ม save
function saveResults(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มอัตโนมัติ

    // เรียกใช้ calculateScore_JP และรอให้ฟังก์ชันเสร็จก่อนที่จะทำงานต่อ
    calculateScore_JP(event).then(function() {
        // เมื่อ calculateScore_JP เสร็จสิ้นแล้ว, ให้ทำ calculateMBTI และ recommendFaculty
        calculateMBTI();
        recommendFaculty();
        // หลังจากฟังก์ชันทั้งหมดเสร็จแล้ว, ให้เปลี่ยนหน้าไปยังหน้าถัดไป
        window.location.href = 'result.html';  // เปลี่ยนเป็น URL ของหน้าถัดไปที่ต้องการ
    });
}

