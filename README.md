# 🔗 Generator QR Edukasi - Ricardo

Aplikasi web untuk membuat QR Code dengan fokus edukasi dan keamanan. Mendukung pembuatan QR Code umum dan simulasi QRIS untuk pembelajaran.

## ✨ Fitur Utama

- 🎯 **Generator QR Code Universal** - Buat QR code dari teks, URL, atau data apapun
- 💳 **Simulasi QRIS** - Generate sample QRIS code untuk pembelajaran (DEMO ONLY)
- 📱 **Responsive Design** - Tampilan optimal di desktop dan mobile
- 📥 **Download PNG** - Unduh QR code dalam format PNG berkualitas tinggi
- 🔒 **Edukasi Keamanan** - Informasi penting tentang keamanan QR code
- 📊 **Firebase Analytics** - Tracking penggunaan untuk insights

## 🚀 Demo Live

**Production:** [https://qr-code-generator-84e46.web.app](https://qr-code-generator-84e46.web.app)

## 🛠️ Teknologi

- **Frontend:** React 18, CSS3
- **QR Generation:** qrcode library
- **Hosting:** Firebase Hosting
- **Analytics:** Firebase Analytics
- **CI/CD:** GitHub Actions
- **Deployment:** Otomatis via GitHub Actions

## 📦 Instalasi & Development

### Prerequisites
- Node.js >= 18.0.0
- npm atau yarn

### Setup Local

```bash
# Clone repository
git clone https://github.com/username/qr-generator.git
cd qr-generator

# Install dependencies
npm install

# Jalankan development server
npm start
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

### Build Production

```bash
# Build untuk production
npm run build

# Test build lokal
npm install -g serve
serve -s build
```

## 🔧 Scripts Available

| Command | Deskripsi |
|---------|----------|
| `npm start` | Jalankan development server |
| `npm test` | Jalankan test suite |
| `npm run build` | Build untuk production |
| `npm run deploy` | Deploy ke Firebase Hosting |


## 🚀 Deployment

### Otomatis via GitHub Actions

- **Production:** Push ke `main` branch
- **Preview:** Buat Pull Request

### Manual Deployment

```bash
# Login ke Firebase
firebase login

# Deploy
npm run deploy
```

## ⚠️ Disclaimer Keamanan

**PENTING:** 
- QRIS yang dihasilkan adalah **DEMO/SIMULASI** untuk tujuan edukasi
- **JANGAN** gunakan untuk transaksi nyata
- Selalu verifikasi QR code dari sumber terpercaya
- Aplikasi ini tidak menyimpan data pribadi atau finansial

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 👨‍💻 Author

**Ricardo** - [GitHub Profile](https://github.com/Cado21)

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/) untuk boilerplate
- [qrcode](https://www.npmjs.com/package/qrcode) untuk QR generation
- [Firebase](https://firebase.google.com/) untuk hosting dan analytics
- Komunitas open source untuk inspirasi dan tools

---

⭐ **Jika project ini membantu, berikan star di GitHub!**