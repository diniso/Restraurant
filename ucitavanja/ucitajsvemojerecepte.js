user = localStorage.getItem("loggeduser")
data = JSON.parse(localStorage.getItem(localStorage.getItem("language")))

dodajslikuTekst = data["dodajslikuugaleriju"]
tezinaJelaTekst = data["tezina"]
vrstaJelaTekst = data["vrstajela"]
sastojciTekst = data["sastojci"]
receptTekst = data["recept"]
vremeTekst = data["vreme"]

user = localStorage.getItem("loggeduser")
recepti = []
if (localStorage.getItem("recepti")) recepti =JSON.parse(localStorage.getItem("recepti"))

recepti = recepti.filter(recept => recept.korisnik == user)

document.write("<div class='row' >")

for (var i = 0 ; i < recepti.length ; i++) {

    vrstaReceptaTekst = recepti[i].vrsta.toLowerCase()
    vrstaReceptaTekst = data[vrstaReceptaTekst]

    sastojci = ""

    for (let j = 0 ; j < recepti[i].sastojci.length ; j++) {
        sastojak = recepti[i].sastojci[j].kolicina + " " + recepti[i].sastojci[j].sastojak
        sastojci += '<li class="obicnaslova slova">'+ sastojak +'</li>'
    }

    recenice = recepti[i].sadrzaj.split(".")
    sadrzaj = ""

    for (let j = 0 ; j < recenice.length ; j++) {
        rec = recenice[j].trim()
        if (rec == "") continue
        sadrzaj += '<li class="obicnaslova slova">' + rec + '</li>'
    }

    galerija = '<div class="carousel-inner">'
    if (recepti[i].slike.length == 0) {
        galerija += '<div class="carousel-item active"><img class="d-block w-100" src="images/slikakadnemanista.png" alt="0"></div>'
    }
    else {

        for (let j = 0 ; j < recepti[i].slike.length; j++) {
            if (j == 0) galerija += `<div class="carousel-item active"><img class="d-block w-100" src="${recepti[i].slike[j]}" alt="0" width=""></div>`
            else galerija += `<div class="carousel-item"><img class="d-block w-100" src="${recepti[i].slike[j]}" alt="${j}"></div>` 

        }
    }

    galerija += '</div>'

    // <th class="slova obicnaslova" style="padding-left: calc(50% - 75px); ">` + recepti[i].naziv + `

    document.write(`
    <div class="col-12 col-xl-6">
    <table class="table table-bordered" style="text-align: left;">
        <tr>
            <th class="slova obicnaslova" style="padding-left: calc(50% - 75px); ">` + recepti[i].naziv + `
            </th>
            <th style="text-align: center; vertical-align: middle" >
                <button class="dugme" onclick="obrisirecept('${recepti[i].id}')">&times</button>
            </th>
        </tr>
        <tr>
            <td colspan="2">
                <div id="carouselExampleControls${i}" class="carousel slide velicinaslikeSlide" data-ride="carousel">
                    ${galerija}
                    <a class="carousel-control-prev" href="#carouselExampleControls${i}" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls${i}" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="obicnaslova slova" style="padding-left: calc(50% - 170px);">
                <form action="javascript:dodajslikuugaleriju(profileFile${i}, '${recepti[i].id}')">
                <input type="file" id="profileFile${i}" accept=".jpg, .jpeg, .png" style="display: none" onchange="form.submit()"> 
                <label style="padding:10px" class="dugme" for="profileFile${i}">${dodajslikuTekst}</label>
                </form>
            </td>
        </tr>
        <tr>
            <td class="obicnaslova slova"  style="padding-left: calc(50% - 170px);">
                ${tezinaJelaTekst} ${recepti[i].tezina}
            </td>
        </tr>
        <tr>
            <td class="obicnaslova slova"  style="padding-left: calc(50% - 170px);">
                ${vrstaJelaTekst} ${vrstaReceptaTekst}
            </td>
        </tr>
        <tr>
            <td class="obicnaslova slova"  style="padding-left: calc(50% - 170px);">
                ${vremeTekst} ${recepti[i].vreme}
            </td>
        </tr>
        <tr>
            <td class="obicnaslova slova"  style="padding-left: calc(50% - 170px);">${sastojciTekst}</td>
        </tr>
        <tr>
            <td colspan="2">
                <ul style="padding-left: calc(50% - 130px);">
                    ${sastojci}
                </ul>
            </td>
        </tr>
        <tr>
            <td class="obicnaslova slova"  style="padding-left: calc(50% - 170px);">${receptTekst}</td>
        </tr>
        <tr>
            <td colspan="2">
                <ol style="padding-left: calc(50% - 130px);">
                    ${sadrzaj}
                </ol>
            </td>
        </tr>
    </table>
</div>
    `)
}

document.write("</div>")

function dodajslikuugaleriju(fileId , id) {
    var filename = fileId.value;
    index = filename.lastIndexOf("\\")  + 1;
    filename = filename.substring(index);
    filename = "./images/" + filename;

    recepti = JSON.parse(localStorage.getItem("recepti"))
    for (let i = 0 ; i < recepti.length ; i++) {
        if (recepti[i].id == id) {
            recepti[i].slike.push(filename)
            break
        }
    }
    localStorage.setItem("recepti", JSON.stringify(recepti))
    window.location.href = "mojnalog.html"

}

function obrisirecept(id) {
    recepti = JSON.parse( localStorage.getItem("recepti"))

    for (let i = 0 ; i < recepti.length ; i++) {
        if (recepti[i].id == id) {
            recepti.splice(i , 1)
            break
        }
    }

    localStorage.setItem("recepti" , JSON.stringify(recepti))
    window.location.href = "mojnalog.html"
}