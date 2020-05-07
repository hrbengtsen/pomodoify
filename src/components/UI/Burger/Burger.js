import React from 'react';
import { StyledBurger } from '../index';

const Burger = (props) => (
  <StyledBurger hidden={props.hidden} onClick={() => props.setHidden(!props.hidden)}>
      <span />
      <span />
      <span />
      <span />
  </StyledBurger>
);

export default Burger;
