
function ulogujse(){
    korisnici = []
    if (localStorage.getItem("users") != null) korisnici = JSON.parse(localStorage.getItem("users"))
    username = document.getElementById("username").value
    password = document.getElementById("password").value

    if (username == "" || password == "") {
        alert("Sva polja su obavezna")
        return
    }
    
    for (let i = 0 ; i < korisnici.length ; i++) {
        if (korisnici[i].username == username && korisnici[i].password == password) {
            localStorage.setItem("loggeduser" , korisnici[i].username)
            window.location.href = "index.html"
            return
        }
    }
    alert("Korisnik ne postoji")
  }

function izlogujse() {
    localStorage.setItem("loggeduser" , "")
    window.location.href = "index.html"
}

function registrujse() {
    korisnici = []
    if (localStorage.getItem("users") != null) korisnici = JSON.parse(localStorage.getItem("users"))
    username = document.getElementById("usernamereg").value
    password = document.getElementById("passwordreg").value

    if (username == "" || password == "") {
        alert("Sva polja su obavezna")
        return
    }

    kor = korisnici.find(korisnik=> korisnik.username == username)

    if (kor) {
        alert("Korisnicko ime postoji")
        return
    }

    data = {
        "username": username,
        "password": password
    }

    korisnici.push(data)
    localStorage.setItem("users" , JSON.stringify(korisnici))
    localStorage.setItem("loggeduser" , username)
    window.location.href = "index.html"
}