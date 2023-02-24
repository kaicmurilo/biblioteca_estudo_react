import Logo from '../Logo'
import ListaHeader from '../ListaHeader';
import IconesHeader from '../IconesHeader'
import './estilo.css'
function Header() {
    return (
        <header className="App-header">
            <Logo />
            <ListaHeader />
            <IconesHeader />
        </header>
    )
}

export default Header;