import React from 'react';
import {useState} from 'react';
import {signIn, signInWithGoogle} from '../../actions/auth';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import * as ROUTES from '../../utils/constants/routes';
import {Box, Link} from '@mui/material';
import {StyledInput} from '../../utils/constants/general';
import Logo from '../../components/Logo';
import {LANDING_IMAGE_SRC} from '../../utils/constants/general';

const SignIn = ({signIn, signInWithGoogle}: {signIn:Function, signInWithGoogle:Function}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Container
        sx={LandingCtnStyle}
        disableGutters>

        <Logo></Logo>
        <h3 style={{marginBottom: '30px'}}> Sign In </h3>
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
          sx={{my: 2, width: 300}}
          onClick={() => signIn(email, password, () => navigate('/') )}
        >
         Sign In
        </Button>
        <Button
          variant="contained"
          sx={{width: 300}}
          onClick={() => signInWithGoogle(() => navigate('/'))}
        >
          Sign in with Google
        </Button>
        <Box
          sx={{
            mt: 12,
          }}
        >
          Don &lsquo;t have an account?
          <Link
            style={{marginLeft: '5px'}}
            href={ROUTES.SIGN_UP}
          >
            Sign up
          </Link>
        </Box>
      </Container>
      <LandingImage></LandingImage>
    </div>
  );
};


const LandingImage = () => (
  <>
    <div style={{position: 'absolute', zIndex: -1, height: '100%', overflow: 'hidden'}}>
      <img style={{width: '100vw', height: 'auto'}}
        src={LANDING_IMAGE_SRC}/>
    </div>
  </>
);

const LandingCtnStyle = {
  width: 500,
  height: 1,
  pl: 18, pt: 18, pr: 18, m: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
};

function mapStateToProps(state:any) {
  return {
    user: state.authReducer.user,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    signIn: (email:string, password:string, callback:Function) => dispatch(signIn(email, password, callback)),
    signInWithGoogle: (callback:Function) => dispatch(signInWithGoogle(callback)),

  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn);
