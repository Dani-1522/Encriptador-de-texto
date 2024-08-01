//se crea la funcion encriptar
function encriptar() {
  const textoOriginal = document.getElementById("textoEntrada").value; //se obtiene el texto del campo de entrada.
  let textoEncriptado = ""; //Inicializar la variable para el eexto encriptado.

  for (let i = 0; i < textoOriginal.length; i++) { // Iterar sobre cada carácter del texto original recoriendo cada caracter del texto original.
     
      switch (textoOriginal[i]) {  // se valua cada carácter con un Switch.
                                   //  Reemplazar las vocales por sus versiones encriptadas.
          case 'e':
              textoEncriptado += "enter"; // "case 'e':": Si el carácter actual es 'e', se agrega "enter" a textoEncriptado.
              break;
          case 'i':
              textoEncriptado += "imes"; // "case 'i':": Si el carácter es 'i', se agrega "imes".
              break;
          case 'a':
              textoEncriptado += "ai";//"case 'a':": Si el carácter es 'a', se agrega "ai".
              break;
          case 'o':
              textoEncriptado += "ober";//"case 'o':": Si el carácter es 'o', se agrega "ober".
              break;
          case 'u':
              textoEncriptado += "ufat";//"case 'u':": Si el carácter es 'u', se agrega "ufat".
              break;
          default: // Si el carácter no es ninguna de las vocales especificadas, se agrega el carácter original a textoEncriptado sin cambios
              textoEncriptado += textoOriginal[i];
      }
  }

  document.getElementById("textoSalida").value = textoEncriptado;//establece el valor del campo de salida con el texto encriptado.
  mostrarTextoEncriptado();//Se llaman a las funciones mostrarTextoEncriptado() 
  toggleCopiarButton();//y toggleCopiarButton() para actualizar la interfaz de usuario.
}

function desencriptar() {
  const textoEncriptado = document.getElementById("textoEntrada").value; //se obtiene el texto encriptado del campo de entrada.
  //Utiliza el método replace() para sustituir cada secuencia encriptada por su vocal correspondiente
  let textoDesencriptado = textoEncriptado.replace(/enter/g, 'e') //"enter" se convierte en 'e'.
                                          .replace(/imes/g, 'i')  //"imes" se convierte en 'i'.
                                          .replace(/ai/g, 'a') //"ai" se convierte en 'a'.
                                          .replace(/ober/g, 'o') //"ober" se convierte en 'o'.
                                          .replace(/ufat/g, 'u'); //"ufat" se convierte en 'u'.

  document.getElementById("textoSalida").value = textoDesencriptado; //Se establece el valor del campo de salida con el texto desencriptado.
  mostrarTextoEncriptado(); //Se llaman a las funciones mostrarTextoEncriptado() 
  toggleCopiarButton();//y toggleCopiarButton() para actualizar la interfaz de usuario.
}

function mostrarTextoEncriptado() {
   //Obtiene el elemento que contiene el texto encriptado y el campo de salida.
  const contenidoDiv = document.querySelector(".seccion__salida__contenido");
  const textoEncriptadoElem = document.getElementById("textoSalida");
  //modifica las clases
  contenidoDiv.classList.add("hidden");//Agrega la clase "hidden" al contenedor para ocultarlo.
  textoEncriptadoElem.classList.add("fullscreen");//Agrega la clase "fullscreen" al campo de texto de salida.
}

function copiarTexto() {
  //Obtiene el texto encriptado y el botón de copiar.
  const textoCopiado = document.getElementById("textoSalida");
  const btnCopiar = document.getElementById("btnCopiar");

  navigator.clipboard.writeText(textoCopiado.value) //Utiliza la API navigator.clipboard.writeText() para copiar el texto al portapapeles.
      .then(() => {
          btnCopiar.textContent = "¡Copiado!"; //Si la copia es exitosa, cambia el texto del botón a "¡Copiado!" y lo restablece después de 2 segundos.
          setTimeout(() => {
              btnCopiar.textContent = "Copiar";
          }, 2000);
      })
      .catch(err => {
          console.error("Error al copiar el texto: ", err);//Si hay un error, se muestra en la consola.
      });
}

function toggleCopiarButton() {
//Obtiene el texto encriptado y el botón de copiar y
  const textoEncriptado = document.getElementById("textoSalida").value;
  const btnCopiar = document.getElementById("btnCopiar");
//Comprueba si el campo de salida no está vacío.
  if (textoEncriptado.trim() !== "") {  
      btnCopiar.style.display = "block";
  } else {                        //Si hay texto en el campo de salida, muestra el botón de copiar. Si no, lo oculta.
      btnCopiar.style.display = "none";
  }
}









