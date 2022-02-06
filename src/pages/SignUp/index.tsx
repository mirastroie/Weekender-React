import React from 'react';
import {useState} from 'react';
import {signUp, signUpWithGoogle} from '../../actions/auth';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {StyledInput} from '../../utils/constants/general';
import {Box, Button, Link} from '@mui/material';
import * as ROUTES from '../../utils/constants/routes';
import Logo from '../../components/Logo';

const SignUp = ({signUp, signUpWithGoogle}: {signUp:any, signUpWithGoogle:any}) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        position: 'relative',
        width: '450px',
        flexDirection: 'column',
        mt: 12,
      }}>
      <Logo></Logo>
      <h3 style={{marginBottom: '20px'}}> Sign Up </h3>
      <StyledInput
        name="username"
        value={username}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        type="text"
        placeholder="Full Name"
      />
      <StyledInput
        name="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        type="text"
        placeholder="Email Address"
      />
      <StyledInput
        name="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        type="password"
        placeholder="Password"
      />
      <Button
        variant="contained"
        sx={{width: 300, mt: 4}}
        onClick={() => signUp(username, email, password, () => navigate('/'))}
      >
            Sign Up
      </Button>
      <Button
        variant="contained"
        sx={{width: 300, mt: 2, mb: 6}}
        onClick={() => signUpWithGoogle(() => navigate('/'))}
      >
         Sign Up With Google
      </Button>
      <Box
      >
         Already have an account?
        <Link style={{marginLeft: '5px'}} href={ROUTES.SIGN_IN}>Sign in</Link>
      </Box>
    </Box>
  );
};


function mapStateToProps(state:any) {
  return {
    authMsg: state.authReducer.authMsg,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    signUp: (username:string, email:string, password:string, callback:any) => dispatch(signUp(username, email, password, callback)),
    signUpWithGoogle: (callback:any) => dispatch(signUpWithGoogle(callback)),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUp);
