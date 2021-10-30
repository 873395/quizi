let czas_animacji=1000;

for(let licz_opcji=0;licz_opcji<guziki_menu.length;licz_opcji++)
{
    let menu_opcja=document.createElement('img');
    menu_opcja.id='Op_1';
    menu_opcja.className="menu_OP";
    menu_opcja.src=guziki_menu[licz_opcji][1];
    menu_opcja.addEventListener('click',ch_podstrony,false);
    menu_opcja.stacja=`${licz_opcji}`;
    nav_bar.appendChild(menu_opcja);   
}

function ch_podstrony(f)
{
    let nie = f.currentTarget.stacja;
    console.warn(nie);
    sl_div.className="sl_div_anim";
            setTimeout(function(){
                sl_div.classList.remove("sl_div_anim");
                window.open(`${guziki_menu[nie][2]}`,"_self");
            },czas_animacji)
        setTimeout(function(){
            sl_div.className="sl_div_anim_rew";
            sl_div.classList.remove("sl_div_anim_rew");
        },czas_animacji)
}

function ch_site(chsite)
{
    if(chsite==22)
    {
        sl_div.className="sl_div_anim";
            setTimeout(function(){
                sl_div.classList.remove("sl_div_anim");
                window.open("index.html","_self");
            },czas_animacji)
        setTimeout(function(){
            sl_div.className="sl_div_anim_rew";
            sl_div.classList.remove("sl_div_anim_rew");
        },czas_animacji)
    }
    if(chsite==10)
    {
        window.open("https://www.artstation.com/kubasiak","_blank");
    }
    if(chsite==11)
    {
        window.open("index.html","_self");
    }
    if(chsite==12)
    {
        window.open("index.html","_self");
    }
}