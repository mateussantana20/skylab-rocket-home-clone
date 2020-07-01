import styled from 'styled-components';

import background from '../../assets/FeaturedCardBg.40a7d53e.png';



export const Container = styled.div`
  /* display:flex;
  flex-wrap: wrap
  justify-content: space-between;
  align-items: center; */
  /* max-width: 1365px; */
  width: 100%;
  display: grid;
  /* height: 100%; */

  margin: 0 auto;

  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  padding: 30px;

  > a {
    text-decoration: none; 

  }
`;


export const BoxSingleCurso = styled.div`
  display : flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  /* width: 33.3%; */
  
  height: 664px;


  padding: 64px;
  /* flex: 1; */
  background: url(${background}) no-repeat center;
  background-size: cover; /** Cubrir o tamanho da tela */
  position: relative;
  cursor: pointer;
  border: 2px solid #000;
  transition: all 0.2s ease 0s;


  &.starter {
    &:hover {
      border: 2px solid #7159c1;
      transform: translateY(-7px);
    }
  }

  &.launchbase {
    &:hover {
      border: 2px solid #FD951F;
      transform: translateY(-7px);
    }
  }


  &.gostack {
    &:hover {
      border: 2px solid #04D361;
      transform: translateY(-7px);
    }
  }


  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
   
    font-size: 16px;
    font-weight: bold;
    

    &.startercolor {
      color : #7159c1;
      border: 2px solid #7159c1;
    }

    &.launchbasecolor {
      color : #FD951F;
      border: 2px solid #FD951F;
    }

    &.gostackcolor {
      color : #04D361;
      border: 2px solid #04D361;
    }
  }

  p {
    color : #87868b;
    font-size: 16px;
    text-align: center;
    width: 270px;
    line-height: 26px;

    > b {
      color: #7159c1;
    }
  }
`;


