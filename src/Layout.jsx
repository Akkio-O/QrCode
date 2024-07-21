import { Routes, Route } from "react-router-dom";
import { Navigation } from './Components/Navigation/Navigation';
import { QrCodeGenerator } from './Components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './Components/Scan/QrCodeScanner';
import { GenerateHistory } from './Components/GenerateHistory/GenerateHistory';
import { ScanHistory } from './Components/ScanHistory';
import './Components/Generate/qrCode.css';

const Layout = () => {
    return (
        <div className='container'>
            <div>
                <Navigation />
            </div>
            <div>
                <Routes>
                    <Route path="/generator" element={<QrCodeGenerator />} />
                    <Route path="/scan" element={<QrCodeScanner />} />
                    <Route path="/scanhistory" element={<ScanHistory />} />
                    <Route path="/generatorhistory" element={<GenerateHistory />} />
                </Routes>
            </div>
        </div>
    )
}

export { Layout };