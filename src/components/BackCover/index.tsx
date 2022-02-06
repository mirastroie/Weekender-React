import React from 'react';
import styled from 'styled-components';
import {Box} from '@mui/material';
const BackCover = (props:any) => {
  return (
    <>
      <Container>
        <InnerContainer>
          <Image src={props.src}/>
          <Box sx={{p: 7}}>
            <Box sx={{fontSize: 'h2.fontSize', fontWeight: 'bold', lineHeight: 1.2}}>{props.title}</Box>
            <Box sx={{typography: 'subtitle1'}}>{props.subtitle}</Box>
            {props.children}
          </Box>
        </InnerContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
     width: 100%;
     height: 400px;
     position:relative;
     -webkit-box-shadow: inset 0px -50px 50px 26px rgba(0,0,0,0.54); 
    box-shadow: inset 0px -50px 50px 26px rgba(0,0,0,0.54);
  `;
const InnerContainer = styled.div`
     width: 100%;
     height: 400px;
     overflow: hidden;
     position: absolute;
     display: flex;
     align-items: flex-end;
  `;
const Image = styled.img`
     z-index: -1;
     width: 100%;
     height: auto;
     top: 50%;
     position: absolute;
     right: 50%;
     transform: translate(50%, -50%);
  `;
export default BackCover;
