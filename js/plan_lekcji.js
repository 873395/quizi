let kolor;
let r;
let g;
let bb;
let zaokraglenie;
let lekcje=[
    "poniedzialek","wtorek","środa","czwartek","piątek"
]

let tabela=document.createElement('table');
tabela.id="tabela_plan_lekcji";
plan_lekcji.appendChild(tabela);

for(let i=0;i<5;i++)
        {
            let kolumna=document.createElement('tr');
            kolumna.id="kolumna";
                 for(let d=0;d<5;d++)
                 {
                     let rzad=document.createElement('td');
                     rzad.id="rzad";
                     rzad.innerHTML=`rzad${d}`;
                     kolumna.appendChild(rzad);
                            r=Math.floor(Math.random()*255+1);
                            g=Math.floor(Math.random()*255+1);
                            bb=Math.floor(Math.random()*255+1);
                            rzad.innerHTML=kolor;
                            kolor=`rgb(${r},${g},${bb})`;
                            rzad.style.backgroundColor=kolor;
                            zaokraglenie=Math.floor(Math.random()*50+1);
                            rzad.style.borderRadius=`${zaokraglenie}px`;
                            rzad.style.color=`rgb(${255-r},${255-g},${255-bb})`;

            

                 }
            tabela_plan_lekcji.appendChild(kolumna);
        }