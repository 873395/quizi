let rozsuniente=0;

let somediv=document.createElement('div');
    somediv.id="szer_menu";
    content_box.appendChild(somediv);
        let naglowek=document.createElement('div');
        naglowek.id="menu_naglowek";
        naglowek.innerHTML="Serwis Quizowy - QUIZI";
        szer_menu.appendChild(naglowek);
            let menu_timer=document.createElement('div');
            menu_timer.id="menu_klikalnik_czas";
            menu_timer.innerHTML="czas";
            szer_menu.appendChild(menu_timer);

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