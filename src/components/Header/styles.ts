import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* max-width: 1290px; */
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background:#111116;
  height: 80px;
  padding: 40px;

  > img {
    /* flex: 1; */
  }
`;



export const BoxProfile = styled.div`
  display:flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  padding: 10px;
 
  span {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    
  }

  p {
    margin-top: 6px;
    color: #87868b;
    font-size: 12px;
    text-align: right;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid rgba(113,89,193);
  }

  svg {
    /* margin-left: auto; */
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }

  @media (max-width: 660px) {
    span {
      display:none;
    }
    p {
      display: none;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;

export const BoxProfileTitle = styled.div`
  padding: 0 20px 0 50px;
`;




