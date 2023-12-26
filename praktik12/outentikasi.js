function auth(){
    const username = "Rano"
    const password = "011004"

    //tangkap input user
    let userinput = document.getElementById("username").value
    let passinput = document.getElementById("password").value

    if(username == userinput && password == passinput){
        alert("Login Berhasil")
        document.location = "home.html"
    } else{
        alert("Login Gagal")
    }
}