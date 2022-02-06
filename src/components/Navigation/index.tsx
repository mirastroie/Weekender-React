import React from 'react';
import MenuItem from '../MenuItem';
import * as ROUTES from '../../utils/constants/routes';
import styled from 'styled-components';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {BREAKPOINTS} from '../../utils/constants/general';
import SignOutButton from '../SignOutButton';
const Navigation = (props:any) => (
  <Container>
    <div style={{marginTop: '14vh', display: 'flex', flexDirection: 'column'}}>
      <MenuItem path={`${ROUTES.PROFILE}/${props.userId}`} icon={faUserCircle}></MenuItem>
      <MenuItem path={ROUTES.HOME} icon={faHome}></MenuItem>
      <MenuItem path={ROUTES.HOME} icon={faShoppingCart}></MenuItem>
    </div>
    <div style={{flexGrow: 1}}></div>
    <SignOutButton/>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: ${BREAKPOINTS.B1}px;
  overflow: hidden;
  background-color: #090A0B;
  border-color: #363336;
  top: 0;
  left: 0;
  height: 100vh;
  margin-bottom: 4vh;
`;

export default Navigation;
