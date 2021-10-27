 let zdj_lista=[
        "https://cdna.artstation.com/p/assets/images/images/041/781/798/large/adrian-ziajor-1kd.jpg?1632682582",
        "https://cdna.artstation.com/p/assets/images/images/041/781/806/large/adrian-ziajor-3kd.jpg?1632682596",
        "https://cdna.artstation.com/p/assets/images/images/041/781/812/large/adrian-ziajor-4kd.jpg?1632682603",
        "https://cdnb.artstation.com/p/assets/images/images/041/781/879/large/adrian-ziajor-1krd.jpg?1632682755",
        "https://cdnb.artstation.com/p/assets/images/images/041/781/889/large/adrian-ziajor-2krn.jpg?1632682776",
        "https://cdnb.artstation.com/p/assets/images/images/041/781/941/large/adrian-ziajor-1lzd.jpg?1632682899",
        "https://cdnb.artstation.com/p/assets/images/images/041/781/983/large/adrian-ziajor-2pkd.jpg?1632682957",
        "https://cdna.artstation.com/p/assets/images/images/041/782/036/large/adrian-ziajor-1sakdd.jpg?1632683037",
        "https://cdna.artstation.com/p/assets/images/images/041/782/074/large/adrian-ziajor-1sd.jpg?1632683102",
        "https://cdna.artstation.com/p/assets/images/images/041/782/078/large/adrian-ziajor-2sd.jpg?1632683109",
        "https://cdnb.artstation.com/p/assets/images/images/041/782/083/large/adrian-ziajor-4sd.jpg?1632683122",
        "https://cdnb.artstation.com/p/assets/images/images/041/782/271/large/adrian-ziajor-1.jpg?1632683553",
        "https://cdna.artstation.com/p/assets/images/images/041/782/288/large/adrian-ziajor-4.jpg?1632683573",
    ];
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


    