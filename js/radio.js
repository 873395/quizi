let l_stac_rad = 0;
for(l_stac_rad=0;l_stac_rad<tab_stac_rad.length;l_stac_rad++)
{
        let st_naglowek=tab_stac_rad[l_stac_rad][0];
        let st_tresc=tab_stac_rad[l_stac_rad][3];
        let st_link=tab_stac_rad[l_stac_rad][1];
        let st_ico=tab_stac_rad[l_stac_rad][2];
    let stacja_radiowa=document.createElement("div");
    stacja_radiowa.id="stacja_kontener";
    stacja_radiowa.className="pojemniki_stacje";
        let stac_rad_nagl=document.createElement('div');
        stac_rad_nagl.id=`stac_rad_nag${l_stac_rad}`;
        stac_rad_nagl.className="nagl_stac_rad elem_obok_sieb";
        stacja_radiowa.appendChild(stac_rad_nagl);
            let stac_rad_logo=document.createElement('img');
            stac_rad_logo.src=st_ico;
            stac_rad_logo.className="stacja_loga elem_obok_sieb";
            content_radio.appendChild(stac_rad_logo);
                let stac_rad_tresc=document.createElement('div');
                stac_rad_tresc.id=`stac_tresc${l_stac_rad}`;
                stac_rad_tresc.className="stac_rad_tresc";
                stac_rad_tresc.innerHTML=st_tresc;
                stacja_radiowa.appendChild(stac_rad_tresc);
                    let guzik_wybierz=document.createElement('input');
                    guzik_wybierz.type="submit";
                    guzik_wybierz.id=`guzik_wybieranie${l_stac_rad}`;
                    guzik_wybierz.className="guziki_wybierz";
                    guzik_wybierz.value="WYBIERZ STACJĘ";
                    guzik_wybierz.stacja=`${l_stac_rad}`;
                    guzik_wybierz.addEventListener('click',wybierz_stacje,false);
                    stacja_radiowa.appendChild(guzik_wybierz);
    content_radio.appendChild(stacja_radiowa);
    stac_rad_nagl.innerHTML=`${st_naglowek}`;
}

function wybierz_stacje(e)
{
    let tak = e.currentTarget.stacja;
    audio_radio.style.backgroundImage = `url('${tab_stac_rad[tak][2]}')`;
    audio_radio.style.backgroundImage
    audio_radio.style.backgroundSize="cover";
    audio_radio.style.backgroundPosition="center";
    audio_radio.src=tab_stac_rad[tak][1];
    audio_radio.volume="0.02";
    audio_radio.play();
    clt_2.innerHTML=tab_stac_rad[tak][0];
}