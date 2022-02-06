/* eslint-disable max-len */
import styled from 'styled-components';

const BREAKPOINTS = {
  B1: 70,
  INNER_CONTAINER: {
    LEFT: 7,
    TOP: 10,
  },
};

const ORDER_STATUS = {
  SUCCESS: 'SUCCESS',
  INITIAL: 'INITIAL',
  ERROR: 'ERROR',
};

const LANDING_IMAGE_SRC = 'https://images.unsplash.com/photo-1522694013927-350c454fa94b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80';
const PROFILE_IMAGE_SRC = 'https://images.unsplash.com/photo-1609800029525-b91fdea39774?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80';
const EVENTS_IMAGE_SRC = 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';


const PaperStyle = {
  padding: '10px',
  height: 'auto',
  display: 'inline-flex',
  flexDirection: 'row',
  borderRadius: '10px',
  gap: '20px',
};

const StyledInput = styled.input`
width: 350px;
margin-left:auto !important;
margin-right:auto !important;
height: 40px;
border: none;
margin: 0.5rem 0;
color: #393c41 !important;
background-color: #f5f5f5;
box-shadow:  0px 14px 9px -15px rgba(0,0,0,0.25);
border-radius: 32px;
padding:  0 1rem;
&:hover{
 outline-width: 0;
}
&:focus{
 outline-width: 0;
 // border: 3px solid rgb(62,106,225,0.7);
}
`;
export {
  BREAKPOINTS,
  LANDING_IMAGE_SRC,
  PROFILE_IMAGE_SRC,
  EVENTS_IMAGE_SRC,

  ORDER_STATUS,

  PaperStyle,
  StyledInput,
};
