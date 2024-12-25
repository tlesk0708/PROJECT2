<?php include ('server.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log in</title>

    <link rel="stylesheet" href="style.css";>
</head>

<body>
    <header class="layer1"></header>
    <header class="box"><H1 class="title">เว็บไซต์สำหรับแนะนำสาขาที่ถนัด</H1></header>
    <div class="boxbook"><img src="detective.png"style="width:50px;margin: 10px;;"><h1>Luksood GU.</h1></img></div>

    <form action="login_db.php" method="post">
        <!-- notification message -->
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

        <div class="input-group">
            <label for="username">User Name</label>
            <input type="text" name="username">
        </div>
        <div class="input-group">
            <label for="password">PassWord</label>
            <input type="password" name="password">
        </div>
        </form>

        <form action="register_db.php"><p>เข้าสู่ระบบ</p>
        <div class="input-group">
            <button type="submit" name="login_user" class="btn">Log in</button>
        </div>
        </form>

        <form action="register.php"><p>สมัครสมาชิก</p>
        <div class="input-group">
            <button type="submit" class="btn2">Register</button>
        </div>
        </form>


</body>
</html>