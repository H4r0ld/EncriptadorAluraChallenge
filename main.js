const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar");
const txaIngresoTexto = document.querySelector("#txaIngresoTexto");
const pMostrarTexto = document.querySelector("#pMostrarTexto");
const mensaje = document.querySelector(".mensaje");
const imgTexto = document.querySelector(".imgTexto");
const btnCopiar = document.querySelector(".button-mensaje");

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);

function encriptar() {
  const p = txaIngresoTexto.value;
  const isImgOff = imgTexto.classList.contains("inactive");

  console.log(p);

  if (p == "") {
    //console.log("hola");

    if (isImgOff) {
      imgTexto.classList.remove("inactive");
    }

    mensaje.classList.add("inactive");
    btnCopiar.classList.add("inactive");


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

    
    btnCopiar.classList.remove("inactive");

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
    btnCopiar.classList.add("inactive");
    
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
