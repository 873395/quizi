let prawidlowa;
let pierwsze;
let poprzednie=0;
let dobrykolor="#00A500";
let zlykolor="#A50000";
let klasa;

let element_zakrywajacy=document.createElement("div");
let okno_komunikatu=document.createElement("div");
let konunikat_naglowek=document.createElement("div");
let kom_guzik=document.createElement("div");
element_zakrywajacy.id="element_zakrywajacy";
    okno_komunikatu.id="okno_komunikatu";
    element_zakrywajacy.appendChild(okno_komunikatu);
        konunikat_naglowek.id="komunikat_naglowek";
        konunikat_naglowek.innerHTML="WYBIERZ KATEGORIĘ PYTAŃ";
        okno_komunikatu.appendChild(konunikat_naglowek);
        elementy_kategoryzujace()
            kom_guzik.id="guzik_wykonaj";
            kom_guzik.innerHTML="WYKONAJ";
            okno_komunikatu.appendChild(kom_guzik);
            kom_guzik.addEventListener('click',ukrywacze,false);
document.body.appendChild(element_zakrywajacy);

function ukrywacze()
{
    let poprzednie_zaznaczenie;
    let random_kat=Math.floor(Math.random()*(op_kategoria.length-0)+0);
    let czy_wszystkie=0;
    for(let qwq=0;qwq<op_kategoria.length;qwq++)
    {
        poprzednie_zaznaczenie=document.getElementById(`menu_dodat_opcja${qwq}`).className;
        let menu_dodat_op=document.createElement("div");
        menu_dodat_op.id=`menu_dodat_opcja${qwq}`;
        menu_dodat_op.className=poprzednie_zaznaczenie;
        menu_dodat_op.innerHTML=`${op_kategoria[qwq]}`;
        menu_dodat_op.ind_opcji=qwq;
        menu_dodat_op.addEventListener('click',podswietlanie_opcji,false);
        menu_dodat.appendChild(menu_dodat_op);
        if(poprzednie_zaznaczenie=="menu_dodat_op_klik"){
            czy_wszystkie++;
        } 
    }
    if(czy_wszystkie==0)
    {
        document.getElementById(`menu_dodat_opcja${random_kat}`).className="menu_dodat_op_klik";
    };
    element_zakrywajacy.remove(); 
    quizz();
}

function elementy_kategoryzujace()
{
    for(let qwq=0;qwq<op_kategoria.length;qwq++)
    {
        let menu_dodat_op=document.createElement("div");
        menu_dodat_op.id=`menu_dodat_opcja${qwq}`;
        menu_dodat_op.className="menu_dodat_op";
        menu_dodat_op.innerHTML=`${op_kategoria[qwq]}`;
        menu_dodat_op.ind_opcji=qwq;
        menu_dodat_op.addEventListener('click',podswietlanie_opcji,false);
        okno_komunikatu.appendChild(menu_dodat_op);
    }
}

function podswietlanie_opcji(ini_op)
{
    let oj=ini_op.currentTarget.ind_opcji;
    klasa=document.getElementById(`menu_dodat_opcja${oj}`).className;
    document.getElementById(`menu_dodat_opcja${oj}`).className="menu_dodat_op_klik";  
    if(klasa=="menu_dodat_op_klik")
    {
        document.getElementById(`menu_dodat_opcja${oj}`).className="menu_dodat_op";
    }
    if(klasa=="menu_dodat_op")
    {
        document.getElementById(`menu_dodat_opcja${oj}`).className="menu_dodat_op_klik";
    }
}

