<?php
// รับค่าจากฟอร์ม
$username = $_POST['username'];
$password = $_POST['password'];

// ตรวจสอบว่ามีการกรอกข้อมูลครบถ้วนหรือไม่
if (empty($username) || empty($password)) {
    echo '<script>
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        window.location.href = "login.html";
    </script>';
    exit();
}

// เชื่อมต่อฐานข้อมูล
$conn = new mysqli('localhost', 'root', '', 'project_db');

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}

// ตรวจสอบว่า username มีอยู่ในฐานข้อมูลหรือไม่
$stmt = $conn->prepare("SELECT * FROM user WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $data = $result->fetch_assoc();
    // ตรวจสอบรหัสผ่าน (เก็บแบบ plain text)
    if ($password === $data['password']) {
        echo '<script>
            alert("เข้าสู่ระบบสำเร็จ");
            window.location.href = "dashboard.html";
        </script>';
    } else {
        // รหัสผ่านไม่ถูกต้อง
        echo '<script>
            alert("รหัสผ่านไม่ถูกต้อง");
            window.location.href = "login.html";
        </script>';
    }
} else {
    // ชื่อผู้ใช้ไม่ถูกต้อง
    echo '<script>
        alert("ชื่อผู้ใช้ไม่ถูกต้อง");
        window.location.href = "login.html";
    </script>';
}

// ปิดการเชื่อมต่อ
$stmt->close();
$conn->close();
?>
