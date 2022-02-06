import React from 'react';
import MenuItem from '../MenuItem';
import * as ROUTES from '../../utils/constants/routes';
import styled from 'styled-components';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {BREAKPOINTS} from '../../utils/constants/general';
import SignOutButton from '../SignOutButton';
import {Button, Box, Modal} from '@mui/material';
import Cart from '../../components/Cart';

const Navigation = (props:any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={ModalStyle}>
          <Cart/>
        </Box>
      </Modal>
      <Container>
        <div style={{marginTop: '14vh', display: 'flex', flexDirection: 'column'}}>
          <MenuItem path={`${ROUTES.PROFILE}/${props.userId}`} icon={faUserCircle}></MenuItem>
          <MenuItem path={ROUTES.HOME} icon={faHome}></MenuItem>
          <Button sx={{p: 0}} onClick={handleOpen}><MenuItem path={undefined} icon={faShoppingCart}></MenuItem></Button>
        </div>
        <div style={{flexGrow: 1}}></div>
        <SignOutButton/>
      </Container>
    </>
  );
};


const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '16px',
  boxShadow: 24,
  // boxShadow: '0px 0px 27px 6px rgba(255,255,255,0.32)',
};

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
