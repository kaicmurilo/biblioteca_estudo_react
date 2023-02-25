import Logo from '../Logo'
import ListaHeader from '../ListaHeader';
import IconesHeader from '../IconesHeader'
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`
function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <ListaHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header;