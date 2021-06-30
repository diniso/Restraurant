recepti = JSON.parse(localStorage.getItem("recepti"))
korisnik = localStorage.getItem("loggeduser")

for (let i = 0 ; i < recepti.length ; i++) {
    for (let j = 0 ; j < recepti[i].komentari.length; j++) {
        if (recepti[i].komentari[j].korisnik != korisnik) continue

        document.write(`
            <div class="row">
                <div class="col-lg-9 col-12 text-left" style="margin-top: 40px; ">
                    <a class="predjiprekodasevidi" onclick='ucitajrecept("${recepti[i].id}")'><p style="background-color: white; margin-left:calc(20vw - 50px); width: 60vw; font-weight: bold; font-size: 25px; color:black">${recepti[i].komentari[j].tekst}</p></a>
                    
                </div>
            </div>
        `)
    }
}

function ucitajrecept(idRece) {
    localStorage.setItem("currentRecepie", idRece)
    window.location.href = "detaljnorecept.html"
}