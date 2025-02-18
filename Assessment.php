<?php
header('Content-Type: application/json'); // กำหนดให้ส่ง JSON กลับไป
session_start();

// เชื่อมต่อฐานข้อมูล
$conn = new mysqli('localhost', 'root', '', 'project_db');

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "เชื่อมต่อฐานข้อมูลล้มเหลว"]);
    exit();
}

// รับค่าจากฟอร์ม (ผ่าน POST)
$assessment1 = $_POST['assessment1'] ?? null;
$assessment2 = $_POST['assessment2'] ?? null;
$assessment3 = $_POST['assessment3'] ?? null;

// ตรวจสอบว่าไม่มีคำถามไหนถูกปล่อยว่าง
if ($assessment1 && $assessment2 && $assessment3) {
    try {
        // เตรียมคำสั่ง SQL เพื่อเพิ่มข้อมูล
        $sql = "INSERT INTO assessment (assessment1, assessment2, assessment3) VALUES (?, ?, ?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $assessment1, $assessment2, $assessment3);
        $stmt->execute();

        // ส่งข้อมูลกลับไปแสดงแจ้งเตือนใน SweetAlert2
        echo json_encode([
            "status" => "success",
            "message" => "บันทึกคำตอบสำเร็จ"
        ]);
    } catch (Exception $e) {
        echo json_encode([
            "status" => "error",
            "message" => "เกิดข้อผิดพลาด: " . $e->getMessage()
        ]);
    }
} else {
    // ถ้าตอบคำถามไม่ครบ
    echo json_encode([
        "status" => "error",
        "message" => "กรุณาตอบคำถามให้ครบทุกข้อ"
    ]);
}

// ปิดการเชื่อมต่อ
$stmt->close();
$conn->close();
?>
