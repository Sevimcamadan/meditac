import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-red-600 text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">MEDITAC</div>
            <nav className="space-x-4 text-sm">
                <Link to="/">Anasayfa</Link>
                <Link to="/hakkimizda">Hakkımızda</Link>
                <Link to="/tibbi-birimler">Tıbbi Birimler</Link>
                <Link to="/hekimler">Hekimler</Link>
                <Link to="/saglik-rehberi">Sağlık Rehberi</Link>
                <Link to="/hasta-rehberi">Hasta Rehberi</Link>
            </nav>
        </header>
    );
}

export default Header;
