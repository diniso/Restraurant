function ucitajrecept(idRece) {

    localStorage.setItem("currentRecepie", idRece)
    window.location.href = "detaljnorecept.html"
}


function dohvatiReceptePoTipu() {
    tip = document.getElementById("tipjela").textContent
    if (tip == "Uzine") tip = "Uzina"
    else if (tip == "Glavna jela") tip = "Glavno jelo"
    else if (tip == "Predjela") tip = "Predjelo"
    else if (tip == "Dezerti") tip = "Dezert"

    recepti = JSON.parse(localStorage.getItem("recepti"))
    recepti = recepti.filter(recept => recept.vrsta == tip)

    return recepti
}

function ubaciRecepte(recepti) {
   $("#zamenjanjediv").empty()
   kontejner = document.getElementById("zamenjanjediv")
   data = JSON.parse(localStorage.getItem(localStorage.getItem("language")))

    rezultatiTekst= data["rezultati"]
    tezinaTekst = data["tezina"]
    ocenaTekst = data["ocena"]

   kontejner.innerHTML += `
   <div class="col-12">
   <h1 class="slova headerslova" style="padding-top: 25px; padding-bottom: 12px;">${rezultatiTekst}</h1>
</div>
   `
   for (let i = 0 ; i < recepti.length ; i++) {
    urlSlika = "images/slikakadnemanista.png"
    if (recepti[i].slike.length > 0) urlSlika = recepti[i].slike[0]

    prosecnaOcenaTekst = recepti[i].prosecnaocena.toFixed(2)
    kontejner.innerHTML += `
    <div class="col-12 col-xl-6 text-left">
    <table class="table table-bordered">
        <tr>
            <th class="slova obicnaslova text-center" style="padding-top: 50px; ">
                <a onclick="ucitajrecept('${recepti[i].id}')">${recepti[i].naziv}</a>
            </th>
        </tr>
        <tr>
                <th class="slova obicnaslova text-center">
                    <a onclick="ucitajrecept('${recepti[i].id}')">${tezinaTekst} ${recepti[i].tezina}</a>
                </th>
            </tr>
            <tr>
                <th class="slova obicnaslova text-center" >
                    <a onclick="ucitajrecept('${recepti[i].id}')">${ocenaTekst} ${prosecnaOcenaTekst}</a>
                </th>
            </tr>
        <tr>
            <td class="text-center">
                <img onclick="ucitajrecept('${recepti[i].id}')" src="${urlSlika}" style="width: 60vw; height: 60vh; max-width: 500px; max-height: 500px;margin: auto;">
            </td>
        </tr>
    </table>
</div>
    `
}

}

function pretraziReceptePoTipu() {
    
    nazivRecepta = document.getElementById("nazivrecepta").value

    recepti = dohvatiReceptePoTipu()
    if (nazivRecepta != "") recepti = recepti.filter(recept=> recept.naziv.includes(nazivRecepta))

    pretragaTip = ""

    radiobuttons = document.getElementsByName("tipsorta")
    for (let i = 0 ; i < radiobuttons.length ; i++) {
        if (radiobuttons[i].checked) {
            pretragaTip = radiobuttons[i].value
            break
        }
    }

    if (pretragaTip == "") {
        ubaciRecepte(recepti)
        return
    }

    nacinSortiranja = document.getElementById("vrstasortiranja").value

    if (pretragaTip == "Ocena") {
        if (nacinSortiranja == "Rastuce") {
            recepti.sort(function(r1 , r2) {
                return r1.prosecnaocena - r2.prosecnaocena
            })
        }
        else if (nacinSortiranja == "Opadajuce"){
            recepti.sort(function(r1 , r2) {
                return r2.prosecnaocena - r1.prosecnaocena
            })
        }     
    }
    else if (pretragaTip == "Tezina") {
        
        if (nacinSortiranja == "Rastuce") {
            recepti.sort(function(r1 , r2) {
                return r1.tezina - r2.tezina
            })
        }
        else if (nacinSortiranja == "Opadajuce"){
            recepti.sort(function(r1 , r2) {
                return r2.tezina - r1.tezina
            })
        }     
    }

    ubaciRecepte(recepti)
}