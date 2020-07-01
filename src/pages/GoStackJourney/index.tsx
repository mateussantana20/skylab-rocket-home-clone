import React from 'react';
import {Container, ContainerBox, Right, DivBox, DivProgress} from './styles';
import Header from '../../components/Header';

import { Link } from 'react-router-dom';

import icon from '../../assets/1588963419051.svg'

import BoxLeftJourneyGoStack from '../../components/BoxLeftJourneyGoStack'


const GoStackJourney:React.FC = () => {
  return (
    <div style={{backgroundColor: '#0B0A0D'}}>
    <Header/>
    <Container>

      <h1>Seja bem-vindo ao GoStack,<br/>Mateus Santana</h1>

      <ContainerBox>

        <BoxLeftJourneyGoStack/>

        <Right>

          <h2>Aquecendo os motores</h2>

          <Link to="/">
            <DivBox>
              <img src={icon} alt=""/>
              <div>
              <h4>Preparando os Estudos</h4>
                <p>Nessa fase vamos conhecer metodólogias e técnicas para facilitar o 
                  aprendizado, fixar o conhecimento e aplicar tudo isso em nosso desenvolvimento
                  pessoal e profissional. Entenderemos também como montar um cronograma de estudos
                </p>
              </div>
            </DivBox>
            <DivProgress>
              <span>100% completo</span>
              <div></div>
            </DivProgress>
          </Link>

          <Link to="/">
            <DivBox>
              <img src={icon} alt=""/>
              <div>
              <h4>Preparando os Estudos</h4>
                <p>Nessa fase vamos conhecer metodólogias e técnicas para facilitar o 
                  aprendizado, fixar o conhecimento e aplicar tudo isso em nosso desenvolvimento
                  pessoal e profissional. Entenderemos também como montar um cronograma de estudos
                </p>
              </div>
            </DivBox>
            <DivProgress>
              <span>100% completo</span>
              <div></div>
            </DivProgress>
          </Link>


        </Right>

      </ContainerBox>
      
    </Container>
    </div>
  );
}

export default GoStackJourney;
