$(document).ready(function() {
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
    
    if (localStorage.getItem("users") == null) {
        korisnici = [
            {
                username: "marko",
                password: "123"
            },
            {
                username: "vlade",
                password: "123"
            },
            {
                username: "janko",
                password: "123"
            },
            {
                username: "slavko",
                password: "123"
            }
        ]
    
        localStorage.setItem("users" , JSON.stringify(korisnici))
    }
    
    if (localStorage.getItem("recepti") == null) {
        recepti = [
            {
                id: generateUUID(),
                korisnik: "vlade",
                naziv: "Rafaelo kuglice",
                tezina: 5,
                vrsta: "Uzina",
                vreme: "0:20",
                sadrzaj: "Zagrejte vodu i u nju dodajte secer i margarin.Kada voda provri u nju dodajte mleko u prahu, 200g kokosovog brasna, i vanilin secer pa iskljucite sporet. Sve dobro umesajte pa ostavite da se ohladi. Od smese napravite kuglice tako sto cete u sredinu staviti badem pa onda sve uvaljati u preostalo kokosovo brasno.",
                ocene :  [
                    {ocena: 5 , korisnik: "slavko"},
                    {ocena: 5 , korisnik: "janko"},
                    {ocena: 4 , korisnik: "marko"}
                ],
                prosecnaocena : 4.67,
                komentari : [
                    {tekst : "Odlicno" , korisnik: "marko"}
                ],
                sastojci: [
                    {sastojak: "Mleko u prahu" , kolicina: "400g"},
                    {sastojak: "Kokosovo brasno" , kolicina: "250g"},
                    {sastojak: "Margarin" , kolicina: "250g"},
                    {sastojak: "Secer" , kolicina: "300g"},
                    {sastojak: "Vanilin secer" , kolicina: "5g"},
                    {sastojak: "Bademi" , kolicina: "250g"},
                    {sastojak: "Voda" , kolicina: "200ml"}
                ],
                slike: [
                    "./images/rafaelokuglice1.jpg" , "./images/rafaelokuglice2.jfif" 
                ]
            },
            {
                id: generateUUID(),
                korisnik: "vlade",
                naziv: "Slani rolat od spanaca",
                tezina: 5,
                vrsta: "Uzina",
                vreme: "0:40",
                sadrzaj: "Umutiti jaja sa Zacinom C iz baste.Spanac skuvajte, dobro ocedite i iseckajte, pa dodajte u jaja.U smesu dodati brasno i prasak za pecivo.Stavite na pek papir u pleh, i ispecite u rerni.Kad se kora ispece, odmah je zavijte sa pek papirom i ostaviti da se ohladi.Kad se ohladi, rolat odvijte i premazite krem sirom, preko toga izrandajte jaje.Preko poredjajte sunkaricu, premazite krem sirom opet, pa preko toga stavite kackavalj.Savijte u rolat i iseckajte.",
                ocene :  [
                    {ocena: 1 , korisnik: "slavko"},
                    {ocena: 2 , korisnik: "janko"},
                    {ocena: 2 , korisnik: "marko"}
                ],
                prosecnaocena : 1.67,
                komentari : [
                    {tekst : "Bas je loseg ukusa" , korisnik: "janko"},
                    {tekst : "Ni meni se ne svidja" , korisnik: "slavko"}
                ],
                sastojci: [
                    {sastojak: "Jaja" , kolicina: "5"},
                    {sastojak: "Zacin C Mesani" , kolicina: "2g"},
                    {sastojak: "Spanac" , kolicina: "500g"},
                    {sastojak: "Brasno" , kolicina: "50g"},
                    {sastojak: "Prasak za pecivo" , kolicina: "6g"},
                    {sastojak: "Krem sir" , kolicina: "200g"},
                    {sastojak: "Jaje" , kolicina: "1"},
                    {sastojak: "Sunka" , kolicina: "100g"}
                ],
                slike: [
                    "./images/slanirolatspanac1.jpeg" 
                ]
            },
            {
                id: generateUUID(),
                korisnik: "vlade",
                naziv: "Kakao kocke",
                tezina: 3,
                vrsta: "Dezert",
                vreme: "0:50",
                sadrzaj: "Mikserom izmesajte mleko, secer, ulje i kakao, pa podelite na dva dela i jedan deo ostavite za fil.U drugi deo dodajte jaja, brasno, prasak za pecivo, C cimet i vanilin secer. Izmesajte i stavite u nauljenu tepsiju.Pecite u zagrejanoj rerni na 180 stepeni 20 minuta.Sacekajte da se ohladi i isecite na tri kore.Izmedju kora namazite filom, a od gore pospite glazurom. Ostavite da odstoji 2h pre posluzivanja.",
                ocene :  [
                    {ocena: 4 , korisnik: "slavko"}
                ],
                prosecnaocena : 4,
                komentari : [],
                sastojci: [
                    {sastojak: "Mleko" , kolicina: "200ml"},
                    {sastojak: "Secer" , kolicina: "150g"},
                    {sastojak: "Ulje suncokreta" , kolicina: "1 sup. Kasika"},
                    {sastojak: "Kakao u prahu" , kolicina: "4 sup. Kasika"},
                    {sastojak: "Jaja" , kolicina: "2"},
                    {sastojak: "Brasno" , kolicina: "200g"},
                    {sastojak: "Prasak za pecivo" , kolicina: "12g"},
                    {sastojak: "Vanilin secer" , kolicina: "5g"},
                    {sastojak: "C - cimter u prahu" , kolicina: "4g"}
                ],
                slike: [
                    "./images/kakaokocke1.jpeg" ,  "./images/kakaokocke2.jpg"
                ]
            },
            {
                id: generateUUID(),
                korisnik: "janko",
                naziv: "Baklava",
                tezina: 4,
                vrsta: "Dezert",
                vreme: "0:55",
                sadrzaj: "Pomesajte samlevene orahe i 100g secera a zatim u pleh krenite da redjate: 2 kore, pa mesavinu secara i orah i tako redom dok ne ispunite pleh.Isecite baklavu na kockice ili trouglice.Ulje i margarin zajedno rastopiti u manjem loncu i zatim isecenu baklavu preliti, pa ostaviti 10-ak minuta da baklava upije masnocu.Baklavu peci na 180c dok ne dobije zlatnu boju.Napraviti preliv za baklavu od mesavine vode, secera i soka od dva limuna, preliv kuvati na laganoj vatri 7 do 10 minuta od trenutka kad prokljuca.Prohladjenu baklavu preliti prelivom i ostaviti da odstoji.",
                ocene :  [
                    {ocena: 5 , korisnik: "vlade"},
                    {ocena: 5 , korisnik: "slavko"},
                    {ocena: 5 , korisnik: "marko"}
                ],
                prosecnaocena : 5,
                komentari : [
                    {tekst : "Izvrsno." , korisnik: "janko"},
                    {tekst : "Izvandredno." , korisnik: "vlade"},
                    {tekst : "Moram jos da dodam, najbolje nase domace slatko jelo." , korisnik: "vlade"}
                ],
                sastojci: [
                    {sastojak: "Orah" , kolicina: "500g"},
                    {sastojak: "Margarin" , kolicina: "250g"},
                    {sastojak: "Secer" , kolicina: "450g"},
                    {sastojak: "Flasirana voda" , kolicina: "5 solji"},
                    {sastojak: "Limun" , kolicina: "2"},
                    {sastojak: "Lisnata kora" , kolicina: "500g"},
                ],
                slike: [
                    "./images/baklava1.jpg" ,  "./images/baklava2.jpg", "./images/baklava3.jfif"
                ]
            },
            {
                id: generateUUID(),
                korisnik: "slavko",
                naziv: "Minestrone supa",
                tezina: 3,
                vrsta: "Predjelo",
                vreme: "0:36",
                sadrzaj: "Sitno naseckajte luk i beli luk, a sargarepu i tikvice isecite na kocke.Prodinstajte luk na maslinovom ulju, dodajte sargarepu, pa nakon kratkog przenja prelijte sa sokom od paradajza. Ostavite da se sve zajedno ukrcka narednih 10-ak minuta.Posolite, dodajte sadrzaj C minestrone supe, dodajte 1l vode, dodajte kukuruz, pa sve zajedno prokuvajte narednih 15 minuta.Po zelji mozete dodati i origano, bosiljak, persun, ili dekorisati svezim zacinima.",
                ocene :  [
                    {ocena: 5 , korisnik: "marko"},
                    {ocena: 5 , korisnik: "vlade"},
                    {ocena: 4 , korisnik: "janko"}
                ],
                prosecnaocena : 4.66,
                komentari : [
                    {tekst : "Malo je supa nezacinjena. Ali sem toga bas je osvezavajuce" , korisnik: "janko"}
                ],
                sastojci: [
                    {sastojak: "Tikvice" , kolicina: "200g"},
                    {sastojak: "Sargarepa" , kolicina: "150g"},
                    {sastojak: "Kukuruz iz konzerve" , kolicina: "100g"},
                    {sastojak: "Luk" , kolicina: "200g"},
                    {sastojak: "Beli luk" , kolicina: "2 cesanja"},
                    {sastojak: "Paradajz sos" , kolicina: "100ml"},
                    {sastojak: "Maslinovo ulje" , kolicina: "10ml"},
                    {sastojak: "C minestrone supa s testeninom" , kolicina: "1 kesica"}
                ],
                slike: [
                    "./images/minestronesupa1.jpg" ,  "./images/minestronesupa2.jfif"
                ]
            },
            {
                id: generateUUID(),
                korisnik: "vlade",
                naziv: "Pileca supa",
                tezina: 1,
                vrsta: "Predjelo",
                vreme: "0:23",
                sadrzaj: "Skuvajte C super supu po uputstvu sa kesise.Dodajte povrce.Hleb zapecite na malo maslinovog ulja sa obe strane, te dodajte naseckanu mocarelu i sacekajte da se otopi.Posluzite!",
                ocene :  [],
                prosecnaocena : 0,
                komentari : [],
                sastojci: [
                    {sastojak: "C pileca supa" , kolicina: "1 kesica"},
                    {sastojak: "Hleb" , kolicina: "3 kriske"},
                    {sastojak: "Mocarela" , kolicina: "50g"},
                    {sastojak: "Persun" , kolicina: "3 grancice"},
                    {sastojak: "Grasak" , kolicina: "50g"},
                    {sastojak: "Sargarepa" , kolicina: "50g"},
                    {sastojak: "Maslinovo ulje" , kolicina: "2 sup. Kasike"}
                ],
                slike: [
                    "./images/pilecasupa1.jfif" ,  "./images/pilecasupa2.jpg"
                ]
            },
            {
                id: generateUUID(),
                korisnik: "marko",
                naziv: "Pasulj",
                tezina: 2,
                vrsta: "Glavno jelo",
                vreme: "1:17",
                sadrzaj: "Pasulj stavite u lonac, nalijte hladnom vodom i kuvajte do kljucanja. Ocedite pasulj i nalijte vrelom vodom, pa kuvajte dok ne omeksa, ali ne i da se raspadne. Nakon toga ga ponovo ocedite.Dok se pasulj kuva, prodinstajte crni luk na delu ulja, pa dodajte so, biber i tucanu papriku po ukusu.Skuvani pasulj proprzite u serpi na ostatku ulja zajedno sa lukom. Dodajte malo vode. Sve ukrckajte do kljucanja.Dodajte iseckan beli luk i paradajz, pa sve stavite u vatrostalnu ciniju, prethodno podmazanu uljem.Pasulj zapecite u rerni na 200 stepeni 30 minuta. ",
                ocene : [
                    {ocena: 5 , korisnik: "vlade"},
                    {ocena: 4, korisnik: "janko"}
                ],
                prosecnaocena : 4.5,
                komentari : [
                    {tekst : "Izvrsno" , korisnik: "vlade"}
                ],
                sastojci: [
                    {sastojak: "Beli pasulj" , kolicina: "500g"},
                    {sastojak: "Suncokretovo ulje" , kolicina: "30g"},
                    {sastojak: "Luk" , kolicina: "1kg"},
                    {sastojak: "Cena belog luka" , kolicina: "3"},
                    {sastojak: "Lovorov list" , kolicina: "1g"},
                    {sastojak: "Mleveni crni biber" , kolicina: "5g"},
                    {sastojak: "Paradajl" , kolicina: "200g"}
                ],
                slike: [
                    "./images/pasulj1.jfif" ,  "./images/pasulj2.jfif"
                ]
            },
            {
                id: generateUUID(),
                korisnik: "marko",
                naziv: "Pasta sa slaninom i karfiolom",
                tezina: 1,
                vrsta: "Glavno jelo",
                vreme: "0:50",
                sadrzaj: "U veliki tiganj sipajte malo slane vode i zagrejte dok ne prokljuca. Ubacite slaninu na 5 minuta, dok ne postane hrskava. Iscedite je od viska masti i isecite na sitne komadice.Skuvajte pastu po uputstvu sa kesice. Dodajte karfiol u pastu u poslednjih 8 minuta kuvanja dok ne postane mekan. Procedite, ali sacuvajte 2 supene kasice vode u kojoj ste kuvali.Otopite puter u manjem tiganju na laganoj vatri, lagano mesajte, dodajte brasno i kuvajte par minuta. Postepeno dodajte mleko, uz dobro mesanje prilikom svakog dodavanja. Kuvajte par minuta dok ne postane gusto. Dodajte senf i polovinu narendanog sira. Mesajte dok se sir ne otopi a sos postane gladak.Ubacite pastu i karfiol u tiganj sa puterom i dodajte vodu od kuvanja. Mesajte sve zajedno, dodajte slaninu i razdrobljenu zemicku, a zatim sve prespite sa preostalim sirom u sud za pecenje i stavite u rernu da se zapece (pasta treba da dobije braon boju).",
                ocene : [
                    {ocena: 2 , korisnik: "vlade"},
                    {ocena: 5, korisnik: "janko"}
                ],
                prosecnaocena : 3.5,
                komentari : [
                    {tekst : "Ima cudan neki ukus. Ne svidja mi se bas." , korisnik: "vlade"}
                ],
                sastojci: [
                    {sastojak: "Slanina" , kolicina: "200g"},
                    {sastojak: "Pasta" , kolicina: "300g"},
                    {sastojak: "Karfiol" , kolicina: "1 glava"},
                    {sastojak: "Puter" , kolicina: "25g"},
                    {sastojak: "Psenicno brasno" , kolicina: "25g"},
                    {sastojak: "Mleko" , kolicina: "300g"},
                    {sastojak: "C Senf" , kolicina: "1 sup. Kasika"},
                    {sastojak: "Ostri (Punomasni) Cedar" , kolicina: "140g"}
                ],
                slike: [
                    "./images/pastasakarfiolom1.jpg" ,  "./images/pastasakarfiolom2.jpg"
                ]
            }
        ]
    
        localStorage.setItem("recepti", JSON.stringify(recepti))
    }
})

