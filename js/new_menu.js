let rozsuniente=0;

let somediv=document.createElement('div');
    somediv.id="szer_menu";
    content_box.appendChild(somediv);
        let naglowek=document.createElement('div');
        naglowek.id="menu_naglowek";
        naglowek.innerHTML="Serwis Quizowy - QUIZI";
        szer_menu.appendChild(naglowek);
            for(let m=0;m<guziki_menu.length;m++)
            {
                let rmenu_opcja=document.createElement('div');
                    rmenu_opcja.id="roz_menu_opcja";
                    rmenu_opcja.className="rmenu_opcje";
                    rmenu_opcja.innerHTML=guziki_menu[m][0];
                    rmenu_opcja.stacja=`${m}`;
                    rmenu_opcja.addEventListener('click',ch_podstrony,false);
                szer_menu.appendChild(rmenu_opcja);
            }


function r_menu()
{
    if(rozsuniente%2==0)
    {
    szer_menu.classList.remove("zwin_menu_anime");
    somediv.className="rozwin_menu_anime";
}
    else
    {
        szer_menu.classList.remove("rozwin_menu_anime");
        szer_menu.className="zwin_menu_anime";
    }
    rozsuniente++;
}
function remove_menu()
{
    szer_menu.remove();
}