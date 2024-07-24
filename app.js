function encriptar() {
    const textoOriginal = document.getElementById("texto").value;
    let textoEncriptado = "";
  
    for (let i = 0; i < textoOriginal.length; i++) {
      switch (textoOriginal[i]) {
        case 'e':
          textoEncriptado += "enter";
          break;
        case 'i':
          textoEncriptado += "imes";
          break;
        case 'a':
          textoEncriptado += "ai";
          break;
        case 'o':
          textoEncriptado += "ober";
          break;
        case 'u':
          textoEncriptado += "ufat";
          break;
        default:
          textoEncriptado += textoOriginal[i];
      }
    }
    const textoEncriptadoElem = document.getElementById("textoEncriptado").value = textoEncriptado;
    mostrarTextoEncriptado();
  }
  
  function desencriptar() {
    const textoEncriptado = document.getElementById("texto").value;
    let textoDesencriptado = "";
  
    // Realizamos la reversión del cifrado
    textoDesencriptado = textoEncriptado.replace(/enter/g, 'e')
                                       .replace(/imes/g, 'i')
                                       .replace(/ai/g, 'a')
                                       .replace(/ober/g, 'o')
                                       .replace(/ufat/g, 'u');
  
    const textoEncriptadoElem = document.getElementById("textoEncriptado").value = textoDesencriptado;
  mostrarTextoEncriptado();
  }
  function mostrarTextoEncriptado() {
    const contenidoDiv = document.querySelector(".main__mostrar__contenido");
    const textoEncriptadoElem = document.getElementById("textoEncriptado");

    contenidoDiv.classList.add("hidden");
    textoEncriptadoElem.classList.add("fullscreen");
}


  function copiarTexto(){
    const textoCopiado =document.getElementById("textoEncriptado");
    const btncopiar = document.getElementById("btnCopiar");
    
    navigator.clipboard.writeText(textoEncriptado.value)
    .then(() => {
      btncopiar.ATTRIBUTE_NODE.textContent = "copiado!";
      btncopiar.classList.add("copiado!");
    })
    .catch(err => {
      console.error("Error al copiar el texto: ", err);
    });
  }
  
