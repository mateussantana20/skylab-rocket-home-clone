import React from 'react';
import { Container, DivBoxLeft } from './styles';
import gostack from '../../assets/GoStack.83a178a0.svg';

import { Link } from 'react-router-dom';


import BoxGoStackHomeRight from '../BoxGoStackHomeRight'


const BoxGoStacHome:React.FC = () => {

  return (
    <Container>
      <Link to="/gostack-journey">
        <DivBoxLeft>
          <div>
            <img src={gostack} alt="gostack"/>
            <p> <b style={{color : '#04D361'}}>Treinamento imersivo </b>nas tecnologias mais modernas de desenvolvimento web e mobile</p>
          </div>
        </DivBoxLeft>
      </Link>

      <BoxGoStackHomeRight/>
    
    </Container>
  );
}

export default BoxGoStacHome;
