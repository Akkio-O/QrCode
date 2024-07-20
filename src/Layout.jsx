
import { QrCodeGenerator } from './QrCodeGenerator';
import { QrCodeScanner } from './QrCodeScanner';
import './qrCode.css';

const Layout = () => {
    return (
        <div className='container'>
            <QrCodeGenerator />
            <QrCodeScanner />
        </div>
    )
}

export { Layout };