import React from 'react';

const HeroSection = React.memo(({ socialLinks, onSocialClick }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-icon">🔒</div>
        <h1 className="hero-title">QR Code Generator</h1>
        <div className="warning-badge">
          ⚠️ Hanya untuk tujuan edukasi
        </div>

        <div className="creator-section">
          <p className="creator-text">Dibuat oleh: Ricardo Tan</p>
          <p className="follow-text">
            Tool ini adalah bagian dari misi gw untuk meningkatkan literasi digital, 
            khususnya keamanan transaksi. Ada ide project menarik? Yuk kolab DM langsung aj!
          </p>
          <div className="social-links">
            {socialLinks.map(({ platform, url, icon: Icon, label }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                onClick={() => onSocialClick(platform)}
                rel="noopener noreferrer"
                className={`social-link ${platform}`}
              >
                <Icon className="social-icon" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;