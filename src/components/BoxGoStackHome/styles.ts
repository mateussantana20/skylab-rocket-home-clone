import styled from 'styled-components';

import background from '../../assets/FeaturedCardBg.40a7d53e.png';

export const Container = styled.div`
  width: 100%;
  /* max-width: 1290px; */
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
  /* background:#111116; */
  /* height: 80px; */
  padding: 30px;

  > a {
    width: 620px;
    height: 624px;
    padding: 80px 50px;
    text-decoration: none;

  display: flex;
  width: 100%;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;

  background: url(${background}) no-repeat center;
  background-size: cover; /*Cubrir o tamanho da tela*/
  border-radius: 8px;
  border: 2px solid #000;

  transition:  all 0.2s;

    &:hover {
      border: 2px solid #04D361;
      transform: translateY(-7px);
    }
  }

  > div {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    display:flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: column;
  }

`;


export const DivBoxLeft = styled.div`
  


  > div {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;

      > img {
      width: 240px;
      height: 215px;
    }
  }
  
  p {
    margin-top: 30px;
    line-height: 26px;
    color : #87868b;
    width: 340px;
  }
`;