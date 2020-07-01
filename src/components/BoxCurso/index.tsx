import React from 'react';
import { Container, BoxSingleCurso } from './styles';

import starter from '../../assets/Starter.64c237cc.svg';
import launche from '../../assets/LaunchBase.08285320.svg';
import gostack from '../../assets/GoStack.83a178a0.svg';

import {Link} from 'react-router-dom'
 

const BoxCurso:React.FC = () => {
 

  return (
    <Container>

      <BoxSingleCurso className="starter">
        <span className="startercolor">01</span>
        <img src={starter} alt="Starter"/>

        <p> <b>Torne-se um programador desejado</b> no mercado com esse cursos gratuitos</p>
      </BoxSingleCurso>

      <BoxSingleCurso className="launchbase">
        <span className="launchbasecolor">02</span>
        <img src={launche} alt="Starter"/>

          <p> <b style={{color : '#FD951F'}}>Domine programação do zero</b> e tenha acesso às melhores oportunidades do mercado</p>
      </BoxSingleCurso>


      <Link to="gostack">
        <BoxSingleCurso className="gostack">
          <span className="gostackcolor">03</span>
          <img src={gostack} alt="gostack"/>

          <p> <b style={{color : '#04D361'}}>Treinamento imersivo </b>nas tecnologias mais modernas de desenvolvimento web e mobile</p>
        </BoxSingleCurso>
      </Link>

    </Container>
  );
}

export default BoxCurso;
