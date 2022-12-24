const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar");
const txaIngresoTexto = document.querySelector("#txaIngresoTexto");
const pMostrarTexto = document.querySelector("#pMostrarTexto");
const mensaje = document.querySelector(".mensaje");
const imgTexto = document.querySelector(".imgTexto");
const button_mensaje = document.querySelector(".button-mensaje");
const btnCopiar = document.querySelector("#btnCopiar");

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiar, false);

function encriptar() {
  const p = txaIngresoTexto.value;
  const isImgOff = imgTexto.classList.contains("inactive");

  //console.log(p);

  if (p == "") {
    //console.log("hola");

    if (isImgOff) {
      imgTexto.classList.remove("inactive");
    }

    mensaje.classList.add("inactive");
    button_mensaje.classList.add("inactive");
  } else {
    const e = p.replaceAll("e", "enter");
    const i = e.replaceAll("i", "imes");
    const a = i.replaceAll("a", "ai");
    const o = a.replaceAll("o", "ober");
    const u = o.replaceAll("u", "ufat");

    pMostrarTexto.innerHTML = u;
    //console.log(u);

    mensaje.classList.remove("inactive");

    if (!isImgOff) {
      imgTexto.classList.add("inactive");
    }

    button_mensaje.classList.remove("inactive");
  }
}

function desencriptar() {
  const p = txaIngresoTexto.value;
  const isImgOff = imgTexto.classList.contains("inactive");

  //console.log(p);
  if (p == "") {
    if (isImgOff) {
      imgTexto.classList.remove("inactive");
    }

    mensaje.classList.add("inactive");
    button_mensaje.classList.add("inactive");
  } else {
    const e = p.replaceAll("enter", "e");
    const i = e.replaceAll("imes", "i");
    const a = i.replaceAll("ai", "a");
    const o = a.replaceAll("ober", "o");
    const u = o.replaceAll("ufat", "u");

    pMostrarTexto.innerHTML = u;

    mensaje.classList.remove("inactive");
    if (!isImgOff) {
      imgTexto.classList.add("inactive");
    }
  }
}

function copiar() {
  let inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", pMostrarTexto.innerHTML);
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand("copy");
  document.body.removeChild(inputFalso);
  alert("Copiado al portapapeles");
  
}
