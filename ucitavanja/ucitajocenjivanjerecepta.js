recepti = JSON.parse(localStorage.getItem("recepti"))
recept = recepti.filter(recept=> recept.id == localStorage.getItem("currentRecepie"))[0]
korisnik = localStorage.getItem("loggeduser")

found = false
for (let i = 0 ; i < recept.ocene.length ; i++) {
    if (recept.ocene[i].korisnik == korisnik) {
        found = true
        break
    }
}

data = JSON.parse(localStorage.getItem(localStorage.getItem("language")))
oceniTekst = data["oceni"]

if (!found && korisnik != "" && korisnik != null) {
    document.write(`
        <div class="col-3" style="padding-top:50px; margin-left: 5vw;">
            <a style="font-size: 20px; margin-right: 15px;" id="ocenatekst" onclick="ocenirecept()"> ${oceniTekst}</a>
            
            <select  id="oceni">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    `)
}