let Sczas;
let Mczas;
let Gczas;
let a=0;
let b=0;
let c=0;
let start=1;
let koniec='';
let jsek='';
let jmin='';
let jgod='';

function stop_guzik()
{
    let guzik_stop=document.createElement('input');
    guzik_stop.type="submit";
    guzik_stop.id="stop_odliczanie";
    guzik_stop.className="guziki_odliczanie";
    guzik_stop.addEventListener('click',stop,true);
    guzik_stop.value="STOP";
    tlo_zegar.appendChild(guzik_stop);
}

function stop()
{
    start_odliczania.value="START";
    start=1;
    dane_sekundy.value='';
    dane_minuty.value='';
    dane_godziny.value='';
    a=0;
    b=0;
    c=0;
    zegar_napis.innerHTML='00:00:00';
    stop_odliczanie.remove();
}

function pobierz_czas()
{
    if(start%2==0){
        start=1;
        start_odliczania.value="START"
        stop_guzik();
    }
    else{
        if(a==0&&b==0&&c==0){
            a=dane_sekundy.value;
            if(a<0 || a>59){a=0};
            b=dane_minuty.value;
            if(b<0 || b>59){b=0};
            c=dane_godziny.value;
            if(c<0 || c>23){b=0};
            start=0;
            start_odliczania.value="PAUZA"
        }
        else{
            start=0;
            start_odliczania.value="PAUZA"
            stop_odliczanie.remove();
        }
    }
    odliczanie();
}

function odliczanie()
{
     if(a<10){jsek=`0${a}`}else{jsek=a};
     if(b<10){jmin=`0${b}`}else{jmin=b};
     if(c<10){jgod=`0${c}`}else{jgod=c};

     if(jgod==0){koniec=`${jmin} : ${jsek}`}
     if(jgod==0&&jmin==0){koniec=`${jsek}`}
     if(jgod>0){koniec=`${jgod}:${jmin}:${jsek}`}
     zegar_napis.innerHTML=koniec;
     if(start%2==0)
    {
        a--;
     if(a<0){
         a=59;
         b--;
     };
     if(b<0){
         b=0;
         if(c<0){c=0}
     };
     if(b==0&&c>0)
     {
         c--;
         b=59;
     };
     if(a==0&&b==0&&c==0)
     {
         stop();
    };
     setTimeout(odliczanie,1000); 
    };
}


