import React from 'react';
import {useState} from 'react';
import {signIn, signInWithGoogle} from '../../actions/auth';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {styled} from '@mui/system';

const FormField = styled('input')(() => ({
  borderRadius: '25px',
  color: '#393C41',
  display: 'block',
  width: '100%',
  padding: '0 10px',
  margin: '4px 0',
}));
const SignIn = ({signIn, signInWithGoogle}: {signIn:any, signInWithGoogle:any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
      <Container
        style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
        sx={{width: 500, height: 1,
          pl: 18, pt: 18, pr: 18, m: 0,
          display: 'inline-flex', alignItems: 'center',
          justifyContent: 'center', flexDirection: 'column'}}
        disableGutters>
        <h1 style={{marginBottom: '3px'}} >Weekender</h1>
        <p style={{marginTop: '0px'}}>The weekend starts with us.</p>
        <h3 > Sign In </h3>
        <FormField
          sx={{py: 3, mt: 12}}
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="text"
          placeholder="Email Address"
        />
        <FormField
          sx={{py: 3}}
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <Button variant="contained" sx={{my: 2, width: 300}}onClick={() => signIn(email, password, () => navigate('/') )}> Sign In</Button>

        <Button variant="contained" sx={{width: 300}} onClick={() => signInWithGoogle(() => navigate('/'))}>Sign in with Google</Button>
      </Container>
      <div style={{position: 'absolute', zIndex: -1, height: '100%', overflow: 'hidden'}}>
        <img style={{width: '100vw', height: 'auto'}}
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/4a281f68521089.5b601ddaba329.jpg"/>
      </div>
    </div>
  );
};


function mapStateToProps(state:any) {
  return {
    user: state.authReducer.user,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    signIn: (email:string, password:string, callback:any) => dispatch(signIn(email, password, callback)),
    signInWithGoogle: (callback:any) => dispatch(signInWithGoogle(callback)),

  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn);
