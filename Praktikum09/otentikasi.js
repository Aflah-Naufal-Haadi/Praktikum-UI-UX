function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let usernameBenar = "aflah218";
    let passwordBenar = "123";

    if (user === usernameBenar && pass === passwordBenar) {
        alert("Login sukses");
        window.location.href = "loginsukses.html";   
        return false; 
    } else {
        alert("Login gagal");
        return false;
    }
}
