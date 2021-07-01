function setLanguage(leng) {
    localStorage.setItem("language", leng)
    window.location.href = "index.html"
}

srb = {
    naslov: "Vladova kuhinja",
    meni: "Meni",
    pocetna: "Pocenta",
    recepti: "Recepti",
    ulogujse: "Uloguj se",
    registrujse: "Registruj se",
    dodajrecept: "Dodaj recept",
    mojnalog: "Moj nalog",
    izlogujse: "Izloguj se",
    zatvori: "Zatvori",
    onama: "O nama",
    predjelo: "Predjelo",
    glavnojelo: "Glavno jelo",
    uzina: "Uzina",
    dezert: "Dezert",
    predjela: "Predjela",
    uzine: "Uzine" ,
    glavnajela: "Glavna jela",
    dezerti: "Dezerti",
    pocentap1: "Zelite da naucite da kuvate?",
    pocentap2: "Veliki broj recepata mozete naci na nasem sajtu koji su proizvod kuvara, koji su godinama jedni od najboljih u svojoj struci.",
    pocentap3: "Ako zelis da nasim citaocima otkrijes neke svoje ukusne recepte, mozes se registrovati i ostaviti recept da svi u njemu mogu da uzivaju.",
    pocentap4: "Ako niste zainteresovani, pogledajte neke od najboljih recepata i mozda vam se promeni misljenje!",
    pocentap5: "Ako hoces da saznas vise pritisni ",
    onamap1: "Vladova kuhinja je restoran koji se nalazi na lokaciji ",
    onamap2: "Restoran je poceo sa radom 2008 godine i od tada imamo veoma dobre kritike i veliki broj nasih stalnih musterija.",
    onamap31: "Ako imate neka pitanja, ili zelite da rezereviste kod nas, to mozete uciniti na broj: ",
    onamap32: " ili ",
    onamap4: "Od nedavno, moguce je nasu hrana naruciti i online. Neki od sajtova preko kojih to mozete uraditi: ",
    footer: "Copyright 2021, Vlade Vulovic, Odsek za softversko inzenjerstvo Elektrotehnickog fakulteta Univerziteta u Beogradu",
    imerecepta: "Ime recepta",
    sortiraj: "Sortiraj",
    opadajuce: "Opadajuce",
    rastuce: "Rastuce",
    ocena: "Ocena:",
    tezina: "Tezina:",
    pretrazi: "Pretrazi",
    rezultati: "Rezultati:",
    skinirecept: "Skini recept",
    autor: "Autor:",
    vrstajela: "Vrsta jela:",
    prosecnaocena: "Prosecna ocena:",
    vreme: "Vreme:",
    sastojci: "Sastojci:",
    recept: "Recept:",
    komentari: "Komentari:",
    komentarisi: "Komentarisi",
    dodajkomentar: "Dodaj komentar",
    vremepripremejela: "Vreme pripreme jela",
    dodajsastojak: "Dodaj sastojak",
    dodajrecept: "Dodaj recept",
    nazivsastojka: "Naziv sastojka",
    kolicina: "Kolicina",
    tekstrecepta: "Tekst recepta",
    nazivjela: "Naziv jela:",
    dodajslikuugaleriju: "Dodaj sliku u galeriju",
    mojikomentari: "Moji komentari:",
    ocenjenirecepti: "Ocenjeni recepti:" ,
    pretragapo : "Pretraga po:",
    oceni: "Oceni: ",
    jezik: "Jezik: "

};

en = {
    naslov: "Vlade's kitchen",
    meni: "Menu",
    pocetna: "Home",
    recepti: "Recipes",
    ulogujse: "Log in",
    registrujse: "Register",
    dodajrecept: "Add recipe",
    mojnalog: "My account",
    izlogujse: "Log out",
    zatvori: "Close",
    onama: "About us",
    predjelo: "Appetizer",
    glavnojelo: "Main course",
    uzina: "Snack",
    dezert: "Dessert",
    predjela: "Appetizers",
    uzine: "Snacks" ,
    glavnajela: "Main courses",
    dezerti: "Desserts",
    pocentap1: "U wanna learn to cook?",
    pocentap2: "You can find a large number of recipes on our site that are the product of chefs, who have been among the best in their profession for years.",
    pocentap3: "If you want to reveal some of your delicious recipes to our readers, you can register and leave a recipe for everyone to enjoy.",
    pocentap4: "If you are not interested, take a look at some of the best recipes and maybe your opinion will change!",
    pocentap5: "If you want to know more press ",
    onamap1: "Vlade's kitchen is a restaurant located on site ",
    onamap2: "The restaurant started operating in 2008 and since then we have had very good reviews and a large number of our regular customers.",
    onamap31: "If you have any questions, or want to book with us, you can do so at: ",
    onamap32: " or ",
    onamap4: "Recently, it is possible to order our food online. Some of the sites through which you can do this: ",
    footer: "Copyright 2021, Vlade Vulovic, Department of Software Engineering, Faculty of Electrical Engineering, University of Belgrade",
    imerecepta: "Recipe name",
    sortiraj: "Sort",
    opadajuce: "Descending",
    rastuce: "Growing",
    ocena: "Rating:",
    tezina: "Heaviness:",
    pretrazi: "Search:",
    rezultati: "Results:",
    skinirecept: "Download recipe",
    autor: "Author:",
    vrstajela: "Type of dish:",
    prosecnaocena: "Average rating:",
    vreme: "Time:",
    sastojci: "Ingredients:",
    recept: "Recipe:",
    komentari: "Comments:",
    komentarisi: "Comment",
    dodajkomentar: "Add comment",
    vremepripremejela: "Meal preparation time",
    dodajsastojak: "Add ingredient",
    dodajrecept: "Add recipe",
    nazivsastojka: "Ingredient name",
    kolicina: "Quantity",
    tekstrecepta: "Recipe text",
    nazivjela: "Dish name:",
    dodajslikuugaleriju: "Add image to gallery",
    mojikomentari: "My comments:",
    ocenjenirecepti: "Rated Recipes:" ,
    pretragapo : "Search by:",
    oceni: "Assess: ",
    jezik: "Language: "
    
}

if (localStorage.getItem("language") == null) localStorage.setItem("language", "srb")
if (localStorage.getItem("en") == null) localStorage.setItem("en" , JSON.stringify(en))
if (localStorage.getItem("srb") == null) localStorage.setItem("srb" , JSON.stringify(srb))


function readForLanguage(nazivProm) {
    jezik = localStorage.getItem("language")

    if (jezik == "en") {
         return en[nazivProm]
    }

    return srb[nazivProm]
}