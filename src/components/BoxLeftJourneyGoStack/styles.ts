import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* max-width: 800px; */
  max-width: 350px;
  margin: 0 auto;
  /* display:flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  /* flex-direction: column; */

  background: rgb(32, 32, 36);
  border-radius: 5px;
  padding: 32px;
  /* height: 80px; */
  /* padding: 40px; */

  @media (max-width: 768px) {
    width: 100%;
  /* max-width: 800px; */
    max-width: 600px;
    margin: 0 auto;
  }


  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      border: 4px solid #05C65D;
      margin: 0 53px 24px;
      padding: 10px;
    }

    > h2 {
      font-weight:bold;
      color : #e1e1e6;
      font-size: 24px;

    }
  }

  section {
    margin: 40px 0 0;
    padding: 40px 0 0;
    
    > h3 {
      font-weight:bold;
      color: #e1e1e6;
      font-size: 24px;
      margin-bottom: 32px;
      font-weight:bold;
    }
  }
`;


export const Inventario = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
  gap: 8px;

  div {
    width: 65.5px;
    height: 65.5px;
    background: #121214;

      @media (max-width: 400px) {
        width: 51.5px;
    height: 51.5px;
    }
  }



`;

