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
    $question21 = $_POST['question21'] ?? null;
    $question22 = $_POST['question22'] ?? null;
    $question23 = $_POST['question23'] ?? null;
    $question24 = $_POST['question24'] ?? null;
    $question25 = $_POST['question25'] ?? null;
    $question26 = $_POST['question26'] ?? null;
    $question27 = $_POST['question27'] ?? null;
    $question28 = $_POST['question28'] ?? null;
    $question29 = $_POST['question29'] ?? null;
    $question30 = $_POST['question30'] ?? null;

    // ตรวจสอบว่าไม่มีคำถามไหนถูกปล่อยว่าง
    if ($question21 && $question22 && $question23 && $question24 && $question25 && $question26 && $question27 && $question28 && $question29 && $question30)
        {try {
            // เตรียมคำสั่ง SQL เพื่อเพิ่มข้อมูล
            $sql = "INSERT INTO answers (question21, question22, question23, question24, question25, question26, question27, question28, question29, question30)
                VALUES 
                (:question21, :question22, :question23, :question24, :question25, :question26, :question27, :question28, :question29, :question30)";
            $stmt = $pdo->prepare($sql);

            // ผูกค่ากับคำสั่ง SQL
            $stmt->bindParam(':question21', $question21);
            $stmt->bindParam(':question22', $question22);
            $stmt->bindParam(':question23', $question23);
            $stmt->bindParam(':question24', $question24);
            $stmt->bindParam(':question25', $question25);
            $stmt->bindParam(':question26', $question26);
            $stmt->bindParam(':question27', $question27);
            $stmt->bindParam(':question28', $question28);
            $stmt->bindParam(':question29', $question29);
            $stmt->bindParam(':question30', $question30);

            // รันคำสั่ง SQL
            $stmt->execute();

            echo '<script>
            alert("บันทึกคำตอบเรียบร้อย");
            window.location.href = "exam4.html";
        </script>';
        } catch (PDOException $e) {
            echo "เกิดข้อผิดพลาด: " . $e->getMessage();
        }
    } else {
        echo '<script>
            alert("กรุณาตอบคำถามให้ครบทุกข้อ");
            window.location.href = "exam3.html";
        </script>';
    }
} else {
    echo "ไม่ได้รับข้อมูลจากฟอร์ม!";
}
?>
