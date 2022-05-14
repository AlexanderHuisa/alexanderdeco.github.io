// por clase
// const inputTexto = document.querySelector(".inputOne"); 
const mensaje = document.querySelector(".resultado");
// por ID
const textoIngresado = document.querySelector(".area");
const munieco = document.querySelector(".contenedor-munieco");
const h3 = document.querySelector(".contenedor-h3");
const parrafo = document.querySelector(".contenedor-p");

textoIngresado.focus();

function limpiar(){
    mensaje.value = "";
    textoIngresado.value= "";
    textoIngresado.focus();
    munieco.classList.remove("ocultar");
    h3.classList.remove("ocultar");
    parrafo.classList.remove("ocultar");
}

function bEncriptar(){
    if(textoIngresado.value != ""){
        mensaje.value = encriptar(textoIngresado.value);
    }
    else if(textoIngresado.value == ""){
        alert("Ningun texto ingresado para encriptar");
        textoIngresado.focus();    
    }
    
}

function bDesEncriptar(){
    mensaje.value = desEncriptar(textoIngresado.value);
}

function matriz(){
    let matriz =[  
        ["e","enter"],  //fila 0 [0][0,1]
        ["i","imes"],   //fila 1 [1][0,1]
        ["a","ai"],     //fila 2 [2][0,1]
        ["o","ober"],   //fila 3 [3][0,1]
        ["u","ufat"]    //fila 4 [4][0,1]
    ];

    return matriz;
}

function encriptar(texto){
    let matrizCode = matriz();
    texto = texto.toLowerCase();  //converir a minuscula
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar"); 

    for (let i = 0; i < matrizCode.length;i++){
        if(texto.includes(matrizCode[i][0])){
            texto = texto.replaceAll(matrizCode[i][0],matrizCode[i][1]);
        }
    }
    return texto;
}

function desEncriptar(texto){
    let matrizCode = matriz(); 
    texto = texto.toLowerCase();  //converir a minuscula

    for (let i = 0; i < matrizCode.length;i++){
        if(texto.includes(matrizCode[i][0])){
            texto = texto.replaceAll(matrizCode[i][1],matrizCode[i][0]);
        }
    }
    return texto;
}

function copiarTexto(){
    var textoAsideAtras = document.querySelector(".p-atras");
    var textArea = document.getElementById("area");
    textArea.value = textoAsideAtras.innerHTML;
    navigator.clipboard.writeText(textoAsideAtras.innerHTML);
    copiar.value = "Copiado!";
    copiar.style.color="darkturquoise";
    swal("Mensaje copiado!", "El mensaje fue copiado y está listo para desencriptar.", "success");
}

function ocultarAdelante(){
    
    munieco.classtist.add(" ocultar");
    h3.classlist.add(" ocultar");
    parrafo.classtist.add(" ocultar");
}

function copiarTexto() {
    mensaje.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    alert("texto copiado!");
}


// let botonEncriptar = document.queryselector(".btn-encriptar");
// let botonDesencriptar = document.querySelector(".btn-desencriptar");
// let munieco = document.querySelector(".contenedor-munieco");
// let h3 = document.querySelector(".contenedor-h3");
// let parrafo = document.querySelector (".contenedor-parrafo");
// let resultado = document.querySelector("#resultado");

//botonEncriptar.onclick = encriptar;

// function encriptar(){
    
//     //ocultarAdelante();
//     alert("encriiptado");
//     resultado.textContent = recuperarTexto();
    
// }
    

// function recuperarTexto(){
//     alert("masa");
//     var area = document.querySelector(".area");
//     return area.value;
// }

