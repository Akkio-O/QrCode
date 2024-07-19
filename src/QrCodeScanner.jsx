import { Scanner } from '@yudiel/react-qr-scanner';

export const QrCodeScanner = () => {

    const scanHandler = (result) => {
        console.log(result);
    }

    const settings = {
        finder: false
    }

    const stylesSettings = {
        container: {width: 250}
    }

    return (
        <div>
            <Scanner 
            onScan={scanHandler} 
            allowMultiple
            // components={settings}
            styles={stylesSettings} 
            />
        </div>
    )
}