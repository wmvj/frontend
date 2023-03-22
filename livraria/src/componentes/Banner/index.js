// import './index.css'
import styled from "styled-components"
import { corDeFundo } from '../UI/variaveis'

const StyledBanner = styled.header`
    background-color: ${corDeFundo};
    text-align: center;
`;

const StyledImg = styled.img`
    max-width: 100%;
`;

function Banner() {
  return (
    <StyledBanner>
      <StyledImg
        src="/imagens/banner.png"
        alt="O banner principal da página da livraria"
      />
    </StyledBanner>
  );
}

export default Banner