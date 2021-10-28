    let akt_zdj=0;
    let zdjecie = document.getElementById("c_box_img_1");
    
    function czas_wczytaj()
    {
        akt_zdj++;
        if(akt_zdj>=zdj_lista.length)
        {
            akt_zdj=0;
        }
        zdjecie.src=zdj_lista[akt_zdj];
        setTimeout(czas_wczytaj,10000);
    }


    