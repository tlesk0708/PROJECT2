
document.getElementById("btnEvaluate").addEventListener("click", function() {
    let username = localStorage.getItem("Username");
    if (username) {
        Swal.fire({
            icon: "warning",
            title: "แจ้งเตือน",
            text: "ชื่อผู้ใช้นี้มีอยู่แล้ว!",
        });
    } else {
        // ดำเนินการต่อไป
        console.log("ทำแบบประเมินได้");
    }
});