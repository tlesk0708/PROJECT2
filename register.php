<?php
    session_start();
    include('server.php');
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>

    <link rel="stylesheet" href="style.css";>
</head>

<body>
<header class="layer1"></header>
    <header class="box"><H1 class="title">เว็บไซต์สำหรับแนะนำสาขาที่ถนัด</H1></header>
    <div class="boxbook"><img src="detective.png"style="width:50px;margin: 10px;;"><h1>Luksood GU.</h1></img></div>

    <form action="register_db.php" method="post">
    <?php if(isset($_SESSION['error'])): ?>
            <div class ="error">
                <h3>
                    <?php
                        echo $_SESSION['success'];
                        unset($_SESSION['success']);
                    ?>
                </h3>
            </div>
        <?php endif ?>   

        <!-- <div class="input-group">
            <label for="name">ชื่อ</label>
            <input type="text" name="name">
        </div>
        <div class="input-group">
            <label for="name">นามสกุล</label>
            <input type="text" name="surname">
        </div>
        <div class="input-group">
            <label for="name">อายุ</label>
            <input type="text" name="age"> -->
        </div>
        <div class="input-group">
            <label for="username">User Name</label>
            <input type="text" name="username">
        </div>
        <div class="input-group">
            <label for="password_1">PassWord</label>
            <input type="password" name="password_1">
        </div>
        <div class="input-group">
            <label for="password_2">Confirm PassWord</label>
            <input type="password" name="password_2">
        </div>
        </form>

        <form action="register_db.php"><p>ยืนยัน</p>
        <div class="input-group">
            <button type="submit" name="req_user" class="btn">Next</button>
        </div>
        </form>

        <form action="login.php"><p>เป็นสมาชิกอยู่แล้ว</p>
        <div class="input-group">
            <button type="submit" class="btn2">log in</button></form>
        
      
    

</body>
</html>