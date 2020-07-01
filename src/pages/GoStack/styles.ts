import styled from 'styled-components';


import backgroundTop from '../../assets/MountainsOpacity.a4edba24.png'


export const Container = styled.div`
  width :100%;
  margin: 0 auto;
  max-width: 1365px;
  display: flex;
  flex-direction: column;
  align-items: stretch; /*Estica */
  
  flex: 1;
  background: url(${backgroundTop}) no-repeat center;
  background-size: cover; /** Cubrir o tamanho da tela */
`;


