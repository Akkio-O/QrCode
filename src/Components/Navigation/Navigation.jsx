import { Link } from "react-router-dom";
import "./navigation.css"
export const Navigation = () => {
    return (
        <nav>
            <Link to="/generator">Генерировать QRcode</Link>
            <Link to="/scan">Сканировать QRcode</Link>
            <Link to="/generatorhistory">История генерирования</Link>
            <Link to="/scanhistory">История сканирования</Link>
        </nav>
    )
}