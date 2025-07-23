function calculateCRC16(data) {
  const polynomial = 0x1021;
  let crc = 0xFFFF;
  
  for (let i = 0; i < data.length; i++) {
    crc ^= (data.charCodeAt(i) << 8);
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) {
        crc = (crc << 1) ^ polynomial;
      } else {
        crc = crc << 1;
      }
    }
  }
  
  return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
}

function formatField(tag, value) {
  const length = value.length.toString().padStart(2, '0');
  return tag + length + value;
}

export function generateQRISCode({
  merchantName = 'DEMO TOKO',
  merchantCity = 'Jakarta',
  postalCode = '12345',
  amount = null,
  merchantId = 'SAMPLE00000000000',
  terminalId = '93600915123456780215',
  merchantCategory = '4812'
}) {
  let qrisData = '';
  
  qrisData += formatField('00', '01');
  qrisData += formatField('01', '12');
  
  const merchantAccount = formatField('00', 'ID.CO.QRIS.WWW') + 
                         formatField('01', merchantId) + 
                         formatField('03', 'UMI');
  qrisData += formatField('26', merchantAccount);
  
  const additionalAccount = formatField('00', 'ID.CO.SAMPLE.WWW') + 
                           formatField('01', terminalId) + 
                           formatField('03', 'UMI');
  qrisData += formatField('51', additionalAccount);
  
  qrisData += formatField('52', merchantCategory);
  qrisData += formatField('53', '360');
  
  if (amount && amount > 0) {
    qrisData += formatField('54', amount.toString());
  }
  
  qrisData += formatField('58', 'ID');
  qrisData += formatField('59', merchantName.substring(0, 25));
  qrisData += formatField('60', merchantCity.substring(0, 15));
  qrisData += formatField('61', postalCode);
  
  const additionalData = formatField('07', '03A01');
  qrisData += formatField('62', additionalData);
  
  const dataForCRC = qrisData + '6304';
  const crc = calculateCRC16(dataForCRC);
  qrisData += '6304' + crc;
  
  return qrisData;
}

export const DEMO_MERCHANTS = [
  { name: 'WARUNG PADANG', city: 'Jakarta', postal: '12345' },
  { name: 'TOKO BUKU', city: 'Bandung', postal: '40123' },
  { name: 'CAFE KOPI', city: 'Yogyakarta', postal: '55511' },
  { name: 'RESTO SEAFOOD', city: 'Surabaya', postal: '60111' },
  { name: 'TOKO ELEKTRONIK', city: 'Medan', postal: '20111' }
];

export function generateRandomQRIS() {
  const randomMerchant = DEMO_MERCHANTS[Math.floor(Math.random() * DEMO_MERCHANTS.length)];
  const randomAmount = Math.floor(Math.random() * 100000) + 10000;
  
  return generateQRISCode({
    merchantName: randomMerchant.name,
    merchantCity: randomMerchant.city,
    postalCode: randomMerchant.postal,
    amount: randomAmount
  });
}