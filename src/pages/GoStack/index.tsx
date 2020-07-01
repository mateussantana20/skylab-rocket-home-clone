import React from 'react';
import {Container} from './styles';
import Header from '../../components/Header';
import BoxGoStackHome from '../../components/BoxGoStackHome'

const GoStack:React.FC = () => {
  return (
    <Container>
      <Header/>
      <BoxGoStackHome/>
    </Container>
  );
}

export default GoStack;
