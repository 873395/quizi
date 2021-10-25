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

function wczytaj_czas()
{
    start=0;
    a=wartoscSekundy.value;
    if(a<0 || a>59){a=0};
    b=wartoscMinuty.value;
    if(b<0 || b>59){b=0};
    c=wartoscGodziny.value;
    if(c<0 || c>23){b=0};
    odliczanie();
}

function odliczanie()
{
    if(a<10){jsek=`0${a}`}else{jsek=a};
    if(b<10){jmin=`0${b}`}else{jmin=b};
    if(c<10){jgod=`0${c}`}else{jgod=c};
    if(jgod==0){koniec=`${jmin} : ${jsek}`}
    if(jgod==0&&jmin==0){koniec=`${jsek}`}
    zegar_napis.innerHTML=koniec;
    a--;
    if(start%2==0)
   {
    if(a<0){
        a=59;
        b--;
    };
    if(b<0)
    {
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
    }
    setTimeout(odliczanie,1000); 
   };
}

function stop()
{
    zegar_napis.innerHTML='00:00:00';
    let utwur = document.createElement('audio');
    utwur.src='muzyka.mp3';
    utwur.volume='0.7';
    utwur.play();
    body.appendChild(utwur);
    start++;
}


