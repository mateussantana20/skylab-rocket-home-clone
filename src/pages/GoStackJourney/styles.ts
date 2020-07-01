import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 64px 3px 80px;
  /* background: #0B0A0D; */


  h1 {
    font-size: 36px;
    color: #fff;
    font-weight: bold;
    /* line-height: 13px; */
    text-align: center;
    line-height: 1.33;
    /* width: 1120px; */
  }
`;



export const ContainerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
`;

export const Right = styled.div`
  /* border: 20px solid transparent; */
  padding : 0 0 0 20px;


  h2 {
    color: #04f361;
    font-size: 24px;
    margin-bottom: 24px;
    font-weight:bold;
  }

 

  a {
    display: block;
    width: 100%;
    max-width: 720px;
    text-decoration: none;
    background: #202024;
    padding: 32px;

    border: 2px solid #000;
    border-radius: 8px;
    transition: border 0.2s ease 0s;

    &:hover {
      border: 2px solid #04f361;
    }

    & + a {
      margin-top: 30px;
    }
  }
`;



export const DivBox = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 36px;
  /* padding: 30px; */
  /* width: 100%; */

  h4 {
      color : #fff;
      font-weight:bold;
      font-size: 24px;
    }

    p {
      color: #a8a8b3;
      font-size: 16px;
      width:100%;
      max-width: 526px;
      margin-top: 12px;
      margin-bottom: 30px;
      line-height: 1.75;
    }
`;


export const DivProgress = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  /* justify-content: space-between; */
  /* padding: 30px; */
  /* flex-direction:column; */

  span {
    margin-right: 10px;
    font-weight: bold;
    font-size: 12px;
    color: #04d361;
  }

  > div {
    background: #04d361;
    width: 100%;
    max-width: 526px;
    height:4px;
  }
`;

