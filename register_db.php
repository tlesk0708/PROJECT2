<?php
    session_start();
    include('server.php');

    $errors = array();
    if (isset($_POST['reg_user'])){
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $password_1 = mysqli_real_escape_string($conn, $_POST['password_1']);
        $password_2 = mysqli_real_escape_string($conn, $_POST['password_2']);
        // $name = mysqli_real_escape_string($conn, $_POST['name']);
        // $surname = mysqli_real_escape_string($conn, $_POST['surname']);
        // $age = mysqli_real_escape_string($conn, $_POST['age']);

        if (empty($username)){
            array_push($errors,"Username is required");
        }
        if (empty($password_1)){
            array_push($errors,"password is required");
        }
        if ($password_1 != $password_2){
            array_push($errors,"รหัสผ่านไม่ตรงกัน");
        }

        $user_check_query = "SELECT * from user where username = '$username'";
        $query = mysqli_query($conn, $user_check_query);
        $result = mysqli_fetch_assoc($query);
        if ($result){
            if ($result['username']==$username){
                array_push($errors,"Username already exists");
            }
        }

        if (count($errors)==0){
            $password = md5($password_1);

            $sql = "INSERT INTO user (username,password) VALUES ('$username','$password')";
            mysqli_query($conn, $sql);

            $_SESSION['username']=$username;
            $_SESSION['success']="You are now logged in";
            header('location: dashboard.php');
        }else{
            array_push($errors,"Username หรือ Password ถูกใช้งานแล้ว");
            $_SESSION['error']="Username หรือ Password ถูกใช้งานแล้ว!";
            header("location: register.php");
        }
    }

?>