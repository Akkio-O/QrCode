import { GENERATE_DATA } from "../../constants";
import { QRCodeSVG } from 'qrcode.react';
import './GenerateHistory.css'

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div className='container'>
            <h2>История генераций</h2>
            {data.map((link, index) => (
                <div key={index} className={'wrapper'}>
                    <QRCodeSVG value={link} size="200" />
                    <p>{link}</p>
                </div>
            ))}
        </div>
    );
};