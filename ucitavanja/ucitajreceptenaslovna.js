function ucitajrecept(idRece) {

    localStorage.setItem("currentRecepie", idRece)
    window.location.href = "detaljnorecept.html"
}
recepti = JSON.parse(localStorage.getItem("recepti"))
recepti.sort(function(r1 , r2) {
    return r2.prosecnaocena - r1.prosecnaocena
})
for (let i = 0 ; i < 3; i++) {
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

    sastojci = ""

    for (let j = 0 ; j < recepti[i].sastojci.length ; j++) {
        sastojak = recepti[i].sastojci[j].kolicina + " " + recepti[i].sastojci[j].sastojak
        sastojci += '<li class="obicnaslova slova">'+ sastojak +'</li>'
    }

    tekstLink =readForLanguage("pocentap5")

    document.write(`
    <div class="row" style="margin-top:100px">
        <div class="col-12 col-xl-8" >
            <table class="table table-bordered" style="text-align: center;">
                <tr>
                    <th class="slova obicnaslova" font-size: 40px; ">` + recepti[i].naziv + `
                    </th>
                </tr>
                <tr >
                    <td c>
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
            </table>
        </div>
        <div class="offset-2 offset-md-3 offset-lg-4 offset-xl-0 col-6 col-xl-3" style="padding-top: calc(25vw - 250px)" class="text-center">
            <ol>
            ${sastojci}
            </ol>
        </div>
        <div class="col-12 col-xl-8" style="text-align: center; padding-top:30px">
            <p class="slova obicnaslova">${tekstLink}<b><a class="nazivjezapreko" onclick="ucitajrecept('${recepti[i].id}')">Link</a></b></p>
            
        </div>
    </div>
    
    `)
}