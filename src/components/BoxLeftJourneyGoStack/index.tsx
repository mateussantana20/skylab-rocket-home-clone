import React from 'react';
import { Container,Inventario } from './styles';
import avatar from '../../assets/avatar.jpg'

const BoxLeftJourneyGoStack:React.FC = () => {

  return (
    <Container>
      <div>
        <img src={avatar} alt=""/>
        <h2>Mateus Santana</h2>
      </div>


      <section>
        <h3>Inventário</h3>

        <Inventario>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Inventario>
      </section>

    </Container>
  );
}

export default BoxLeftJourneyGoStack;
