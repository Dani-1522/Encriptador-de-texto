function encriptar() {
  const textoOriginal = document.getElementById("textoEntrada").value;
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

  document.getElementById("textoSalida").value = textoEncriptado;
  mostrarTextoEncriptado();
  toggleCopiarButton();
}

function desencriptar() {
  const textoEncriptado = document.getElementById("textoEntrada").value;

  let textoDesencriptado = textoEncriptado.replace(/enter/g, 'e')
                                          .replace(/imes/g, 'i')
                                          .replace(/ai/g, 'a')
                                          .replace(/ober/g, 'o')
                                          .replace(/ufat/g, 'u');

  document.getElementById("textoSalida").value = textoDesencriptado;
  mostrarTextoEncriptado();
  toggleCopiarButton();
}

function mostrarTextoEncriptado() {
  const contenidoDiv = document.querySelector(".seccion__salida__contenido");
  const textoEncriptadoElem = document.getElementById("textoSalida");

  contenidoDiv.classList.add("hidden");
  textoEncriptadoElem.classList.add("fullscreen");
}

function copiarTexto() {
  const textoCopiado = document.getElementById("textoSalida");
  const btnCopiar = document.getElementById("btnCopiar");

  navigator.clipboard.writeText(textoCopiado.value)
      .then(() => {
          btnCopiar.textContent = "¡Copiado!";
          setTimeout(() => {
              btnCopiar.textContent = "Copiar";
          }, 2000);
      })
      .catch(err => {
          console.error("Error al copiar el texto: ", err);
      });
}

function toggleCopiarButton() {
  const textoEncriptado = document.getElementById("textoSalida").value;
  const btnCopiar = document.getElementById("btnCopiar");

  if (textoEncriptado.trim() !== "") {
      btnCopiar.style.display = "block";
  } else {
      btnCopiar.style.display = "none";
  }
}
function ajustarAlturaTextarea(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight) + "px";
}

// Añadir evento para ajustar la altura del textarea cuando se añade texto
document.getElementById("textoSalida").addEventListener("input", function() {
    ajustarAlturaTextarea(this);
});






