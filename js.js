 
    function encriptar(){
    let prueba = document.getElementById("fullName").value;
    let encriptado=[];
    let encriptadoDos;
   
       for(let i = 0;i<prueba.length;i++){
           if(prueba[i]=="a"){
               encriptado[i]="ai";
               //break;
           }
           else if(prueba[i]=="e"){
               encriptado[i]="enter";
               //break;
           }
           else if(prueba[i]=="i"){
               encriptado[i]="imes";
               //break;
           }
           else if(prueba[i]=="o"){
               encriptado[i]="ober";
               //break;
           }
           else if(prueba[i]=="u"){
               encriptado[i]="ufat";
               //break;
           }
           else{
               encriptado[i]=prueba[i];
           }
       }
       
       encriptadoDos = encriptado.toString();
       
        document.getElementById("displayName").innerHTML = encriptadoDos.replace(/,/g, "");
       }
   
       function limpiar(){
           document.getElementById("fullName").value = "";
       }
   
       function desencriptar()