import { Link } from "react-router-dom";
import "./navigation.css"
export const Navigation = () => {
    return (
        <nav>
            <Link to="/generate">Генерировать QRcode</Link>
            <Link to="/scan">Сканировать QRcode</Link>
            <Link to="/generatehistory">История генерирования</Link>
            <Link to="/scanhistory">История сканирования</Link>
        </nav>
    )
}