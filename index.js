const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const textoEncriptar = document.querySelector(".tetxo-encriptar");
const textoAviso = document.querySelector(".texto-aviso");
const resultado = document.querySelector(".mensaje-encriptado");
const contenidoTarjeta = document.querySelector(".tarjeta");
const botonCopiar = document.querySelector(".btn-copiar");

botonEncriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    console.log(texto);
    let text=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    console.log(text);
    console.log(texto);

    if(texto == ""){
        textoAviso.style.background = "#ff0000";
        textoAviso.style.color = "#ffff";
        textoAviso.style.fontWigth = "800";
        textoAviso.textContent = "El campo no puede estar vacio";

        setTimeout(()=>{    
            textoAviso.removeAttribute("style")},1500);
    }

    else if(texto !== text){
        textoAviso.style.background = "#ff0000";
        textoAviso.style.color = "#ffff";
        textoAviso.style.fontWigth = "800";

        setTimeout(()=>{    
            textoAviso.removeAttribute("style")},1500);
    }
    else if(texto !== texto.toLowerCase()){
        textoAviso.style.background = "#ff0000";
        textoAviso.style.color = "#ffff";
        textoAviso.style.fontWigth = "800";

        setTimeout(()=>{    
            textoAviso.removeAttribute("style")},1500);

    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        resultado.innerHTML = texto;
        contenidoTarjeta.remove();
        botonCopiar.style.visibility = "inherit";
    }
})

botonDesencriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    console.log(texto);
    let text=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    console.log(text);
    console.log(texto);

    if(texto == ""){
        textoAviso.style.background = "#ff0000";
        textoAviso.style.color = "#ffff";
        textoAviso.style.fontWigth = "800";
        textoAviso.textContent = "El campo no puede estar vacio";

        setTimeout(()=>{    
            textoAviso.removeAttribute("style")},1500);
    }

    else if(texto !== text){
        textoAviso.style.background = "#ff0000";
        textoAviso.style.color = "#ffff";
        textoAviso.style.fontWigth = "800";

        setTimeout(()=>{    
            textoAviso.removeAttribute("style")},1500);
    }
    else if(texto !== texto.toLowerCase()){
        textoAviso.style.background = "#ff0000";
        textoAviso.style.color = "#ffff";
        textoAviso.style.fontWigth = "800";

        setTimeout(()=>{    
            textoAviso.removeAttribute("style")},1500);

    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        resultado.innerHTML = texto;
        contenidoTarjeta.remove();
        botonCopiar.style.visibility = "inherit";
    }
});

botonCopiar.addEventListener("click",e=>{
    e.preventDefault();
    let copiar = resultado;
    copiar.select();
    document.execCommand("copy");

});