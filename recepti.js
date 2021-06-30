function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function dodajrecept() {
    nazivRecepta = document.getElementById("imerecepta").value
    tezina = document.getElementById("tezina").value
    vrstaJela = document.getElementById("vrstajela").value
    vreme = document.getElementById("vremepripreme").value
    tekstSadrzaja = document.getElementById("sadrzaj").value
    
    recept = {
        id: generateUUID(),
        korisnik: localStorage.getItem("loggeduser"),
        naziv: nazivRecepta,
        tezina: tezina,
        vrsta: vrstaJela,
        vreme: vreme,
        sadrzaj: tekstSadrzaja,
        ocene : [],
        prosecnaocena : 0.0,
        komentari : [],
        sastojci: [],
        slike: []
    }

    sastojci = document.getElementsByClassName("sastojak")
    kolicine = document.getElementsByClassName("kolicina")

    for (let i = 0 ; i < sastojci.length ; i++) {
        data = {
            sastojak: sastojci[i].value,
            kolicina: kolicine[i].value
        }
        recept.sastojci.push(data)
    }

    recepti = []
    if (localStorage.getItem("recepti") != null) recepti = JSON.parse(localStorage.getItem("recepti"))
    recepti.push(recept)
    localStorage.setItem("recepti", JSON.stringify(recepti))
}

function dodajsastojakkolonu() {

    brojSastojaka = document.getElementsByClassName("sastojak").length
    vrsta = $("<tr></tr>")
    kolona1 = $("<td></td>")
    kolona2 = $("<td></td>")
    vrsta.append(kolona1)
    vrsta.append(kolona2)

    kolona1.attr("style", "text-align: right;")
    kolona2.attr("style", "text-align: left;")

    polje1 = $("<input>")
    polje1.attr("type" , "text")
    polje1.attr("id" , "sastojak" + (brojSastojaka+1))
    polje1.attr("placeholder" , "naziv sastojka")
    polje1.attr("required" , "true")
    polje1.attr("class" , "sastojak")

    polje2 = $("<input>")
    polje2.attr("type" , "text")
    polje2.attr("id" , "kolicina" + (brojSastojaka+1))
    polje2.attr("placeholder" , "kolicina")
    polje2.attr("required" , "true")
    polje2.attr("class" , "kolicina")

    kolona1.append(polje1)
    kolona2.append(polje2)

    vrsta.insertBefore("#kolonatekstrecepta")
}