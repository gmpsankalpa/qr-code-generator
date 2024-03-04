function generateQRCode() {
    var text = document.getElementById('text-input').value;
    var qrCodeContainer = document.getElementById('qr-code');

    if (text.trim() !== "") {
        // Clear previous QR code
        qrCodeContainer.innerHTML = "";

        var qrcode = new QRCode(qrCodeContainer, {
            text: text,
            width: 128,
            height: 128
        });
    }
}

function downloadQR(format) {
    var canvas = document.querySelector('#qr-code canvas');

    if (format === 'png' && canvas) {
        var dataURL = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.href = dataURL;
        link.download = 'qrcode.png';
        link.click();
    }
}