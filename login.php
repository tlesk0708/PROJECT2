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

// รับค่าจากฟอร์ม (ผ่าน AJAX)
$username = trim($_POST['username']);
$password = trim($_POST['password']);

// ตรวจสอบว่ามีการกรอกข้อมูลครบถ้วนหรือไม่
if (empty($username) || empty($password)) {
    echo json_encode(["status" => "error", "message" => "กรุณากรอกชื่อผู้ใช้และรหัสผ่าน"]);
    exit();
}

// ตรวจสอบว่า username มีอยู่ในฐานข้อมูลหรือไม่
$stmt = $conn->prepare("SELECT * FROM user WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $data = $result->fetch_assoc();

    // ตรวจสอบรหัสผ่าน (กรณีเก็บรหัสเป็น plain text)
    if ($password === $data['password']) {
        $_SESSION['username'] = $username; // ตั้งค่า session
        echo json_encode(["status" => "success", "message" => "เข้าสู่ระบบสำเร็จ"]);
    } else {
        echo json_encode(["status" => "error", "message" => "รหัสผ่านไม่ถูกต้อง"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "ชื่อผู้ใช้ไม่ถูกต้อง"]);
}

// ปิดการเชื่อมต่อ
$stmt->close();
$conn->close();
?>
