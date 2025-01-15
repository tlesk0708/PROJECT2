<?php
// รับข้อมูลจากฟอร์ม
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$age = $_POST['age'];
$username = $_POST['username'];
$password = $_POST['password'];

// ตรวจสอบว่ามีข้อมูลครบถ้วนหรือไม่
if (empty($firstname) || empty($lastname) || empty($age) || empty($username) || empty($password)) {
    echo '<script>
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        window.location.href = "register.html";
    </script>';
    exit();
}

// เชื่อมต่อฐานข้อมูล
$conn = new mysqli('localhost', 'root', '', 'project_db');

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}

// ตรวจสอบว่า username มีอยู่ในฐานข้อมูลแล้วหรือไม่
$stmt = $conn->prepare("SELECT * FROM user WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // กรณี username มีอยู่แล้ว
    echo '<script>
        alert("Username นี้มีอยู่ในระบบแล้ว กรุณาเลือก Username ใหม่");
        window.location.href = "register.html";
    </script>';
    exit();
}

// หาก username ไม่มีในระบบ ให้เพิ่มข้อมูลลงฐานข้อมูล
$stmt = $conn->prepare("INSERT INTO user (firstname, lastname, age, username, password) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssiss", $firstname, $lastname, $age, $username, $password); // เก็บรหัสผ่านแบบ Plain Text

if ($stmt->execute()) {
    echo '<script>
        alert("สมัครสมาชิกสำเร็จ");
        window.location.href = "login.html";
    </script>';
} else {
    echo '<script>
        alert("เกิดข้อผิดพลาดในการสมัครสมาชิก กรุณาลองใหม่อีกครั้ง");
        window.location.href = "register.html";
    </script>';
}

// ปิดการเชื่อมต่อ
$stmt->close();
$conn->close();
?>
