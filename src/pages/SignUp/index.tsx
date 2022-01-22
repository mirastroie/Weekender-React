import React from 'react';
import {useState} from 'react';
import {signUp, signUpWithGoogle} from '../../actions/auth';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const SignUp = ({signUp, signUpWithGoogle}: {signUp:any, signUpWithGoogle:any}) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <h3> Sign Up </h3>
      <input
        name="username"
        value={username}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        type="text"
        placeholder="Full Name"
      />
      <input
        name="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        type="password"
        placeholder="Password"
      />
      <button onClick={() => signUp(username, email, password)}>Sign Up</button>
      <button onClick={() => signUpWithGoogle(() => navigate('/'))}>Sign Up With Google</button>
    </div>
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
    signUp: (username:string, email:string, password:string) => dispatch(signUp(username, email, password)),
    signUpWithGoogle: (callback:any) => dispatch(signUpWithGoogle(callback)),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUp);
