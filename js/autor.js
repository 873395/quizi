for(qq=0;qq<inf_autor.length;qq++)
{
    let poj_autor=document.createElement("div");
    let poj_nagloek=document.createElement("div");
    let poj_tresc=document.createElement("div");
    poj_autor.className="content_autor";
    poj_nagloek.className="autor_naglowek";
    poj_tresc.className="autor_tresc";
            poj_nagloek.innerHTML=inf_autor[qq][0];
            poj_tresc.innerHTML=inf_autor[qq][1];
        poj_autor.appendChild(poj_nagloek);
        poj_autor.appendChild(poj_tresc);
    content_box_3.appendChild(poj_autor);
}