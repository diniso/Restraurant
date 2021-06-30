recepti = JSON.parse(localStorage.getItem("recepti"))
korisnik = localStorage.getItem("loggeduser")

for (let i = 0 ; i < recepti.length ; i++) {
    found = false
    ocena = 0
    for (let j = 0 ; j < recepti[i].ocene.length ; j++) {
        if (recepti[i].ocene[j].korisnik == korisnik) {
            found = true
            ocena = recepti[i].ocene[j].ocena
            break
        }
    }

    if (!found) continue

    document.write(`
        <tr>
            <td class="slova nazivjezapreko" style="font-size: 25px; color: black;"><a onclick="ucitajrecept('${recepti[i].id}')">${recepti[i].naziv}</a></td>
            <td class="slova" style="font-size: 25px; color: black; padding-right: 20vw;">${ocena}</td>
        </tr>
    `)
} 


function ucitajrecept(idRece) {
    localStorage.setItem("currentRecepie", idRece)
    window.location.href = "detaljnorecept.html"
}