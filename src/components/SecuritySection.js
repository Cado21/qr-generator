import React from 'react';

const SecuritySection = React.memo(({ securityItems }) => {
  return (
    <section className="security-section">
      <div className="card warning-card">
        <div className="card-header">
          <h2>🛡️ Panduan Keamanan QRIS</h2>
          <p>Tips penting untuk melindungi diri dari penipuan</p>
        </div>
        <div className="card-body">
          <div className="security-grid">
            {securityItems.map((item, index) => (
              <div key={index} className="security-item">
                <div className="security-icon">{item.icon}</div>
                <div className="security-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
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
  );
});

SecuritySection.displayName = 'SecuritySection';
export default SecuritySection;