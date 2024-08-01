
# Encriptador/Desencriptador de Texto

## Descripción

Este es un proyecto de encriptador y desencriptador de texto que transforma el texto en un formato codificado y viceversa. Está diseñado para ser una herramienta simple y útil para encriptar mensajes en una serie de sustituciones predefinidas. Ideal para practicar habilidades en HTML, CSS y JavaScript.

## Índice

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Funcionalidad](#funcionalidad)

## Características

- Encriptar texto usando un conjunto de reglas definidas.
- Desencriptar texto para revertir el proceso de encriptación.
- Copiar el texto encriptado/desencriptado al portapapeles.
- Diseño responsivo que se adapta a diferentes tamaños de pantalla.

## Tecnologías

- HTML5
- CSS3
- JavaScript ES6
- [Visual Studio Code](https://code.visualstudio.com/) (editor de código recomendado)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/encriptador-desencriptador.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd encriptador-desencriptador
   ```
3. Abre el archivo `index.html` en tu navegador para ver la aplicación en acción.

## Uso

1. Abre el archivo `index.html` en tu navegador.
2. Introduce el texto que deseas encriptar en el área de texto de entrada.
3. Haz clic en el botón **"Encriptar"** para transformar el texto en el formato codificado.
4. Para revertir el proceso, haz clic en el botón **"Desencriptar"**.
5. Puedes copiar el texto encriptado o desencriptado usando el botón **"Copiar"**.

## Funcionalidad
  
- `Función encriptar`: Obtiene el texto del campo "textoEntrada", lo encripta reemplazando vocales con secuencias específicas, y muestra el resultado en "textoSalida". Llama a funciones para actualizar la visualización y el botón de copiar.
- `Función desencriptar`: Obtiene el texto encriptado del campo "textoEntrada", lo desencripta reemplazando las secuencias con las vocales originales, y muestra el resultado en "textoSalida". Actualiza la visualización y el botón de copiar.
- `Función mostrarTextoEncriptado`: Oculta el contenido original y hace que el campo de texto encriptado ocupe todo el espacio disponible.
- `Función copiarTexto`: Copia el texto del campo "textoSalida" al portapapeles y actualiza el texto del botón de copiar para indicar el éxito. Maneja errores en caso de fallo.
- `Función toggleCopiarButton`: Muestra u oculta el botón de copiar basado en si el campo "textoSalida" está vacío o no.
