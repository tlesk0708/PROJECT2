<?php
// ตั้งค่าการเชื่อมต่อฐานข้อมูล
$host = 'localhost';
$db = 'project_db'; // ชื่อฐานข้อมูล
$user = 'root'; // ชื่อผู้ใช้ฐานข้อมูล
$pass = ''; // รหัสผ่านฐานข้อมูล (กรณี XAMPP ว่างไว้)

// เชื่อมต่อฐานข้อมูล
try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("ไม่สามารถเชื่อมต่อกับฐานข้อมูล: " . $e->getMessage());
}

// ตรวจสอบการส่งข้อมูลจากฟอร์ม
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // รับค่าจากฟอร์ม
    $assessment1 = $_POST['assessment1'] ?? null;
    $assessment2 = $_POST['assessment2'] ?? null;
    $assessment3 = $_POST['assessment3'] ?? null;

    // ตรวจสอบว่าไม่มีคำถามไหนถูกปล่อยว่าง
    if ($assessment1 && $assessment2 && $assessment3) {
        try {
            // เตรียมคำสั่ง SQL เพื่อเพิ่มข้อมูล
            $sql = "INSERT INTO assessment (assessment1, assessment2, assessment3) VALUES (:assessment1, :assessment2, :assessment3)";

            $stmt = $pdo->prepare($sql);

            // ผูกค่ากับคำสั่ง SQL
            $stmt->bindParam(':assessment1', $assessment1);
            $stmt->bindParam(':assessment2', $assessment2);
            $stmt->bindParam(':assessment3', $assessment3);

            // รันคำสั่ง SQL
            $stmt->execute();

            // แจ้งเตือนเมื่อบันทึกข้อมูลสำเร็จ
            echo '<script>
                alert("บันทึกคำตอบเรียบร้อย");
                window.location.href = "dashboard.html"; // เปลี่ยนเป็นหน้าที่ต้องการหลังบันทึก
            </script>';
        } catch (PDOException $e) {
            echo "เกิดข้อผิดพลาด: " . $e->getMessage();
        }
    } else {
        // ถ้าตอบคำถามไม่ครบ
        echo '<script>
            alert("กรุณาตอบคำถามให้ครบทุกข้อ");
            window.location.href = "Assessment.html"; // กลับไปที่หน้าแบบประเมิน
        </script>';
    }
} else {
    echo "ไม่ได้รับข้อมูลจากฟอร์ม!";
}
?>
