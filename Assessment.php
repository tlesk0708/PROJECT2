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

// ตรวจสอบว่าข้อมูลถูกส่งมาจากฟอร์มหรือไม่
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // รับค่าจากฟอร์ม
    $question1 = $_POST['assessment1'] ?? null;
    $question2 = $_POST['assessment2'] ?? null;
    $question3 = $_POST['assessment3'] ?? null;
    

    // ตรวจสอบว่าไม่มีคำถามไหนถูกปล่อยว่าง
    if ($assessment1 && $assessment2 && $assessment3)
        {try {
            // เตรียมคำสั่ง SQL เพื่อเพิ่มข้อมูล
            $sql = "INSERT INTO assessment (assessment1, assessment2, assessment3)
                VALUES 
                (:assessment1, :assessment2, :assessment3)";
            $stmt = $pdo->prepare($sql);

            // ผูกค่ากับคำสั่ง SQL
            $stmt->bindParam(':assessment1', $assessment1);
            $stmt->bindParam(':assessment2', $assessment2);
            $stmt->bindParam(':assessment3', $assessment3);

            // รันคำสั่ง SQL
            $stmt->execute();

            echo '<script>
            alert("บันทึกคำตอบเรียบร้อย");
            window.location.href = "dashboard.html";
        </script>';
        } catch (PDOException $e) {
            echo "เกิดข้อผิดพลาด: " . $e->getMessage();
        }
    } else {
        echo '<script>
            alert("กรุณาตอบคำถามให้ครบทุกข้อ");
            window.location.href = "Assessment.html";
        </script>';
    }
} else {
    echo "ไม่ได้รับข้อมูลจากฟอร์ม!";
}
?>
