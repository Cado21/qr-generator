import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { downloadQRCode, generateFilename } from '../utils/downloadUtils';

const GeneratorSection = React.memo(({ 
  inputText, 
  setInputText, 
  qrValue, 
  isGenerating, 
  isInputEmpty, 
  canClear, 
  truncatedQRValue,
  onGenerateQR, 
  onGenerateSample, 
  onClear 
}) => {
  const handleDownload = () => {
    const filename = generateFilename(qrValue);
    const success = downloadQRCode(filename);
    
    if (success) {
      console.log('QR downloaded:', {
        qr_type: qrValue.startsWith('00020101') ? 'qris' : 'custom',
        filename: filename
      });
    }
  };

  return (
    <section className="generator-section">
      <div className="card input-card">
        <div className="card-header">
          <h2>🎯 Buat Kode QR</h2>
          <p>Masukkan teks, URL, atau data apa pun untuk membuat kode QR</p>
        </div>
        <div className="card-body">
          <div className="input-group">
            <label htmlFor="qr-input" className="input-label">
              Konten QRIS
            </label>
            <textarea
              id="qr-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Masukkan teks, URL, atau data untuk membuat kode QR..."
              className="text-input"
              rows={4}
            />
          </div>
          <ButtonGroup
            isInputEmpty={isInputEmpty}
            isGenerating={isGenerating}
            canClear={canClear}
            onGenerateQR={onGenerateQR}
            onGenerateSample={onGenerateSample}
            onClear={onClear}
          />
        </div>
      </div>

      {qrValue && (
        <QRDisplay 
          qrValue={qrValue} 
          truncatedValue={truncatedQRValue}
          onDownload={handleDownload}
        />
      )}
    </section>
  );
});

const ButtonGroup = React.memo(({ 
  isInputEmpty, 
  isGenerating, 
  canClear, 
  onGenerateQR, 
  onGenerateSample, 
  onClear 
}) => (
  <div className="button-group">
    <button
      onClick={onGenerateQR}
      className="btn btn-primary"
      disabled={isInputEmpty || isGenerating}
    >
      {isGenerating ? (
        <>
          <span className="spinner"></span>
          Membuat...
        </>
      ) : (
        <>
          <span>⚡</span>
          Buat QR
        </>
      )}
    </button>
    <button
      onClick={onGenerateSample}
      className="btn btn-secondary"
      disabled={isGenerating}
    >
      <span>📱</span>
      Contoh QRIS
    </button>
    <button
      onClick={onClear}
      className="btn btn-outline"
      disabled={!canClear}
    >
      <span>🗑️</span>
      Hapus
    </button>
  </div>
));

const QRDisplay = React.memo(({ qrValue, truncatedValue, onDownload }) => (
  <div className="card qr-card">
    <div className="card-header">
      <h3>✨ Kode QR Anda</h3>
    </div>
    <div className="card-body qr-display">
      <div className="qr-container">
        <div className="qr-wrapper">
          <QRCodeCanvas
            value={qrValue}
            size={200}
            level="M"
            includeMargin={true}
            className="qr-code"
          />
        </div>
        <div className="qr-info">
          <p className="qr-data-label">Isi Data:</p>
          <p className="qr-data">{truncatedValue}</p>
          <p className="qr-stats">
            Panjang: {qrValue.length} karakter
          </p>
          
          <div className="qr-actions">
            <button 
              onClick={onDownload}
              className="btn btn-download"
              title="Download QR Code sebagai PNG"
            >
              Download QR
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
));

ButtonGroup.displayName = 'ButtonGroup';
QRDisplay.displayName = 'QRDisplay';
GeneratorSection.displayName = 'GeneratorSection';

export default GeneratorSection;