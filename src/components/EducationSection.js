import React from 'react';

const EducationSection = React.memo(() => {
  return (
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
  );
});

EducationSection.displayName = 'EducationSection';
export default EducationSection;