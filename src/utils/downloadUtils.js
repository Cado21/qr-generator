export const downloadQRCode = (filename = 'qr-code') => {
  const canvas = document.querySelector('.qr-code');
  
  if (!canvas) {
    console.error('QR Code canvas tidak ditemukan');
    return;
  }

  try {
    const dataURL = canvas.toDataURL('image/png', 1.0);
    const downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = `${filename}.png`;
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    return true;
  } catch (error) {
    console.error('Error saat download QR code:', error);
    return false;
  }
};

export const generateFilename = (qrValue) => {
  const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
  
  if (qrValue.startsWith('00020101')) {
    return `qris-${timestamp}`;
  }
  
  return `qr-code-${timestamp}`;
};