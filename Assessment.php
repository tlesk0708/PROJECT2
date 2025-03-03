<?php
header('Content-Type: application/json');
session_start();

// เชื่อมต่อฐานข้อมูล
$conn = new mysqli('localhost', 'root', '', 'project_db');

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "เชื่อมต่อฐานข้อมูลล้มเหลว"]);
    exit();
}

// ตรวจสอบค่าที่รับมาจาก POST
$username = $_POST['username'] ?? null;

// ตรวจสอบการรับค่า username
if (!$username) {
    echo json_encode(["status" => "error", "message" => "ข้อมูลผู้ใช้ไม่ถูกต้อง"]);
    exit();
}

// ดึงข้อมูลจากฟอร์ม
$assessment1 = $_POST['assessment1'] ?? null;
$assessment2 = $_POST['assessment2'] ?? null;
$assessment3 = $_POST['assessment3'] ?? null;

// ตรวจสอบว่าไม่มีคำถามไหนถูกปล่อยว่าง
if ($assessment1 && $assessment2 && $assessment3) {
    try {
        // เตรียมคำสั่ง SQL เพื่อเพิ่มข้อมูล
        $sql = "INSERT INTO assessment (username, assessment1, assessment2, assessment3) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $username, $assessment1, $assessment2, $assessment3);
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
    echo json_encode([
        "status" => "error",
        "message" => "กรุณาตอบคำถามให้ครบทุกข้อ"
    ]);
}

// ปิดการเชื่อมต่อ
$stmt->close();
$conn->close();
?>
