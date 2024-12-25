<?php 
    session_start();
    include('server.php');

    $errors=array();

    if (isset($_POST['login_user'])){
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);

        if (empty($username)){
            array_push($errors,"Username is required");
        }
        if (empty($password)){
            array_push($errors,"Password is required");
        }
        if (count($errors)==0){
            $password = md5($password);
            $query = "SELECT * from user where username = '$username'AND password ='$password'";
            $query = mysqli_query($conn, $query);

            if (mysqli_num_rows($result)==1){
                $_SESSION['username']=$username;
                $_SESSION['success']="You are now logged in";
                header("location: dashboard.php");
            }else{
                array_push($errors,"Username หรือ Password ไม่ถูกต้อง");
                $_SESSION['error']="Username หรือ Password ไม่ถูกต้อง";
                header("location: login.php");
            }
        }
    }
?>