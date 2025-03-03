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

    // ข้อที่ 61-70
    let q61 = document.querySelector('input[name="question61"]:checked');
    if (q61) {
        if (q61.value === "ชอบ") E_score += 1;
        else if (q61.value === "ชอบบางครั้ง") E_score += 1;
        else if (q61.value === "ชอบอยู่คนเดียว") I_score += 1;
        else if (q61.value === "ชอบเงียบ") I_score += 1;
    }

    let q62 = document.querySelector('input[name="question62"]:checked');
    if (q62) {
        if (q62.value === "รู้สึกพลังเต็มที่") E_score += 1;
        else if (q62.value === "รู้สึกดี") E_score += 1;
        else if (q62.value === "รู้สึกดีกว่าเมื่ออยู่คนเดียว") I_score += 1;
        else if (q62.value === "รู้สึกเหนื่อย") I_score += 1;
    }

    let q63 = document.querySelector('input[name="question63"]:checked');
    if (q63) {
        if (q63.value === "รู้สึกตื่นเต้นมากและชอบพบปะคนใหม่ๆเสมอ") E_score += 1;
        else if (q63.value === "ชอบพบปะคนใหม่ๆแต่ต้องใช้เวลาปรับตัว") E_score += 1;
        else if (q63.value === "รู้สึกโอเคแต่ไม่ค่อยชอบเริ่มบทสนทนา") I_score += 1;
        else if (q63.value === "รู้สึกอึดอัดและชอบอยู่กับคนที่คุ้นเคย") I_score += 1;
    }

    let q64 = document.querySelector('input[name="question64"]:checked');
    if (q64) {
        if (q64.value === "ไม่ค่อยสบายใจ") E_score += 1;
        else if (q64.value === "สบายใจบางครั้ง") E_score += 1;
        else if (q64.value === "สบายใจมาก") I_score += 1;
        else if (q64.value === "สบายใจที่สุด") I_score += 1;
    }

    let q65 = document.querySelector('input[name="question65"]:checked');
    if (q65) {
        if (q65.value === "ชอบ") E_score += 1;
        else if (q65.value === "ชอบบางครั้ง") E_score += 1;
        else if (q65.value === "ไม่ชอบ") I_score += 1;
        else if (q65.value === "ไม่ชอบเลย") I_score += 1;
    }

    let q66 = document.querySelector('input[name="question66"]:checked');
    if (q66) {
        if (q66.value === "มักขอคำแนะนำจากคนอื่น") E_score += 1;
        else if (q66.value === "บางครั้งก็ขอคำแนะนำ") E_score += 1;
        else if (q66.value === "ฉันชอบคิดเองก่อน") I_score += 1;
        else if (q66.value === "ฉันจะคิดและตัดสินใจเอง") I_score += 1;
    }

    let q67 = document.querySelector('input[name="question67"]:checked');
    if (q67) {
        if (q67.value === "ชอบมาก") E_score += 1;
        else if (q67.value === "ชอบบางครั้ง") E_score += 1;
        else if (q67.value === "ชอบอยู่คนเดียว") I_score += 1;
        else if (q67.value === "ไม่ชอบตั้งกลุ่มเลย") I_score += 1;
    }

    let q68 = document.querySelector('input[name="question68"]:checked');
    if (q68) {
        if (q68.value === "ทำกิจกรรมกลุ่ม") E_score += 1;
        else if (q68.value === "ชอบทำบางกิจกรรมแบบกลุ่ม") E_score += 1;
        else if (q68.value === "ทำกิจกรรมแบบเงียบๆ") I_score += 1;
        else if (q68.value === "ทำกิจกรรมคนเดียว") I_score += 1;
    }

    let q69 = document.querySelector('input[name="question69"]:checked');
    if (q69) {
        if (q69.value === "รู้สึกกระปรี้กระเปร่ามาก") E_score += 1;
        else if (q69.value === "รู้สึกดี") E_score += 1;
        else if (q69.value === "ผ่อนคลายมากเมื่ออยู่คนเดียว") I_score += 1;
        else if (q69.value === "รู้สึกต้องการความสงบ") I_score += 1;
    }

    let q70 = document.querySelector('input[name="question70"]:checked');
    if (q70) {
        if (q70.value === "ชอบทำงานกับคนอื่นมาก") E_score += 1;
        else if (q70.value === "ชอบทำงานเป็นทีมบางครั้ง") E_score += 1;
        else if (q70.value === "ทำงานคนเดียว") I_score += 1;
        else if (q70.value === "ชอบทำคนเดียวเท่านั้น") I_score += 1;
    }

    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (!q61 || !q62 || !q63 || !q64 || !q65 || !q66 || !q67 || !q68 || !q69 || !q70) {
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

    // ข้อที่ 71-80
    let q71 = document.querySelector('input[name="question71"]:checked');
    let q72 = document.querySelector('input[name="question72"]:checked');
    let q73 = document.querySelector('input[name="question73"]:checked');
    let q74 = document.querySelector('input[name="question74"]:checked');
    let q75 = document.querySelector('input[name="question75"]:checked');
    let q76 = document.querySelector('input[name="question76"]:checked');
    let q77 = document.querySelector('input[name="question77"]:checked');
    let q78 = document.querySelector('input[name="question78"]:checked');
    let q79 = document.querySelector('input[name="question79"]:checked');
    let q80 = document.querySelector('input[name="question80"]:checked');
    
    // คำนวณคะแนน
    if (q71) {
        if (q71.value === "ชอบมาก") S_score += 1;
        else if (q71.value === "ชอบบางครั้ง") S_score += 1;
        else if (q71.value === "ไม่ชอบเท่าไหร่") N_score += 1;
        else if (q71.value === "ไม่ชอบเลย") N_score += 1;
    }

    if (q72) {
        if (q72.value === "ฉันต้องการข้อมูลที่ชัดเจนเป็นข้อเท็จจริงก่อนตัดสินใจ") S_score += 1;
        else if (q72.value === "ฉันมักจะใช้ข้อมูลที่มีอยู่ก่อน แต่ก็คิดถึงแนวทางใหม่ ๆ") S_score += 1;
        else if (q72.value === "ฉันมักคิดถึงอนาคตและจินตนาการความเป็นไปได้ต่าง ๆ") N_score += 1;
        else if (q72.value === "ฉันให้ความสำคัญกับแนวคิดใหม่ ๆ มากกว่าข้อมูลที่มีอยู่") N_score += 1;
    }

    if (q73) {
        if (q73.value === "มองที่ปัจจุบัน") S_score += 1;
        else if (q73.value === "สนใจสิ่งที่เป็นจริง") S_score += 1;
        else if (q73.value === "คิดถึงอนาคตอยู่บ่อยๆ") N_score += 1;
        else if (q73.value === "คิดถึงอนาคตบางครั้ง") N_score += 1;
    }

    if (q74) {
        if (q74.value === "ชอบงานที่มีกระบวนการชัดเจน") S_score += 1;
        else if (q74.value === "ชอบทำตามที่กำหนดไว้") S_score += 1;
        else if (q74.value === "ชอบงานที่สร้างสรรค์") N_score += 1;
        else if (q74.value === "ชอบงานที่สร้างสรรค์มาก") N_score += 1;
    }

    if (q75) {
        if (q75.value === "ชอบมาก") S_score += 1;
        else if (q75.value === "ชอบบางครั้ง") S_score += 1;
        else if (q75.value === "ชอบทำงานที่ไม่จำกัดกรอบ") N_score += 1;
        else if (q75.value === "ไม่สนใจผลลัพธ์ที่ชัดเจน") N_score += 1;
    }

    if (q76) {
        if (q76.value === "ชอบ") S_score += 1;
        else if (q76.value === "ชอบมาก") S_score += 1;
        else if (q76.value === "ไม่ชอบ") N_score += 1;
        else if (q76.value === "ชอบความยืดหยุ่น") N_score += 1;
    }

    if (q77) {
        if (q77.value === "สนใจปัจจุบันมากกว่า") S_score += 1;
        else if (q77.value === "สนใจปัจจุบันบางครั้ง") S_score += 1;
        else if (q77.value === "สนใจอนาคตบางครั้ง") N_score += 1;
        else if (q77.value === "ชอบจินตนาการอนาคต") N_score += 1;
    }

    if (q78) {
        if (q78.value === "มองหาวิธีที่ใช้งานได้ทันที") S_score += 1;
        else if (q78.value === "มองหาวิธีการที่ใช้ได้") S_score += 1;
        else if (q78.value === "มองหาแนวทางใหม่ๆ") N_score += 1;
        else if (q78.value === "คิดถึงสิ่งที่เป็นไปได้ในอนาคต") N_score += 1;
    }

    if (q79) {
        if (q79.value === "ชอบงานที่มีระเบียบ") S_score += 1;
        else if (q79.value === "ชอบงานที่มีขั้นตอนชัดเจน") S_score += 1;
        else if (q79.value === "ชอบงานที่ค่อนข้างใหม่") N_score += 1;
        else if (q79.value === "ชอบงานที่มีความสร้างสรรค์") N_score += 1;
    }

    if (q80) {
        if (q80.value === "ใช่ ประสบการณ์ที่ผ่านมามีความสำคัญในการตัดสินใจ") S_score += 1;
        else if (q80.value === "ใช่ แต่ก็คิดถึงทางเลือกใหม่ ที่อาจเกิดขึ้นด้วย") S_score += 1;
        else if (q80.value === "ฉันคิดถึงอนาคตและมองหาทางเลือกใหม่ๆ") N_score += 1;
        else if (q80.value === "ฉันมักจะไม่พึ่งพาประสบการณ์ที่ผ่านมา") N_score += 1;
    }
    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (!q71 || !q72 || !q73 || !q74 || !q75 || !q76 || !q77 || !q78 || !q79 || !q80) {
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

    // ข้อที่ 81-90
    let q81 = document.querySelector('input[name="question81"]:checked');
    let q82 = document.querySelector('input[name="question82"]:checked');
    let q83 = document.querySelector('input[name="question83"]:checked');
    let q84 = document.querySelector('input[name="question84"]:checked');
    let q85 = document.querySelector('input[name="question85"]:checked');
    let q86 = document.querySelector('input[name="question86"]:checked');
    let q87 = document.querySelector('input[name="question87"]:checked');
    let q88 = document.querySelector('input[name="question88"]:checked');
    let q89 = document.querySelector('input[name="question89"]:checked');
    let q90 = document.querySelector('input[name="question90"]:checked');
    

    // คำนวณคะแนน
    if (q81) {
        if (q81.value === "ให้ความสำคัญกับข้อเท็จจริงที่ชัดเจน") T_score += 1;
        else if (q81.value === "ให้ความสำคัญกับข้อเท็จจริง แต่คำนึงถึงความรู้สึกส่วนตัวด้วย") T_score += 1;
        else if (q81.value === "ตัดสินใจจากความรู้สึกและค่านิยมส่วนตัว") F_score += 1;
        else if (q81.value === "ตัดสินใจโดยคำนึงถึงความรู้สึกของผู้อื่น") F_score += 1;
    }

    if (q82) {
        if (q82.value === "ฉันมองหาทางออกที่มีเหตุผลและเป็นธรรมที่สุด แม้ว่าจะทำให้บางคนไม่พอใจ") T_score += 1;
        else if (q82.value === "คำนึงถึงเหตุผลหลัก ๆ แต่จะพยายามหาทางที่ดีที่สุดสำหรับทุกฝ่าย") T_score += 1;
        else if (q82.value === "พยายามหาทางออกที่ทำให้ทุกคนพอใจ แม้ว่าจะไม่เป็นทางเลือกที่ดีที่สุดในแง่เหตุผล") F_score += 1;
        else if (q82.value === "พยายามทำให้ทุกฝ่ายรู้สึกดีแม้ว่าจะต้องเสียผลประโยชน์บางอย่าง") F_score += 1;
    }

    if (q83) {
        if (q83.value === "ใช่ ข้อเท็จจริงเป็นสิ่งที่สำคัญที่สุดในการตัดสินใจ") T_score += 1;
        else if (q83.value === "ใช่ ข้อเท็จจริงสำคัญ แต่ก็ต้องคำนึงถึงความรู้สึกของผู้อื่นด้วย") T_score += 1;
        else if (q83.value === "ฉันให้ความสำคัญกับความรู้สึกของผู้อื่นมากกว่าข้อเท็จจริง") F_score += 1;
        else if (q83.value === "ฉันมักจะคำนึงถึงความรู้สึกของผู้อื่นมากที่สุด") F_score += 1;
    }

    if (q84) {
        if (q84.value === "ตัดสินใจจากเหตุผลและหลักฐานที่ชัดเจน") T_score += 1;
        else if (q84.value === "ตัดสินใจจากเหตุผลโดยไม่ทิ้งการคำนึงถึงความรู้สึก") T_score += 1;
        else if (q84.value === "ตัดสินใจจากความรู้สึกและคำนึงถึงความสัมพันธ์กับผู้อื่น") F_score += 1;
        else if (q84.value === "ตัดสินใจจากความรู้สึกโดยคำนึงถึงความสัมพันธ์ที่ดีที่สุด") F_score += 1;
    }

    if (q85) {
        if (q85.value === "เลือกวิธีที่สามารถแก้ปัญหาได้อย่างรวดเร็วและมีประสิทธิภาพ") T_score += 1;
        else if (q85.value === "เลือกวิธีที่สามารถแก้ปัญหาได้อย่างรวดเร็ว แต่ก็พิจารณาในรายละเอียดบ้าง") T_score += 1;
        else if (q85.value === "เลือกวิธีที่ใช้เวลาในการพิจารณาและให้ความสำคัญกับรายละเอียด") F_score += 1;
        else if (q85.value === "เลือกวิธีที่ใช้เวลาในการพิจารณา แต่เน้นให้ทุกคนรู้สึกดีและพอใจ") F_score += 1;
    }

    if (q86) {
        if (q86.value === "ชอบทำงานที่เน้นการวิเคราะห์และการแก้ปัญหา") T_score += 1;
        else if (q86.value === "ชอบทำงานที่ใช้เหตุผลและการวิเคราะห์ แต่ก็ให้ความสำคัญกับผู้อื่น") T_score += 1;
        else if (q86.value === "ชอบทำงานที่ช่วยให้ผู้อื่นรู้สึกดีและเข้าใจ") F_score += 1;
        else if (q86.value === "ชอบทำงานที่สามารถช่วยเหลือผู้อื่นและทำให้พวกเขารู้สึกดี") F_score += 1;
    }

    if (q87) {
        if (q87.value === "ฉันให้ความสำคัญกับข้อเท็จจริงและเหตุผลที่ชัดเจน") T_score += 1;
        else if (q87.value === "ฉันพิจารณาข้อเท็จจริงและการวิเคราะห์ก่อน แต่ไม่ทิ้งการคำนึงถึงผลกระทบ") T_score += 1;
        else if (q87.value === "ฉันให้ความสำคัญกับผลกระทบที่อาจเกิดขึ้นกับคนอื่นก่อน") F_score += 1;
        else if (q87.value === "ฉันให้ความสำคัญกับความรู้สึกของผู้อื่นมากกว่าข้อเท็จจริง") F_score += 1;
    }

    if (q88) {
        if (q88.value === "ฉันเชื่อว่าเลือกจากข้อเท็จจริงและการตรวจสอบ") T_score += 1;
        else if (q88.value === "ฉันเลือกจากข้อเท็จจริง แต่ก็ให้ความสำคัญกับความรู้สึกของทุกคน") T_score += 1;
        else if (q88.value === "ฉันเลือกจากการเห็นอกเห็นใจและคำนึงถึงผลกระทบต่อทุกคน") F_score += 1;
        else if (q88.value === "ฉันเลือกจากความรู้สึกและการคำนึงถึงทุกฝ่าย") F_score += 1;
    }

    if (q89) {
        if (q89.value === "เลือกทางเลือกที่มีประสิทธิภาพสูงสุด") T_score += 1;
        else if (q89.value === "เลือกทางเลือกที่มีประสิทธิภาพสูงสุด แต่ก็ให้ความสำคัญกับความพึงพอใจของผู้อื่น") T_score += 1;
        else if (q89.value === "เลือกทางเลือกที่ทำให้ทุกคนพึงพอใจ แม้ว่าจะไม่ดีที่สุด") F_score += 1;
        else if (q89.value === "เลือกทางเลือกที่ทำให้ทุกคนพอใจที่สุด") F_score += 1;
    }

    if (q90) {
        if (q90.value === "เน้นการตัดสินใจที่มีเหตุผลและหลักฐาน") T_score += 1;
        else if (q90.value === "เน้นการตัดสินใจที่มีเหตุผลแต่ให้ความสำคัญกับความสัมพันธ์") T_score += 1;
        else if (q90.value === "ให้ความสำคัญกับความเข้าใจและความสัมพันธ์มากกว่าการตัดสินใจ") F_score += 1;
        else if (q90.value === "ให้ความสำคัญกับความสัมพันธ์และความเข้าใจผู้อื่นเป็นหลัก") F_score += 1;
    }
    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (!q81 || !q82 || !q83 || !q84 || !q85 || !q86 || !q87 || !q88 || !q89 || !q90) {
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

    // ข้อที่ 91-100
    let q91 = document.querySelector('input[name="question91"]:checked');
    let q92 = document.querySelector('input[name="question92"]:checked');
    let q93 = document.querySelector('input[name="question93"]:checked');
    let q94 = document.querySelector('input[name="question94"]:checked');
    let q95 = document.querySelector('input[name="question95"]:checked');
    let q96 = document.querySelector('input[name="question96"]:checked');
    let q97 = document.querySelector('input[name="question97"]:checked');
    let q98 = document.querySelector('input[name="question98"]:checked');
    let q99 = document.querySelector('input[name="question99"]:checked');
    let q100 = document.querySelector('input[name="question100"]:checked');

    // คำนวณคะแนน
    if (q91) {
        if (q91.value === "วางแผนล่วงหน้าอย่างละเอียด") J_score += 1;
        else if (q91.value === "วางแผนบางอย่าง แต่ยังยืดหยุ่นได้") J_score += 1;
        else if (q91.value === "จัดการงานในระหว่างทำตามสถานการณ์") P_score += 1;
        else if (q91.value === "ไม่ต้องวางแผนอะไรเลยและทำตามที่มา") P_score += 1;
    }

    if (q92) {
        if (q92.value === "รู้สึกไม่ค่อยสบายใจและต้องการแผนที่ชัดเจน") J_score += 1;
        else if (q92.value === "รู้สึกไม่ค่อยสะดวกสบาย แต่ยอมรับได้หากมีเหตุผล") J_score += 1;
        else if (q92.value === "รู้สึกท้าทายและตื่นเต้นกับการเปลี่ยนแปลง") P_score += 1;
        else if (q92.value === "รู้สึกโอเคและปรับตัวได้ง่าย") P_score += 1;
    }

    if (q93) {
        if (q93.value === "ชอบทำงานที่มีขั้นตอนที่ชัดเจนและตามแผน") J_score += 1;
        else if (q93.value === "ชอบทำงานที่สามารถทำตามขั้นตอน แต่ยังยืดหยุ่นได้บ้าง") J_score += 1;
        else if (q93.value === "ชอบทำงานที่ปรับเปลี่ยนได้ตามสถานการณ์") P_score += 1;
        else if (q93.value === "ชอบทำงานที่ไม่ต้องมีขั้นตอนที่กำหนด") P_score += 1;
    }

    if (q94) {
        if (q94.value === "เริ่มต้นด้วยการวางแผนและเตรียมตัวล่วงหน้า") J_score += 1;
        else if (q94.value === "วางแผนบางอย่างและปรับตัวตามสถานการณ์") J_score += 1;
        else if (q94.value === "รอจนกว่าจะถึงเวลาที่ต้องทำจริงแล้วเริ่มงาน") P_score += 1;
        else if (q94.value === "ไม่ชอบการวางแผนเลยและทำตามสถานการณ์ไปเรื่อย") P_score += 1;
    }

    if (q95) {
        if (q95.value === "รู้สึกไม่สบายใจและต้องการกรอบเวลาและข้อกำหนดที่ชัดเจน") J_score += 1;
        else if (q95.value === "รู้สึกสบายใจบ้าง แต่ต้องการบางส่วนที่มีกรอบ") J_score += 1;
        else if (q95.value === "รู้สึกตื่นเต้นและสามารถทำงานได้โดยไม่ต้องมีข้อกำหนด") P_score += 1;
        else if (q95.value === "รู้สึกดีมากและทำงานตามสถานการณ์") P_score += 1;
    }

    if (q96) {
        if (q96.value === "ชอบทำงานให้เสร็จเร็วและตามแผน") J_score += 1;
        else if (q96.value === "ชอบทำงานที่ต้องทำให้เสร็จในกรอบเวลา") J_score += 1;
        else if (q96.value === "ชอบทำงานที่ยืดหยุ่นตามระยะเวลา") P_score += 1;
        else if (q96.value === "ชอบทำงานที่ไม่ต้องเร่งรีบและทำตามจังหวะของตัวเอง") P_score += 1;
    }

    if (q97) {
        if (q97.value === "ต้องการข้อมูลทุกอย่างและขั้นตอนที่ชัดเจน") J_score += 1;
        else if (q97.value === "ต้องการแผนงานที่ค่อนข้างชัดเจน") J_score += 1;
        else if (q97.value === "ชอบทำงานที่มีความยืดหยุ่นและไม่ต้องการแผนที่แน่นอน") P_score += 1;
        else if (q97.value === "ต้องการทราบแค่สิ่งสำคัญแล้วทำตามสถานการณ์") P_score += 1;
    }

    if (q98) {
        if (q98.value === "จัดลำดับความสำคัญและทำตามลำดับ") J_score += 1;
        else if (q98.value === "ทำตามลำดับความสำคัญและวางแผนล่วงหน้า") J_score += 1;
        else if (q98.value === "ทำงานตามที่สะดวกในขณะนั้น") P_score += 1;
        else if (q98.value === "ทำงานตามความรู้สึกในขณะนั้น") P_score += 1;
    }

    if (q99) {
        if (q99.value === "เตรียมตัวล่วงหน้าอย่างละเอียด") J_score += 1;
        else if (q99.value === "เตรียมตัวบ้าง แต่ยืดหยุ่นได้") J_score += 1;
        else if (q99.value === "ชอบทำตามสถานการณ์และปรับตัว") P_score += 1;
        else if (q99.value === "ชอบทำตามความรู้สึกในช่วงเวลานั้น") P_score += 1;
    }

    if (q100) {
        if (q100.value === "รู้สึกเครียดและอยากให้กลับไปตามแผน") J_score += 1;
        else if (q100.value === "รู้สึกไม่ค่อยพอใจแต่ยังพยายามแก้ไขตามแผนที่กำหนด") J_score += 1;
        else if (q100.value === "รู้สึกไม่เป็นไรและจะหาวิธีปรับตัวไปตามสถานการณ์") P_score += 1;
        else if (q100.value === "รู้สึกว่าสามารถยืดหยุ่นและปรับตัวไปตามเวลาที่มี") P_score += 1;
    }
    // ตรวจสอบว่าตอบครบทุกคำถามหรือไม่
    if (!q91 || !q92 || !q93 || !q94 || !q95 || !q96 || !q97 || !q98 || !q99 || !q100) {
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

