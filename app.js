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
  
    document.getElementById("textoEncriptado").value = textoEncriptado;
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
  
    document.getElementById("textoEncriptado").value = textoDesencriptado;
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
  