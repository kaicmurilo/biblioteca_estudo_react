import logo from '../../imagens/logo.svg'
import logo2 from '../../imagens/logo.png'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const ImgContainer = styled.img`
width: 12%;
margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <ImgContainer src={logo2} alt='Logo Estante Books'></ImgContainer>
            <p><strong>Estante</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo