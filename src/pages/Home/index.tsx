import React from 'react';
import {Container} from './styles';
import Header from '../../components/Header';
import BoxCurso from '../../components/BoxCurso';

const Home:React.FC = () => {
  return (
    <Container>
    <Header/>
    <BoxCurso/>
    
    </Container>
  );
}

export default Home;
