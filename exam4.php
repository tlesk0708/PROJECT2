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
    $question31 = $_POST['question31'] ?? null;
    $question32 = $_POST['question32'] ?? null;
    $question33 = $_POST['question33'] ?? null;
    $question34 = $_POST['question34'] ?? null;
    $question35 = $_POST['question35'] ?? null;
    $question36 = $_POST['question36'] ?? null;
    $question37 = $_POST['question37'] ?? null;
    $question38 = $_POST['question38'] ?? null;
    $question39 = $_POST['question39'] ?? null;
    $question40 = $_POST['question40'] ?? null;

    // ตรวจสอบว่าไม่มีคำถามไหนถูกปล่อยว่าง
    if ($question31 && $question32 && $question33 && $question34 && $question35 && $question36 && $question37 && $question38 && $question39 && $question40)
        {try {
            // เตรียมคำสั่ง SQL เพื่อเพิ่มข้อมูล
            $sql = "INSERT INTO answers (question31, question32, question33, question34, question35, question36, question37, question38, question39, question40)
                VALUES 
                (:question31, :question32, :question33, :question34, :question35, :question36, :question37, :question38, :question39, :question40)";
            $stmt = $pdo->prepare($sql);

            // ผูกค่ากับคำสั่ง SQL
            $stmt->bindParam(':question31', $question31);
            $stmt->bindParam(':question32', $question32);
            $stmt->bindParam(':question33', $question33);
            $stmt->bindParam(':question34', $question34);
            $stmt->bindParam(':question35', $question35);
            $stmt->bindParam(':question36', $question36);
            $stmt->bindParam(':question37', $question37);
            $stmt->bindParam(':question38', $question38);
            $stmt->bindParam(':question39', $question39);
            $stmt->bindParam(':question40', $question40);

            // รันคำสั่ง SQL
            $stmt->execute();

            echo '<script>
            alert("บันทึกคำตอบเรียบร้อย");
            window.location.href = "result.html";
        </script>';
        } catch (PDOException $e) {
            echo "เกิดข้อผิดพลาด: " . $e->getMessage();
        }
    } else {
        echo '<script>
            alert("กรุณาตอบคำถามให้ครบทุกข้อ");
            window.location.href = "exam4.html";
        </script>';
    }
} else {
    echo "ไม่ได้รับข้อมูลจากฟอร์ม!";
}
?>
