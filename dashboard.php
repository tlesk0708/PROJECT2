<?php 
    session_start();

    if (!isset($_SESSION['username'])){
        $_SESSION['msg']="คุณต้องทำการ log in ก่อน";
        header('location: login.php');
    }
        if (isset($_GET['logout'])){
            session_destroy();
            unset($_SESSION['username']);
            header('location: login.php');
        }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>

    <link ref="stylesheet" href="style.css">
</head>

<body>
    

    <header class="layer1"></header>
    <header class="box"><H1 class="title">เว็บไซต์สำหรับแนะนำสาขาที่ถนัด</H1></header>
    <div class="boxbook"><img src="detective.png"style="width:50px;margin: 10px;;"><h1>Luksood GU.</h1></img></div>
    <div class="boxbody1">
        <form action="example.html">
            <input type="submit"  value="ทำแบบทดสอบ">
        </form>
    </div>
    </div>

    <div class="content">
        <!-- notification message -->
        <?php if(isset($_SESSION['success'])): ?>
            <div class ="success">
                <h3>
                    <?php
                        echo $_SESSION['success'];
                        unset($_SESSION['success']);
                    ?>
                </h3>
            </div>
        <?php endif ?>    

        <?php if (isset($_SESSION['username'])):?>
            <p>Welcom <strong><?php echo $_SESSION['username'];?></strong></p>
            <p><a href="login.php?logout='1' "style ="color:red;">Log out</a></p>
        <?php endif ?>
    </div>


</body>
</html>



