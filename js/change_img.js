    let akt_zdj=0;
    let zdjecie = document.getElementById("c_box_img_1");
    
    function czas_wczytaj()
    {
        zdjecie.className="zmiana_zdjecia";
        setTimeout(dodaj_klase,500);
    }

    function dodaj_klase()
    {
        zdjecie.className="zmiana_zdjecia_wycofaj";
        akt_zdj++;
        if(akt_zdj>=zdj_lista.length)
        {
            akt_zdj=0;
        }
        zdjecie.src=zdj_lista[akt_zdj];
        setTimeout(usun_klase,500);
    }
    function usun_klase()
    {
        zdjecie.className="zmiana_zdjecia_wycofaj";
        setTimeout(czas_wczytaj,10000);
    }