function quizz()
{
    let indeks;
    let zakres=new Array;
    for(let dd=0;dd<pytania.length;dd++)
    {
        for(let ss=0;ss<op_kategoria.length;ss++)
        {
            let posrednia;
            let kkl=document.getElementById(`menu_dodat_opcja${ss}`).className;
            posrednia=op_kategoria[ss];
            if(posrednia==pytania[dd][5]&&kkl=="menu_dodat_op_klik")
            {
                zakres.push(dd);
            }
        }
    }
        let randNum=Math.floor(Math.random()*(zakres.length-0)+0);
        indeks=zakres[randNum];

    for(let rrt=0;rrt<op_kategoria.length;rrt++)
    {
        let kkl=document.getElementById(`menu_dodat_opcja${rrt}`).className;
        let takjakbt;
        if(kkl=="menu_dodat_op_klik")
        {
            // tutaj jest losowe ułożenie pytań
            takjakbt=op_kategoria[rrt];
            if(pytania[indeks][5]==takjakbt)
            {
                let nodp=Math.floor(Math.random()*(3-1)+1);
                let nzmien=Math.floor(Math.random()*(3-1)+1);
                let nowePytania=new Array;
                let litera;
                for(let ipyt=0;ipyt<6;ipyt++)
                {
                    nowePytania[ipyt]=pytania[indeks][ipyt];
                    if(nodp==ipyt)
                    {
                        nowePytania[nodp]=pytania[indeks][nzmien];
                        console.warn(nodp);
                    }
                    if(nzmien==ipyt)
                    {
                        nowePytania[nzmien]=pytania[indeks][nodp];
                        console.warn(nzmien);
                        if(nzmien==1){nowePytania[4]="A"}
                        if(nzmien==2){nowePytania[4]="B"}
                        if(nzmien==3){nowePytania[4]="C"}
                    }
                    
                }
                console.warn(nowePytania[4]);
                nmrPytania.innerHTML=`Pytanie: ${indeks+1}, kategoria: ${pytania[indeks][5]}`;
                TrescPytania.innerHTML=nowePytania[0];
                odpowiedz1.innerHTML=nowePytania[1];
                odpowiedz2.innerHTML=nowePytania[2];
                odpowiedz3.innerHTML=nowePytania[3];
                prawidlowa=nowePytania[4];
            }
        pierwsze=true;
        }
    }
    
    poprzednie=indeks;

    guuzik1.style.border='';
    guuzik2.style.border='';
    guuzik3.style.border='';  
}




let calkowite=0;
let dobre=0;
let odpowiedzi;
function sprawdzenie(numer)
{
    if (!pierwsze) return;
        
     if(numer=='A'){guuzik1.style.borderBottom=`5px solid ${zlykolor}`;} //czerwone
     if(numer=='B'){guuzik2.style.borderBottom=`5px solid ${zlykolor}`;} //czerwone
     if(numer=='C'){guuzik3.style.borderBottom=`5px solid ${zlykolor}`;} //czerwone
     dzwiekOdpowiedziNiedobrej();
     pierwsze=false; //przerwanie

     quiz_poj_nastepne.value="NASTĘPNE";
     if(numer==prawidlowa){
        dzwiekOdpowiedzi();  
         dobre++;        
    }

     if (prawidlowa=="A") {guuzik1.style.borderBottom=`5px solid ${dobrykolor}`; //zielony kolor
     calkowite++;
    }
     if (prawidlowa=="B") {guuzik2.style.borderBottom=`5px solid ${dobrykolor}`;
     calkowite++
    }
     if (prawidlowa=="C") {guuzik3.style.borderBottom=`5px solid ${dobrykolor}`;
     calkowite++;
    }

    odpowiedzi=`Punkty ${dobre} / ${calkowite}`;       //Liczenie liczby punktów
    let srednia=dobre/calkowite;
        let zaokraglona=Math.round(srednia*100)/100;
        kolorek.innerHTML=`ŚREDNIA: ${zaokraglona}`;
        if(srednia<=0.5)
        {
            kolorek.style.color="rgb(255 0 0)";  //czerwony kolor napisu sredniej
        }
        else
        {
            kolorek.style.color="rgb(0 255 0)"; //zielony napis
        };
    opcja2.innerHTML=odpowiedzi;
}

function resetuj()
{
    location.reload();
}

