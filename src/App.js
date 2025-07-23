import {useState, useMemo, useCallback} from 'react';
import {FaInstagram, FaTiktok, FaYoutube} from 'react-icons/fa';
import { Analytics } from '@vercel/analytics/react'; // Tambahkan ini
import HeroSection from './components/HeroSection';
import GeneratorSection from './components/GeneratorSection';
import SecuritySection from './components/SecuritySection';
import EducationSection from './components/EducationSection';
import {generateRandomQRIS} from './utils/qrisGenerator';

import './App.css';

const SOCIAL_LINKS = [
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/ricardotan21/',
    icon: FaInstagram,
    label: 'Instagram'
  },
  {
    platform: 'tiktok', 
    url: 'https://www.tiktok.com/@ricardotan21',
    icon: FaTiktok,
    label: 'TikTok'
  },
  {
    platform: 'youtube',
    url: 'https://www.youtube.com/@ricardotan21', 
    icon: FaYoutube,
    label: 'YouTube'
  }
];

const SECURITY_ITEMS = [
  {
    icon: '✅',
    title: 'Selalu Gunakan Aplikasi Resmi',
    description: 'GoPay, OVO, DANA, ShopeePay, Aplikasi Bank'
  },
  {
    icon: '❌',
    title: 'Jangan Gunakan Aplikasi Kamera',
    description: 'Kamera biasa tidak memiliki fitur keamanan'
  },
  {
    icon: '🔍',
    title: 'Verifikasi Info Merchant',
    description: 'Periksa detail sebelum konfirmasi pembayaran'
  },
  {
    icon: '💰',
    title: 'Periksa Jumlah dengan Teliti',
    description: 'Pastikan jumlah sesuai dengan pembelian Anda'
  }
];

function App() {
  const [inputText, setInputText] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const trackSocialClick = useCallback((platform) => {
    console.log('Social click:', platform); // Alternatif sederhana
  }, []);

  const generateQR = useCallback(() => {
    if (!inputText.trim()) return;
    setIsGenerating(true);

    setTimeout(() => {
      setQrValue(inputText);
      setIsGenerating(false);
    }, 300);
  }, [inputText]);

  const generateSampleQRIS = useCallback(() => {
    const sampleQRIS = generateRandomQRIS();
    setInputText(sampleQRIS);
    setIsGenerating(true);

    setTimeout(() => {
      setQrValue(sampleQRIS);
      setIsGenerating(false);
    }, 300);
  }, []);

  const clearAll = useCallback(() => {
    setInputText('');
    setQrValue('');
  }, []);

  const isInputEmpty = useMemo(() => !inputText.trim(), [inputText]);
  const canClear = useMemo(() => inputText || qrValue, [inputText, qrValue]);
  const truncatedQRValue = useMemo(() => {
    return qrValue.length > 60 ? `${qrValue.substring(0, 60)}...` : qrValue;
  }, [qrValue]);

  return (
    <div className="App">
      <HeroSection 
        socialLinks={SOCIAL_LINKS}
        onSocialClick={trackSocialClick}
      />
      
      <main className="main-content">
        <div className="container">
          <GeneratorSection
            inputText={inputText}
            setInputText={setInputText}
            qrValue={qrValue}
            isGenerating={isGenerating}
            isInputEmpty={isInputEmpty}
            canClear={canClear}
            truncatedQRValue={truncatedQRValue}
            onGenerateQR={generateQR}
            onGenerateSample={generateSampleQRIS}
            onClear={clearAll}
          />
          
          <SecuritySection securityItems={SECURITY_ITEMS} />
          <EducationSection />
        </div>
      </main>

      <footer className="footer">
        <p>Dibuat untuk tujuan edukasi • Selalu utamakan keamanan</p>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
