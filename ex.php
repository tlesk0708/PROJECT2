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
    if ($question1 && $question2 && $question3 && $question4 && $question5 && $question6 && $question7 && $question8 && $question9 && $question10 && 
        $question11 && $question12 && $question13 && $question14 && $question15 && $question16 && $question17 && $question18 && $question19 && $question20 && 
        $question21 && $question22 && $question23 && $question24 && $question25 && $question26 && $question27 && $question28 && $question29 && $question30 && 
        $question31 && $question32 && $question33 && $question34 && $question35 && $question36 && $question37 && $question38 && $question39 && $question40)
        {try {
            // เตรียมคำสั่ง SQL เพื่อเพิ่มข้อมูล
            $sql = "INSERT INTO answers (question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, 
                question11, question12, question13, question14, question15, question16, question17, question18, question19, question20, 
                question21, question22, question23, question24, question25, question26, question27, question28, question29, question30, 
                question31, question32, question33, question34, question35, question36, question37, question38, question39, question40)
                VALUES 
                (:question1, :question2, :question3, :question4, :question5, :question6, :question7, :question8, :question9, :question10,
                 :question11, :question12, :question13, :question14, :question15, :question16, :question17, :question18, :question19, :question20,
                 :question21, :question22, :question23, :question24, :question25, :question26, :question27, :question28, :question29, :question30, 
                 :question31, :question32, :question33, :question34, :question35, :question36, :question37, :question38, :question39, :question40)";
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
            window.location.href = "ex.html";
        </script>';
    }
} else {
    echo "ไม่ได้รับข้อมูลจากฟอร์ม!";
}
?>
