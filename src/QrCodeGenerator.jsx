import { useState } from "react";
import { QRCodeSVG } from 'qrcode.react';
import './qrCodeGenerator.css';
// import {}

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = (e) => {
        // console.log(e.target.previousSibling.querySelector('input'));
        setResult(value);
        setValue('');
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
