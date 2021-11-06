for(let xx=0;xx<co_nowego.length;xx++)
{
    let info_pojemnik=document.createElement("div");
    let info_naglowek=document.createElement("div");
    let info_opis=document.createElement("div");
    let info_data=document.createElement("div");
    let info_wersja=document.createElement("div");
    if(xx!=0)
    {
        info_pojemnik.className="info_blok";
    info_naglowek.className="info_naglowek";
    info_opis.className="info_opis";
    info_data.className="info_data";
    info_wersja.className="info_wersja";
        info_naglowek.innerHTML=co_nowego[xx][0]
        info_opis.innerHTML=co_nowego[xx][1]
        info_data.innerHTML=co_nowego[xx][2]
        info_wersja.innerHTML=co_nowego[xx][3]
    info_pojemnik.appendChild(info_naglowek);
    info_pojemnik.appendChild(info_opis);
    info_pojemnik.appendChild(info_data);
    info_pojemnik.appendChild(info_wersja);
    info_box.appendChild(info_pojemnik);
    }
    else
    {
        nowe_naglowek.innerHTML=co_nowego[0][0];
        nowe_opis.innerHTML=co_nowego[0][1];
        nowe_reszta.innerHTML="data: "+co_nowego[0][2]+"<br>"+" wersja: "+co_nowego[0][3];

    }
}