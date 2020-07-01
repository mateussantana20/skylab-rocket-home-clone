import React from 'react';
import {
  Container,
  BoxProfile,
  BoxProfileTitle,
 } from './styles';

import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.jpg';
import { FaBell} from 'react-icons/fa';

const Header:React.FC = () => {

  return (
    <Container>
        <img src={logo}alt="logo" ></img>

        <BoxProfile>
          <FaBell name="bell" size={20} color="#a8a8b3"/>
          <BoxProfileTitle>
          <span>Mateus Santana</span>
          <p>teste@gmail.com</p>
          </BoxProfileTitle>
          <img src={avatar} alt="avatar"/>
        </BoxProfile>
    </Container>
  );
}

export default Header;
