let facultyList = [
    { name: "คณะเทคโนโลยีการเกษตร", score: (riasecScores.R + riasecScores.I + riasecScores.S), mbti: ["ENFP","ISTP"], details: "เหมาะกับคนชอบธรรมชาติ สนใจการพัฒนาเกษตรกรรม การจัดการและส่งเสริมทางการเกษตร" },
    { name: "คณะเทคโนโลยีคหกรรมศาสตร์", score: (riasecScores.R + riasecScores.S + riasecScores.A), mbti: ["INFP", "ISFJ"], details: "เหมาะกับคนชอบงานบ้าน อาหาร แฟชั่นเครื่องแต่งกาย และนักโภชนาการและนวัตกรรมด้านอาหาร" },
    { name: "คณะเทคโนโลยีสื่อสารมวลชน", score: (riasecScores.A + riasecScores.S + riasecScores.E), mbti: ["ISFP", "ENFP", "ESFP"], details: "เหมาะกับคนที่ชอบการสื่อสาร การเล่าเรื่อง การผลิตสื่อทั้งแบบดั้งเดิมและดิจิทัล" },
    { name: "คณะการแพทย์บูรณาการ", score: (riasecScores.I + riasecScores.S + riasecScores.E), mbti: ["ISFJ", "INFJ","ISTJ"], details: "เหมาะกับคนที่สนใจศาสตร์ทางการแพทย์ สุขภาพ และการแพทย์ประยุกต์" },
    { name: "คณะครุศาสตร์อุตสาหกรรม", score: (riasecScores.R + riasecScores.S + riasecScores.E), mbti: ["ISFJ", "ENFJ", "ESTJ"], details: "เหมาะกับคนที่ชอบงานสอน ควบคู่กับนักวิชาการในด้านเทคโนโลยีและนวัตกรรมอุตสาหกรรมต่างๆ" },
    { name: "คณะบริหารธุรกิจ", score: (riasecScores.E + riasecScores.C + riasecScores.I), mbti: ["ENTJ", "ENTP", "ENFP", "ESTJ","ESTP","INTJ","INFJ","ISTJ"], details: "เหมาะกับคนที่ชอบการจัดการ วางแผนธุรกิจ หรือทำงานด้านการตลาด การเงิน" },
    { name: "คณะพยาบาลศาสตร์", score: (riasecScores.S + riasecScores.C + riasecScores.I), mbti: ["ESFJ", "ISTJ", "ISFJ"], details: "เหมาะกับคนที่มีความเมตตา ต้องการดูแลช่วยเหลือผู้อื่น และทำงานอย่างเป็นระบบ" },
    { name: "คณะวิทยาศาสตร์และเทคโนโลยี", score: (riasecScores.R + riasecScores.I + riasecScores.C), mbti: ["INTP", "ISTP"], details: "เหมาะกับคนที่ชอบการวิเคราะห์ ค้นคว้า คิดเชิงตรรกะ และแก้ปัญหาเชิงวิทยาศาสตร์" },
    { name: "คณะวิศวกรรมศาสตร์", score: (riasecScores.R + riasecScores.I + riasecScores.E), mbti: ["ENTP", "INTJ", "ISTP"], details: "เหมาะกับคนที่ชอบงานเทคนิค คำนวณ ระบบเครื่องจักร และการออกแบบโครงสร้าง" },
    { name: "คณะศิลปกรรมศาสตร์", score: (riasecScores.A + riasecScores.R + riasecScores.E), mbti: ["ESTP", "ESFP", "INFP", "ISFP"], details: "เหมาะกับคนที่มีความคิดสร้างสรรค์ ชอบการออกแบบ ศิลปะ ดนตรี หรือการแสดง" },
    { name: "คณะศิลปศาสตร์", score: (riasecScores.A + riasecScores.S + riasecScores.E), mbti: ["ESFJ", "ENTJ", "ENFJ"], details: "เหมาะกับคนที่สนใจด้านภาษา วรรณกรรม จิตวิทยา หรือปรัชญา" },
    { name: "คณะสถาปัตยกรรมศาสตร์", score: (riasecScores.A + riasecScores.R + riasecScores.E), mbti: ["INTP", "INFP"], details: "เหมาะกับคนที่สนใจการออกแบบเชิงสร้างสรรค์ และมีทักษะเชิงเทคนิคด้านโครงสร้าง" }
];