recepti = JSON.parse(localStorage.getItem("recepti"))
recept = recepti.filter(recept=> recept.id == localStorage.getItem("currentRecepie"))[0]

for (let i = 0 ; i < recept.komentari.length; i++) {
    document.write(`
        <div class="row">
            <div class="col-lg-9 col-12 text-left" style="margin-top: 40px; ">
                <p style="margin-left:calc(20vw - 50px); width: 60vw; font-weight: bold; font-size: 25px;">${recept.komentari[i].korisnik}</p>
                <p style="margin-left:calc(20vw - 50px); width: 60vw; font-size: 20px;" >${recept.komentari[i].tekst}</p>
                
            </div>
        </div>
    `)
}