const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function ActionEncriptar() {
    const texto = encriptar(textArea.value);

    if(texto.length === 0) {
        mensaje.value = "Texto no válido: No se puede encriptar un texto vacío.";
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }else{
        mensaje.value = texto;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function ActionDesencriptar() {
    const texto = desencriptar(textArea.value);

    if(texto.length === 0) {
        mensaje.value = "Texto no válido: Se necesita un texto para desencriptar.";
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }else{
        mensaje.value = texto;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function copy() {
    var copyText = document.querySelector(".mensaje");
    var MsgCopied = document.getElementById("CopyMsg");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    MsgCopied.innerHTML = "Copiado al portapapeles";
}

function HoverMsg() {
    var MsgCopy = document.getElementById("CopyMsg");
    MsgCopy.innerHTML = "Copiar al portapapeles";
}

function encriptar(TextEncrypt) {
    let EncryptKeys = [["e","enter"], ["i", "imes"], ["a", "ai"],
    ["o", "ober"], ["u", "ufat"]];

    TextEncrypt = TextEncrypt.toLowerCase();

    for(let i = 0; i < EncryptKeys.length; i++) {
        if(TextEncrypt.includes(EncryptKeys[i][0])) {
            TextEncrypt = TextEncrypt.replaceAll(EncryptKeys[i][0], EncryptKeys[i][1]);
        }
    }
    return TextEncrypt;
}

function desencriptar(TextDecrypt) {
    let DecryptKeys = [["enter", "e"], ["imes", "i"], ["ai", "a"],
    ["ober", "o"], ["ufat", "u"]];

    for(let i = 0; i < DecryptKeys.length; i++) {
        if(TextDecrypt.includes(DecryptKeys[i][0])) {
            TextDecrypt = TextDecrypt.replaceAll(DecryptKeys[i][0], DecryptKeys[i][1]);
        }
    }

    return TextDecrypt;
}
