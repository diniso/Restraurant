recepti = JSON.parse(localStorage.getItem("recepti"))
recept = recepti.filter(recept=> recept.id == localStorage.getItem("currentRecepie"))[0]

document.write("<div class='row' id='dokumentupdf'>")

sastojci = ""

for (let j = 0 ; j < recept.sastojci.length ; j++) {
    sastojak = recept.sastojci[j].kolicina + " " + recept.sastojci[j].sastojak
    sastojci += '<li class="obicnaslova slova">'+ sastojak +'</li>'
}

recenice = recept.sadrzaj.split(".")
sadrzaj = ""

for (let j = 0 ; j < recenice.length ; j++) {
    rec = recenice[j].trim()
    if (rec == "") continue
    sadrzaj += '<li class="obicnaslova slova">' + rec + '</li>'
}

galerija = '<div class="carousel-inner">'
if (recept.slike.length == 0) {
    galerija += '<div class="carousel-item active"><img class="d-block w-100" src="images/slikakadnemanista.png" alt="0"></div>'
}
else {

    for (let j = 0 ; j < recept.slike.length; j++) {
        if (j == 0) galerija += `<div class="carousel-item active"><img class="d-block w-100" src="${recept.slike[j]}" alt="0" width=""></div>`
        else galerija += `<div class="carousel-item"><img class="d-block w-100" src="${recept.slike[j]}" alt="${j}"></div>` 

    }
}

galerija += '</div>'

// <th class="slova obicnaslova" style="padding-left: calc(50% - 75px); ">` + recepti[i].naziv + `
prosecna = recept.prosecnaocena.toFixed(2)
document.write(`
<div class="col-12">
<table class="table table-bordered" style="text-align: left;">
    <tr class="zabrisanje">
        <th class="slova obicnaslova" style="padding-top: 50px; font-size: 40px; padding-left: calc(47vw - 180px); ">` + recept.naziv + `
        </th>
        <th style="padding-top: 50px; text-align: right; vertical-align: middle; padding-right: 5vw" >
            <button class="dugme" onclick="skinirecept('${recept.id}')">Skini recept</button>
        </th>
    </tr>
    <tr class="zabrisanje">
        <td colspan="2">
            <div id="carouselExampleControls" class="carousel slide velicinaslikeSlide" data-ride="carousel">
                ${galerija}
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
        </td>
    </tr>
    <tr>
        <td class="obicnaslova slova"  style="padding-left: calc(50% - 170px);">
            Autor: ${recept.korisnik}
        </td>
    </tr>
    <tr>
        <td class="obicnaslova slova"  style="padding-left: calc(50% - 170px);">
            Vrsta jela: ${recept.vrsta}
        </td>
    </tr>
    <tr>
        <td class="obicnaslova slova"  style="padding-left: calc(50% - 170px);">
            Prosecna ocena: ${prosecna}
        </td>
    </tr>
    <tr>
        <td class="obicnaslova slova"  style="padding-left: calc(50% - 170px);">
            Tezina jela: ${recept.tezina}
        </td>
    </tr>
    
    <tr>
        <td class="obicnaslova slova"  style="padding-left: calc(50% - 170px);">
            Vreme: ${recept.vreme}
        </td>
    </tr>
    <tr>
        <td class="obicnaslova slova"  style="padding-left: calc(50% - 170px);">Sastojci:</td>
    </tr>
    <tr>
        <td colspan="2">
            <ul style="padding-left: calc(50% - 130px);">
                ${sastojci}
            </ul>
        </td>
    </tr>
    <tr>
        <td class="obicnaslova slova"  style="padding-left: calc(50% - 170px);">Recept:</td>
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

document.write("</div>")

function skinirecept(id) {
    var doc = new jsPDF({
        orientation: 'landscape'
    });

    recepti = JSON.parse(localStorage.getItem("recepti"))
    recept = recepti.filter(recept=> recept.id == localStorage.getItem("currentRecepie"))[0]

    elementHTML = $("<div></div>").attr("css" , "background-color: orange")

    elementHTML.append($("<h1></h1>").append("Naziv jela: " + recept.naziv).attr("css" , "font-size:35px; font-weight: bold"))
    elementHTML.append($("<p></p>").append("Autor: " + recept.korisnik))
    elementHTML.append($("<p></p>").append("Vrsta jela: " + recept.vrsta))
    
    elementHTML.append($("<p></p>").append("Vreme potrebno za pripremu: " + recept.vreme + "h"))
    elementHTML.append($("<p></p>").append("Sastojci: "))
    sastojci = $("<ul></ul>")
    for (let i = 0 ; i < recept.sastojci.length ; i++) {
        sastojak = recept.sastojci[i].kolicina + " " + recept.sastojci[i].sastojak
        el = $("<li></li>").append(sastojak)
        sastojci.append(el)
    }
    elementHTML.append(sastojci)

   /* if (recept.slike.length > 0) {
        slika = $("<img>").attr("style" , "width: 200px; margin-left: 200px; height: 300px").attr("src" , recept.slike[0])
        elementHTML.append(slika)
    } */

    elementHTML.append($("<p></p>").append("Recept: "))

    recenice = recept.sadrzaj.split(".")

    sadrzaj = $("<ol></ol>")

    for (let j = 0 ; j < recenice.length ; j++) {
        rec = recenice[j].trim()
        if (rec == "") continue
        listel = $("<li></li>").append(rec)
        sadrzaj.append(listel)
    }
    elementHTML.append(sadrzaj)
    elementHTML = elementHTML.html()


var specialElementHandlers = {
    '#forpdf': function (element, renderer) {
        return true;
    }
};
doc.fromHTML(elementHTML, 15, 15, {
    'width': 450,
    'elementHandlers': specialElementHandlers
});

// Save the PDF
doc.save('sample-document.pdf');
}