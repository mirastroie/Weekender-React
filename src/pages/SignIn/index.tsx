import React from 'react';
import {useState} from 'react';
import {signIn, signInWithGoogle} from '../../actions/auth';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const SignIn = ({signIn, signInWithGoogle}: {signIn:any, signInWithGoogle:any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <div>
      <h3> Sign In </h3>
      <TextField
        variant="outlined"
        size="small"
        sx={{py: 3}}
        style={{color: '#393C41'}}
        name="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        type="text"
        placeholder="Email Address"
      />
      <TextField
        variant="outlined"
        size="small"
        sx={{py: 3}}
        style={{color: '#393C41'}}
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
