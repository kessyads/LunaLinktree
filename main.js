// Define a URL base para a API de QR Code do Google
const qrBaseURL = 'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=';

// Captura a URL atual e gera o QR Code
const currentURL = encodeURIComponent(window.location.href);
document.getElementById('qrCode').src = `${qrBaseURL}${currentURL}`;
