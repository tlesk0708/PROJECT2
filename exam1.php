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
    $question1 = $_POST['question1'] ?? null;
    $question2 = $_POST['question2'] ?? null;
    $question3 = $_POST['question3'] ?? null;
    $question4 = $_POST['question4'] ?? null;
    $question5 = $_POST['question5'] ?? null;
    $question6 = $_POST['question6'] ?? null;
    $question7 = $_POST['question7'] ?? null;
    $question8 = $_POST['question8'] ?? null;
    $question9 = $_POST['question9'] ?? null;
    $question10 = $_POST['question10'] ?? null;

    // ตรวจสอบว่าไม่มีคำถามไหนถูกปล่อยว่าง
    if ($question1 && $question2 && $question3 && $question4 && $question5 && $question6 && $question7 && $question8 && $question9 && $question10)
        {try {
            // เตรียมคำสั่ง SQL เพื่อเพิ่มข้อมูล
            $sql = "INSERT INTO answers (question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, )
                VALUES 
                (:question1, :question2, :question3, :question4, :question5, :question6, :question7, :question8, :question9, :question10)";
            $stmt = $pdo->prepare($sql);

            // ผูกค่ากับคำสั่ง SQL
            $stmt->bindParam(':question1', $question1);
            $stmt->bindParam(':question2', $question2);
            $stmt->bindParam(':question3', $question3);
            $stmt->bindParam(':question4', $question4);
            $stmt->bindParam(':question5', $question5);
            $stmt->bindParam(':question6', $question6);
            $stmt->bindParam(':question7', $question7);
            $stmt->bindParam(':question8', $question8);
            $stmt->bindParam(':question9', $question9);
            $stmt->bindParam(':question10', $question10);

            // รันคำสั่ง SQL
            $stmt->execute();

            echo '<script>
            window.location.href = "exam2.html";
        </script>';
        } catch (PDOException $e) {
            echo "เกิดข้อผิดพลาด: " . $e->getMessage();
        }
    } else {
        echo '<script>
            alert("กรุณาตอบคำถามให้ครบทุกข้อ");
            window.location.href = "exam1.html";
        </script>';
    }
} else {
    echo "ไม่ได้รับข้อมูลจากฟอร์ม!";
}
?>
