import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { SCAN_DATA } from '../../constants.js'
import './qrCodeScan.css'

export const QrCodeScanner = () => {
  const [text, setText] = useState('');
  const [isScanComplete, setScanComplete] = useState(false);

  const scanHandler = (result) => {
    setText(result[0].rawValue)
    setScanComplete(true);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    localStorage.setItem(
      SCAN_DATA, 
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };

  return (
    <div className='cameraBlock'>
      <Scanner
        allowMultiple
        onScan={scanHandler}
        components={{
          finder: false,
          audio: false
        }}
        styles={{
          container: { width: 250 }
        }}
      />
      {isScanComplete && (
        <h2>Отсканируемый QRcode:<br></br>{text}</h2>
      )}
    </div>
  )
}