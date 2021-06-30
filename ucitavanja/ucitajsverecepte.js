
function ucitajSveRecepte(recepti) {

    

    document.write(`
    <hr>
    <div class="row text-center" id="zamenjanjediv">
    <div class="col-12">
        <h1 class="slova headerslova" style="padding-top: 25px; padding-bottom: 12px;">Rezultati:</h1>
    </div>
    `)

    if (recepti.length == 0) {
        document.write("</div>")
        return
    }

    for (let i = 0 ; i < recepti.length ; i++) {
        prosecna = recepti[i].prosecnaocena.toFixed(2)
        urlSlika = "images/slikakadnemanista.png"
        if (recepti[i].slike.length > 0) urlSlika = recepti[i].slike[0]
        document.write(`
        <div class="col-12 col-xl-6 text-left">
        <table class="table table-bordered">
            <tr>
                <th class="slova obicnaslova text-center" style="padding-top: 50px; ">
                    <a onclick="ucitajrecept('${recepti[i].id}')">${recepti[i].naziv}</a>
                </th>
            </tr>
            <tr>
                <th class="slova obicnaslova text-center">
                    <a onclick="ucitajrecept('${recepti[i].id}')">Tezina: ${recepti[i].tezina}</a>
                </th>
            </tr>
            <tr>
                <th class="slova obicnaslova text-center" >
                    <a onclick="ucitajrecept('${recepti[i].id}')">Ocena: ${prosecna}</a>
                </th>
            </tr>
            <tr>
                <td class="text-center">
                    <img onclick="ucitajrecept('${recepti[i].id}')" src="${urlSlika}" style="width: 60vw; height: 60vh; max-width: 500px; max-height: 500px;margin: auto;">
                </td>
            </tr>
        </table>
    </div>
        `)
    }

    document.write("</div>")
}