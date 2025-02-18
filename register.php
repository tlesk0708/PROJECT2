<?php
header('Content-Type: application/json'); // กำหนดให้ส่ง JSON กลับไป

// รับข้อมูลจากฟอร์ม
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$age = $_POST['age'];
$username = $_POST['username'];
$password = $_POST['password'];

// ตรวจสอบว่ามีข้อมูลครบถ้วนหรือไม่
if (empty($firstname) || empty($lastname) || empty($age) || empty($username) || empty($password)) {
    echo json_encode(["status" => "error", "message" => "กรุณากรอกข้อมูลให้ครบถ้วน"]);
    exit();
}

// ตรวจสอบรหัสผ่าน (ต้องมีตัวอักษร 4 ตัวและตัวเลข 4 ตัว)
$passwordPattern = "/^(?=(.*[a-zA-Z]){4})(?=(.*\d){4}).{8,}$/"; // ต้องมีตัวอักษร 4 ตัว และตัวเลข 4 ตัว
if (!preg_match($passwordPattern, $password)) {
    echo json_encode(["status" => "error", "message" => "รหัสผ่านต้องมีตัวอักษรอย่างน้อย 4 ตัวและตัวเลขอย่างน้อย 4 ตัว"]);
    exit();
}

// เชื่อมต่อฐานข้อมูล
$conn = new mysqli('localhost', 'root', '', 'project_db');

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "เชื่อมต่อฐานข้อมูลล้มเหลว"]);
    exit();
}

// ตรวจสอบว่า username มีอยู่ในฐานข้อมูลแล้วหรือไม่
$stmt = $conn->prepare("SELECT * FROM user WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // กรณี username มีอยู่แล้ว
    echo json_encode(["status" => "error", "message" => "Username นี้มีอยู่ในระบบแล้ว กรุณาเลือก Username ใหม่"]);
    exit();
}

// หาก username ไม่มีในระบบ ให้เพิ่มข้อมูลลงฐานข้อมูล
$stmt = $conn->prepare("INSERT INTO user (firstname, lastname, age, username, password) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssiss", $firstname, $lastname, $age, $username, $password); // เก็บรหัสผ่านแบบ Plain Text

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "สมัครสมาชิกสำเร็จ"]);
} else {
    echo json_encode(["status" => "error", "message" => "เกิดข้อผิดพลาดในการสมัครสมาชิก กรุณาลองใหม่อีกครั้ง"]);
}

// ปิดการเชื่อมต่อ
$stmt->close();
$conn->close();
?>
