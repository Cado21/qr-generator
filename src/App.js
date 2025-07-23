import {useState} from 'react';
import {QRCodeCanvas} from 'qrcode.react';
import {FaInstagram, FaTiktok, FaYoutube} from 'react-icons/fa';
import {generateRandomQRIS} from './utils/qrisGenerator';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQR = () => {
    if (!inputText.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setQrValue(inputText);
      setIsGenerating(false);
    }, 300);
  };

  const generateSampleQRIS = () => {
    const sampleQRIS = generateRandomQRIS();
    setInputText(sampleQRIS);
    setIsGenerating(true);
    setTimeout(() => {
      setQrValue(sampleQRIS);
      setIsGenerating(false);
    }, 300);
  };

  const clearAll = () => {
    setInputText('');
    setQrValue('');
  };

  return (
    <div className="App">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-icon">🔒</div>
          <h1 className="hero-title">QR Code Generator</h1>
          <div className="warning-badge">
            ⚠️ Hanya untuk tujuan edukasi
          </div>

          <div className="creator-section">
            <p className="creator-text">Dibuat oleh: Ricardo Tan</p>
            <p className="follow-text">Tool ini adalah bagian dari misi gw untuk meningkatkan literasi digital, khususnya keamanan transaksi. 
            Ada ide project menarik? Yuk kolab DM langsung aj!</p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/ricardotan21/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
              >
                <FaInstagram className="social-icon" />
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@ricardotan21"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link tiktok"
              >
                <FaTiktok className="social-icon" />
                TikTok
              </a>
              <a
                href="https://www.youtube.com/@ricardotan21"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link youtube"
              >
                <FaYoutube className="social-icon" />
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="main-content">
        <div className="container">
          <section className="generator-section">
            <div className="card input-card">
              <div className="card-header">
                <h2>🎯 Buat Kode QR</h2>
                <p>Masukkan teks, URL, atau data apa pun untuk membuat kode QR</p>
              </div>
              <div className="card-body">
                <div className="input-group">
                  <label htmlFor="qr-input" className="input-label">
                    Konten Anda
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
                <div className="button-group">
                  <button
                    onClick={generateQR}
                    className="btn btn-primary"
                    disabled={!inputText.trim() || isGenerating}
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
                    onClick={generateSampleQRIS}
                    className="btn btn-secondary"
                    disabled={isGenerating}
                  >
                    <span>📱</span>
                    Contoh QRIS
                  </button>
                  <button
                    onClick={clearAll}
                    className="btn btn-outline"
                    disabled={!inputText && !qrValue}
                  >
                    <span>🗑️</span>
                    Hapus
                  </button>
                </div>
              </div>
            </div>

            {qrValue && (
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
                      <p className="qr-data">
                        {qrValue.length > 60 ? `${qrValue.substring(0, 60)}...` : qrValue}
                      </p>
                      <p className="qr-stats">
                        Panjang: {qrValue.length} karakter
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="security-section">
            <div className="card warning-card">
              <div className="card-header">
                <h2>🛡️ Panduan Keamanan QRIS</h2>
                <p>Tips penting untuk melindungi diri dari penipuan</p>
              </div>
              <div className="card-body">
                <div className="security-grid">
                  <div className="security-item">
                    <div className="security-icon">✅</div>
                    <div className="security-content">
                      <h4>Selalu Gunakan Aplikasi Resmi</h4>
                      <p>GoPay, OVO, DANA, ShopeePay, Aplikasi Bank</p>
                    </div>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">❌</div>
                    <div className="security-content">
                      <h4>Jangan Gunakan Aplikasi Kamera</h4>
                      <p>Kamera biasa tidak memiliki fitur keamanan</p>
                    </div>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">🔍</div>
                    <div className="security-content">
                      <h4>Verifikasi Info Merchant</h4>
                      <p>Periksa detail sebelum konfirmasi pembayaran</p>
                    </div>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">💰</div>
                    <div className="security-content">
                      <h4>Periksa Jumlah dengan Teliti</h4>
                      <p>Pastikan jumlah sesuai dengan pembelian Anda</p>
                    </div>
                  </div>
                </div>
                <div className="fraud-alert">
                  <div className="alert-icon">🚨</div>
                  <div className="alert-content">
                    <h4>Peringatan Pencegahan Penipuan</h4>
                    <p>
                      Penipu dapat dengan mudah membuat kode QR palsu! Aplikasi pembayaran resmi
                      memiliki keamanan built-in, enkripsi, dan deteksi penipuan yang
                      tidak dimiliki aplikasi kamera biasa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Educational Note */}
          <section className="education-section">
            <div className="card education-card">
              <div className="card-header">
                <h3>📚 Tujuan Edukasi</h3>
              </div>
              <div className="card-body">
                <p>
                  Tool ini mendemonstrasikan betapa mudahnya kode QR dapat dibuat dan
                  mengapa Anda harus selalu menggunakan aplikasi pembayaran resmi untuk transaksi QRIS.
                  Aplikasi resmi menyediakan langkah-langkah keamanan penting,
                  enkripsi, dan perlindungan dari penipuan.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Dibuat untuk tujuan edukasi • Selalu utamakan keamanan</p>
      </footer>
    </div>
  );
}

export default App;
