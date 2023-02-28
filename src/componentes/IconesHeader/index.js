import styled from 'styled-components';
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'


const IconesContainer = styled.ul`
display: flex;
align-items: center;
`

const IconeContainer = styled.li`
margin-right: 40px;
width: 25px;
`
const icones = [perfil, sacola]
function IconesHeader() {
    return (
        <IconesContainer>
            {
                icones.map((icone) =>
                    <IconeContainer><img alt='icone logo' src={icone}></img></IconeContainer>
                )
            }
        </IconesContainer>
    )
}

export default IconesHeader