import React from 'react';
import  { Container, Box } from './styles';

import bonus from '../../assets/Bonus.03b32205.svg'



const BoxGoStacHome:React.FC = () => {

  return (
    <Container>

      <Box>
        <div>
          <img src={bonus} alt=""/>
          <h2>Bônus</h2>
        </div>
        <p>Aprimore seus estudos com os cursos bônus do Bootcamp.</p>
      </Box>


      <Box>
        <div>
          <img src={bonus} alt=""/>
          <h2>Bônus</h2>
        </div>
        <p>Aprimore seus estudos com os cursos bônus do Bootcamp.</p>
      </Box>

    </Container>
  );
}

export default BoxGoStacHome;
