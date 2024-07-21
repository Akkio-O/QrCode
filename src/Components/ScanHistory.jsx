import { SCAN_DATA } from "../constants";
import { QRCodeSVG } from 'qrcode.react';

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div className='container'>
            <h2>История сканирования</h2>
            {data.map((link, index) => (
                <div key={index} className={'wrapper'}>
                    <QRCodeSVG value={link} size="200" />
                    <p>{link}</p>
                </div>
            ))}
        </div>
    );
}