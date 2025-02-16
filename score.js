function calculateScore_R() {
    const form = document.getElementById("quizForm");

    let totalScore_R = 0;
    const selectedAnswers = document.querySelectorAll("input[type='radio']:checked");

    selectedAnswers.forEach((answer) => {
        totalScore_R += parseInt(answer.nextElementSibling.getAttribute("data-number"));
    });

    // เก็บคะแนนลงใน Local Storage หรือในตัวแปรเพื่อใช้ในการแนะนำคณะ
    localStorage.setItem('totalScore_R', totalScore_R);
}

function calculateScore_I() {
    const form = document.getElementById("quizForm");

    let totalScore_I = 0;
    const selectedAnswers = document.querySelectorAll("input[type='radio']:checked");

    selectedAnswers.forEach((answer) => {
        totalScore_I += parseInt(answer.nextElementSibling.getAttribute("data-number"));
    });
    // เก็บคะแนนลงใน Local Storage หรือในตัวแปรเพื่อใช้ในการแนะนำคณะ
    localStorage.setItem('totalScore_I', totalScore_I);
}

function calculateScore_A() {
    const form = document.getElementById("quizForm");

    let totalScore_A = 0;
    const selectedAnswers = document.querySelectorAll("input[type='radio']:checked");

    selectedAnswers.forEach((answer) => {
        totalScore_A += parseInt(answer.nextElementSibling.getAttribute("data-number"));
    });
    // เก็บคะแนนลงใน Local Storage หรือในตัวแปรเพื่อใช้ในการแนะนำคณะ
    localStorage.setItem('totalScore_A', totalScore_A);
}

function calculateScore_S() {
    const form = document.getElementById("quizForm");

    let totalScore_S = 0;
    const selectedAnswers = document.querySelectorAll("input[type='radio']:checked");

    selectedAnswers.forEach((answer) => {
        totalScore_S += parseInt(answer.nextElementSibling.getAttribute("data-number"));
    });
    // เก็บคะแนนลงใน Local Storage หรือในตัวแปรเพื่อใช้ในการแนะนำคณะ
    localStorage.setItem('totalScore_S', totalScore_S);
}

function calculateScore_E() {
    const form = document.getElementById("quizForm");

    let totalScore_E = 0;
    const selectedAnswers = document.querySelectorAll("input[type='radio']:checked");

    selectedAnswers.forEach((answer) => {
        totalScore_E += parseInt(answer.nextElementSibling.getAttribute("data-number"));
    });
    // เก็บคะแนนลงใน Local Storage หรือในตัวแปรเพื่อใช้ในการแนะนำคณะ
    localStorage.setItem('totalScore_E', totalScore_E);
}

