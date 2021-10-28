let czas_animacji=1000;

function ch_site(chsite)
{
    if(chsite==1)
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
    if(chsite==2)
    {
        sl_div.className="sl_div_anim";
        setTimeout(function(){
            sl_div.classList.remove("sl_div_anim");
            window.open("timer.html","_self");
        },czas_animacji)
    setTimeout(function(){
        sl_div.className="sl_div_anim_rew";
        sl_div.classList.remove("sl_div_anim_rew");
    },czas_animacji)
    }
    if(chsite==3)
    {
        sl_div.className="sl_div_anim";
            setTimeout(function(){
                sl_div.classList.remove("sl_div_anim");
                window.open("radio.html","_self");
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