
function dodajkomentar() {
    tekst = document.getElementById("tekst komentar").value
    korisnik = localStorage.getItem("loggeduser")
    id = localStorage.getItem("currentRecepie")

    if (korisnik == "" || korisnik == null) {
        alert("Morate se registrovati da biste mogli ostavljati komentare")
        return
    }

    recepti = JSON.parse(localStorage.getItem("recepti"))
    for (let i = 0 ; i < recepti.length ; i++) {
        if (recepti[i].id != id) continue

        komentar = {
            tekst: tekst,
            korisnik : korisnik
        }

        recepti[i].komentari.push(komentar)
        break;
    }

    localStorage.setItem("recepti" , JSON.stringify(recepti))

    window.location.href = "detaljnorecept.html"
}