function calculateScore_C() {
    const form = document.getElementById("quizForm");

    let totalScore_C = 0;
    const selectedAnswers = document.querySelectorAll("input[type='radio']:checked");

    selectedAnswers.forEach((answer) => {
        totalScore_C += parseInt(answer.nextElementSibling.getAttribute("data-number"));
    });
    // เก็บคะแนนลงใน Local Storage หรือในตัวแปรเพื่อใช้ในการแนะนำคณะ
    localStorage.setItem('totalScore_C', totalScore_C);
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// คำนวณคะแนนของ E/I
function calculateScore_EI() {
    let E_score = 0;
    let I_score = 0;

    // ข้อที่ 25-28
    let q25 = document.querySelector('input[name="question25"]:checked');
    if (q25) {
        if (q25.value === "ชอบ") E_score += 1;
        else if (q25.value === "ชอบบางครั้ง") E_score += 1;
        else if (q25.value === "ชอบอยู่คนเดียว") I_score += 1;
        else if (q25.value === "ชอบเงียบ") I_score += 1;
    }

    let q26 = document.querySelector('input[name="question26"]:checked');
    if (q26) {
        if (q26.value === "รู้สึกพลังเต็มที่") E_score += 1;
        else if (q26.value === "รู้สึกดี") E_score += 1;
        else if (q26.value === "รู้สึกดีกว่าเมื่ออยู่คนเดียว") I_score += 1;
        else if (q26.value === "รู้สึกเหนื่อย") I_score += 1;
    }

    let q27 = document.querySelector('input[name="question27"]:checked');
    if (q27) {
        if (q27.value === "รู้สึกตื่นเต้นมากและชอบพบปะคนใหม่ๆเสมอ") E_score += 1;
        else if (q27.value === "ชอบพบปะคนใหม่ๆแต่ต้องใช้เวลาปรับตัว") E_score += 1;
        else if (q27.value === "รู้สึกโอเคแต่ไม่ค่อยชอบเริ่มบทสนทนา") I_score += 1;
        else if (q27.value === "รู้สึกอึดอัดและชอบอยู่กับคนที่คุ้นเคย") I_score += 1;
    }

    let q28 = document.querySelector('input[name="question28"]:checked');
    if (q28) {
        if (q28.value === "ไม่ค่อยสบายใจ") E_score += 1;
        else if (q28.value === "สบายใจบางครั้ง") E_score += 1;
        else if (q28.value === "สบายใจมาก") I_score += 1;
        else if (q28.value === "สบายใจที่สุด") I_score += 1;
    }

    // เก็บค่าไว้ในตัวแปร
    localStorage.setItem('E_score', E_score);
    localStorage.setItem('I_score', I_score);

    // คำนวณและแสดงผลลัพธ์
    if (E_score >= I_score) {
        alert("คุณเป็น Extraversion (E)!");
    } else {
        alert("คุณเป็น Introversion (I)!");
    }

}

// คำนวณคะแนนของ S/N
function calculateScore_SN() {
    let S_score = 0;
    let N_score = 0;

    // ข้อที่ 29-32
    let q29 = document.querySelector('input[name="question29"]:checked');
    if (q29) {
        if (q29.value === "ชอบมาก") S_score += 1;
        else if (q29.value === "ชอบบางครั้ง") S_score += 1;
        else if (q29.value === "ไม่ชอบเท่าไหร่") N_score += 1;
        else if (q29.value === "ไม่สนใจ") N_score += 1;
    }

    let q30 = document.querySelector('input[name="question30"]:checked');
    if (q30) {
        if (q30.value === "ฉันต้องการข้อมูลที่ชัดเจนและเป็นข้อเท็จจริงก่อนตัดสินใจ") S_score += 1;
        else if (q30.value === "ฉันมักจะใช้ข้อมูลที่มีอยู่ก่อน แต่ก็คิดถึงแนวทางใหม่ ๆ บ้าง") S_score += 1;
        else if (q30.value === "ฉันมักคิดถึงอนาคตและจินตนาการความเป็นไปได้ต่าง ๆ ก่อนตัดสินใจ") N_score += 1;
        else if (q30.value === "ฉันให้ความสำคัญกับแนวคิดใหม่ ๆ มากกว่าข้อมูลที่มีอยู่") N_score += 1;
    }

    let q31 = document.querySelector('input[name="question31"]:checked');
    if (q31) {
        if (q31.value === "มองที่ปัจจุบัน") S_score += 1;
        else if (q31.value === "สนใจสิ่งที่เป็นจริง") S_score += 1;
        else if (q31.value === "คิดบางครั้ง") N_score += 1;
        else if (q31.value === "คิดบ่อย") N_score += 1;
    }

    let q32 = document.querySelector('input[name="question32"]:checked');
    if (q32) {
        if (q32.value === "ชอบงานที่มีกระบวนการชัดเจน") S_score += 1;
        else if (q32.value === "ชอบทำตามที่กำหนดไว้") S_score += 1;
        else if (q32.value === "ชอบ") N_score += 1;
        else if (q32.value === "ชอบมาก") N_score += 1;
    }
    // เก็บค่าไว้ในตัวแปร
    localStorage.setItem('S_score', S_score);
    localStorage.setItem('N_score', N_score);

    if (S_score >= N_score) {
        alert("คุณเป็น  (S)!");
    } else {
        alert("คุณเป็น  (N)!");
    }
}

// คำนวณคะแนนของ T/F
function calculateScore_TF() {
    let T_score = 0;
    let F_score = 0;

    // ข้อที่ 33-36
    let q33 = document.querySelector('input[name="question33"]:checked');
    if (q33) {
        if (q33.value === "ใช่") T_score += 1;
        else if (q33.value === "ใช้เหตุผล") T_score += 1;
        else if (q33.value === "ใช้ความรู้สึก") F_score += 1;
        else if (q33.value === "ใช้ความรู้สึกบางครั้ง") F_score += 1;
    }

    let q34 = document.querySelector('input[name="question34"]:checked');
    if (q34) {
        if (q34.value === "ฉันมองหาทางเลือกที่มีเหตุผลแม้ว่าจะทำให้บางคนไม่พอใจ") T_score += 1;
        else if (q34.value === "ฉันให้ความสำคัญกับข้อเท็จจริงแต่ก็พยายามคิดถึงความรู้สึกของทุกฝ่าย") T_score += 1;
        else if (q34.value === "ฉันพยายามหาทางที่ทุกคนพอใจ แม้ว่าอาจไม่ใช่ทางเลือกที่ดีที่สุด") F_score += 1;
        else if (q34.value === "ฉันมักจะตัดสินใจโดยคำนึงถึงความรู้สึกของทุกคนก่อนเสมอ") F_score += 1;
    }

    let q35 = document.querySelector('input[name="question35"]:checked');
    if (q35) {
        if (q35.value === "ฉันให้ความสำคัญกับข้อเท็จจริงมากที่สุด") T_score += 1;
        else if (q35.value === "ฉันพิจารณาข้อเท็จจริงก่อน") T_score += 1;
        else if (q35.value === "ฉันพยายามรักษาความสัมพันธ์ไว้ก่อน") F_score += 1;
        else if (q35.value === "ฉันให้ความสำคัญกับความรู้สึกของผู้อื่นมากกว่าข้อเท็จจริงเสมอ") F_score += 1;
    }

    let q36 = document.querySelector('input[name="question36"]:checked');
    if (q36) {
        if (q36.value === "ใช้เหตุผล") T_score += 1;
        else if (q36.value === "ใช้เหตุผลบางครั้ง") T_score += 1;
        else if (q36.value === "ใช้ความรู้สึก") F_score += 1;
        else if (q36.value === "ขึ้นอยู่กับสถานการณ์") F_score += 1;
    }

    // เก็บค่าไว้ในตัวแปร
    localStorage.setItem('T_score', T_score);
    localStorage.setItem('F_score', F_score);

    if (T_score >= F_score) {
        alert("คุณเป็น  (T)!");
    } else {
        alert("คุณเป็น  (F)!");
    }
}

// คำนวณคะแนนของ J/P
function calculateScore_JP() {
    let J_score = 0;
    let P_score = 0;

    // ข้อที่ 37-40
    let q37 = document.querySelector('input[name="question37"]:checked');
    if (q37) {
        if (q37.value === "ชอบ") J_score += 1;
        else if (q37.value === "ชอบมาก") J_score += 1;
        else if (q37.value === "ชอบกฎระเบียบที่ยืดหยุ่น") P_score += 1;
        else if (q37.value === "ชอบไม่มีกฎระเบียบ") P_score += 1;
    }

    let q38 = document.querySelector('input[name="question38"]:checked');
    if (q38) {
        if (q38.value === "ชอบ") J_score += 1;
        else if (q38.value === "ชอบมาก") J_score += 1;
        else if (q38.value === "ชอบงานที่ยืดหยุ่น") P_score += 1;
        else if (q38.value === "ชอบงานที่ไม่ต้องวางแผน") P_score += 1;
    }

    let q39 = document.querySelector('input[name="question39"]:checked');
    if (q39) {
        if (q39.value === "ใช่") J_score += 1;
        else if (q39.value === "รู้สึกดีมาก") J_score += 1;
        else if (q39.value === "ชอบแบบไม่มีแบบแผน") P_score += 1;
        else if (q39.value === "ไม่ชอบวางแผนเลย") P_score += 1;
    }

    let q40 = document.querySelector('input[name="question40"]:checked');
    if (q40) {
        if (q40.value === "ฉันไม่ค่อยกังวลเรื่องแผนและชอบปรับไปตามสถานการณ์") P_score += 1;
        else if (q40.value === "ฉันรู้สึกอึดอัดเมื่อถูกจำกัดด้วยแผนที่ตายตัวและต้องการอิสระมากกว่า") P_score += 1;
        else if (q40.value === "ฉันรู้สึกเครียดและอึดอัดมากเมื่อไม่มีแผนที่แน่นอน") J_score += 1;
        else if (q40.value === "ฉันชอบมีแผนที่แน่นอนแต่ก็สามารถปรับตัวได้บ้าง") J_score += 1;
    }

    // เก็บค่าไว้ในตัวแปร
    localStorage.setItem('J_score', J_score);
    localStorage.setItem('P_score', P_score);
    

    if (J_score >= P_score) {
        alert("คุณเป็น  (๋J)!");
    } else {
        alert("คุณเป็น  (P)!");
    }
}
// ---------------------------------------------------------------------------------------------------------------------------------
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
    
    // แสดงผลลัพธ์
    alert("คุณเป็น " + resultMBTI + "!");
}


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
        { name: "คณะเทคโนโลยีการเกษตร", score: (riasecScores.R + riasecScores.I + riasecScores.C), mbti: ["ISTJ", "ISFJ", "ESTP", "ENTJ"] },
        { name: "คณะเทคโนโลยีคหกรรมศาสตร์", score: (riasecScores.R + riasecScores.A + riasecScores.C), mbti: ["ESFJ", "ISFJ", "ESTJ"] },
        { name: "คณะเทคโนโลยีสื่อสารมวลชน", score: (riasecScores.A + riasecScores.E + riasecScores.S), mbti: ["ENFP", "ESFP", "INFJ", "ENTJ"] },
        { name: "คณะการแพทย์บูรณาการ", score: (riasecScores.I + riasecScores.S + riasecScores.C), mbti: ["INFJ", "ENFJ", "ISFJ", "ISTJ"] },
        { name: "คณะครุศาสตร์อุตสาหกรรม", score: (riasecScores.R + riasecScores.S + riasecScores.E), mbti: ["ESTJ", "ESFJ", "ISTP", "ENTJ"] },
        { name: "คณะบริหารธุรกิจ", score: (riasecScores.E + riasecScores.C + riasecScores.S), mbti: ["ENTJ", "ESTP", "ESFP", "ISTJ"] },
        { name: "คณะพยาบาลศาสตร์", score: (riasecScores.S + riasecScores.C + riasecScores.I), mbti: ["ESFJ", "ISFJ", "INFJ", "ENFJ"] },
        { name: "คณะวิทยาศาสตร์และเทคโนโลยี", score: (riasecScores.I + riasecScores.R + riasecScores.C), mbti: ["INTJ", "ISTJ", "INTP", "ISTP"] },
        { name: "คณะวิศวกรรมศาสตร์", score: (riasecScores.R + riasecScores.I + riasecScores.C), mbti: ["ISTP", "INTJ", "ESTJ", "ENTJ"] },
        { name: "คณะศิลปกรรมศาสตร์", score: (riasecScores.A + riasecScores.R + riasecScores.E), mbti: ["INFP", "ENFP", "ISFP", "ESFP"] },
        { name: "คณะศิลปศาสตร์", score: (riasecScores.A + riasecScores.S + riasecScores.I), mbti: ["INFJ", "ENFP", "INFP", "ISFP"] },
        { name: "คณะสถาปัตยกรรมศาสตร์", score: (riasecScores.A + riasecScores.R + riasecScores.I), mbti: ["INTJ", "INTP", "ISFP", "ENFP"] }
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
        alert(result);
    } else {
        alert("ไม่พบคณะที่ตรงกับผลลัพธ์ของคุณ");
    }
}



// ฟังก์ชันที่ทำงานเมื่อกดปุ่ม save
function saveResults() {
    calculateScore_JP();
    calculateMBTI();
    recommendFaculty();

}
