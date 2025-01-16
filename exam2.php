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
    $question11 = $_POST['question11'] ?? null;
    $question12 = $_POST['question12'] ?? null;
    $question13 = $_POST['question13'] ?? null;
    $question14 = $_POST['question14'] ?? null;
    $question15 = $_POST['question15'] ?? null;
    $question16 = $_POST['question16'] ?? null;
    $question17 = $_POST['question17'] ?? null;
    $question18 = $_POST['question18'] ?? null;
    $question19 = $_POST['question19'] ?? null;
    $question20 = $_POST['question20'] ?? null;


    // ตรวจสอบว่าไม่มีคำถามไหนถูกปล่อยว่าง
    if ($question11 && $question12 && $question13 && $question14 && $question15 && $question16 && $question17 && $question18 && $question19 && $question20)
        {try {
            // เตรียมคำสั่ง SQL เพื่อเพิ่มข้อมูล
            $sql = "INSERT INTO answers (question11, question12, question13, question14, question15, question16, question17, question18, question19, question20)
                VALUES 
                (:question11, :question12, :question13, :question14, :question15, :question16, :question17, :question18, :question19, :question20)";
            $stmt = $pdo->prepare($sql);

            // ผูกค่ากับคำสั่ง SQL
            $stmt->bindParam(':question11', $question11);
            $stmt->bindParam(':question12', $question12);
            $stmt->bindParam(':question13', $question13);
            $stmt->bindParam(':question14', $question14);
            $stmt->bindParam(':question15', $question15);
            $stmt->bindParam(':question16', $question16);
            $stmt->bindParam(':question17', $question17);
            $stmt->bindParam(':question18', $question18);
            $stmt->bindParam(':question19', $question19);
            $stmt->bindParam(':question20', $question20);


            // รันคำสั่ง SQL
            $stmt->execute();

            echo '<script>
            window.location.href = "exam3.html";
        </script>';
        } catch (PDOException $e) {
            echo "เกิดข้อผิดพลาด: " . $e->getMessage();
        }
    } else {
        echo '<script>
            alert("กรุณาตอบคำถามให้ครบทุกข้อ");
            window.location.href = "exam2.html";
        </script>';
    }
} else {
    echo "ไม่ได้รับข้อมูลจากฟอร์ม!";
}
?>
