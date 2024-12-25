<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    $conn = new mysqli('localhost','root','','project_db');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : ". $conn->connecterror);
    }else {
        $stmt = $conn->prepare("select * from user where username = ?");
        $stmt->bind_param("s",$username);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if($stmt_result->num_rows > 0){
            $data = $stmt_result->fetch_assoc();
            if($data['password'] === $password){
                echo '<script>alert("login Successfully");
                window.location.href = "http://localhost/Project2/dashboard.html"
                </script>';


            }else{
                echo '<script>alert("Invalid username or password")
                window.location.href = "http://localhost/Project2/login.html"
                </script>'; 
            }
        }else{
            echo '<script>alert("Invalid username or password")
            window.location.href = "http://localhost/Project2/login.html"
            </script>';
        }
    }
?>