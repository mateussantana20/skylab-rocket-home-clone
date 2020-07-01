import styled from 'styled-components';

import background from '../../assets/FeaturedCardBg.40a7d53e.png'



export const Container = styled.div`
  width: 100%;
  /* max-width: 1290px; */
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-direction:column;
  flex-wrap: wrap;
  /* background:#111116; */
  /* height: 80px; */
  padding: 30px;


`;

export const Box =  styled.div`
  flex: 1;
  width: 100%;
  max-width: 650px;
  height: 300px;
  /* border: 30px solid transparent; */
  background: url(${background}) no-repeat center;
  background-size: cover; /*Cubrir o tamanho da tela*/
  border-radius: 8px;

  display:flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #000;

  padding: 100px 50px 80px;
  transition:  all 0.2s;

  &:hover {
    border: 2px solid #04D361;
    transform: translateY(-7px);
  }



 > div {
  /* width: 510px; */
  display:flex;
  /* justify-content: space-between; */
  align-items: center;

  > img {
    margin-right: 15px;
  }
 }

 p {
   margin-top: 30px;
   width: 310px;
   color: #87868b;
   font-size: 16px;
 }

 & + div {
   margin-top: 30px;
 }
`;