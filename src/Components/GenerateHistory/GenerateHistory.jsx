import { QRCodeSVG } from 'qrcode.react';

import { GENERATE_DATA } from "../../constants";
import './GenerateHistory.css'

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '');

    return (
        <div className='container'>
            <h2>История генераций</h2>
            {data.map((text, index) => (
                <div key={index} className={'wrapper'}>
                    <QRCodeSVG value={text} size="200" />
                    <p>{text}</p>
                </div>
            ))}
        </div>
    );
};