<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $age = $_POST['age'];

    $conn = new mysqli('localhost','root','','project_db');

    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : ". $conn->connecterror);
    } else {
        $stmt = $conn->prepare("insert into user(Username, password, firstname, lastname, age) values(?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $username, $password, $firstname, $lastname, $age);
        $execval = $stmt->execute();
        echo $execval;
        echo '<script>alert("Register Successfully");
                window.location.href = "http://localhost/Project2/dashboard.html"
                </script>';
        $stmt->close();
        $conn->close();
    }
    // echo "$username";
    // echo "$password";
    // echo "$firstname";
    // echo "$lastname";
    // echo "$age";
?>