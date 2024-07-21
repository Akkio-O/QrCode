import { useState } from "react";
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constants.js'
import './qrCode.css';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = (e) => {
        setResult(value);
        setValue('');

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA, 
            JSON.stringify([...prevData, value]));
    }

    const onChangeHandler = (e) => {
        setValue(e.target.value)
        setValue((value) => value);
    }

    return (
        <div className="QrCodeBlock">

            {result !== '' && (
                <div className="QrCodeBlock_QrCode">
                    <QRCodeSVG value={result} size="200" />
                </div>
            )}
            <div className="QrCodeBlock_wrapper">
                <input
                    placeholder="Введите текст..."
                    type="text"
                    value={value}
                    onChange={onChangeHandler} />
                <button type="button" onClick={onClickHandler}>Сгенерировать QR</button>
            </div>
        </div>
    );
};
