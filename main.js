// Captura a URL atual da página
const currentURL = window.location.href;

// Gera o QR Code dentro do contêiner "qrCodeContainer"
new QRCode(document.getElementById("qrCodeContainer"), {
    text: currentURL,
    width: 200,
    height: 200
});
