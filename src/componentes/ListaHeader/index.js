import styled from 'styled-components';

const OpcoesContainer = styled.ul`
    display: flex;
`
const OpcaoContainer = styled.li`
    font-size: 16px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5 px;
    cursor: pointer;
    min-width: 125px;
`
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
function ListaHeader() {
    return (
        <OpcoesContainer>
            {
                textoOpcoes.map((texto) =>
                    <OpcaoContainer><p>{texto}</p></OpcaoContainer>
                )
            }
        </OpcoesContainer>
    )
}

export default ListaHeader