let l_stac_rad = 0;
for(l_stac_rad=0;l_stac_rad<tab_stac_rad.length;l_stac_rad++)
{
        let radio_pojemnik=document.createElement("div");
        radio_pojemnik.id="pojemnik_stacja";
        radio_pojemnik.className="pojemnik_stacja";
            let radio_naglowek=document.createElement("div");
            radio_naglowek,id="radio_naglowek";
            radio_naglowek.className="nagl_stac_rad";
                let radio_logo=document.createElement("img");
                radio_logo.id="radio_logo";
                radio_logo.className="stacja_loga";
                    let radio_tresc=document.createElement("div");
                    radio_tresc.id="radio_tresc";
                    radio_tresc.className="stac_rad_tresc";
                        let radio_guzik=document.createElement("div");
                        radio_guzik.id="radio_guzik";
                        radio_guzik.className="guzik_wybierz";
        radio_guzik.innerHTML="ODTWÓRZ";
        radio_guzik.stacja=l_stac_rad;
        radio_guzik.addEventListener('click',wybierz_stacje,false)
        radio_naglowek.innerHTML=tab_stac_rad[l_stac_rad][0];
        radio_tresc.innerHTML=tab_stac_rad[l_stac_rad][3];
        radio_logo.src=tab_stac_rad[l_stac_rad][2];

        radio_pojemnik.appendChild(radio_naglowek);
        radio_pojemnik.appendChild(radio_tresc);
        radio_pojemnik.appendChild(radio_logo);
        radio_pojemnik.appendChild(radio_guzik);
        radio_poj_stacja.appendChild(radio_pojemnik);
}

function wybierz_stacje(e)
{
    let pokaz=document.createElement('div');
    pokaz.id="licznik_czasu";
    pokaz.innerHTML="3s";
    audio_radio.appendChild(pokaz);

    let tak = e.currentTarget.stacja;
    audio_radio.style.backgroundImage = `url('${tab_stac_rad[tak][2]}')`;
    audio_radio.style.backgroundImage
    audio_radio.style.backgroundSize="cover";
    audio_radio.style.backgroundPosition="center";
    audio_radio.src=tab_stac_rad[tak][1];
    audio_radio.volume="0.02";
    audio_radio.setAttribute('crossorigin', 'anonymous');
    clt_2.innerHTML=tab_stac_rad[tak][0];
    setTimeout(graj,3000);
}
let czas=3;
function odlicznik()
{
    if(czas==0)
    {
        graj();
    }
    licznik_czasu.innerHTML=`${czas}s`;
    czas--;
    setTimeout(odlicznik,1000);
}

function graj()
{
    audio_radio.play();
}