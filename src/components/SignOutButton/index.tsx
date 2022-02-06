import React from 'react';
import {useNavigate} from 'react-router-dom';
import {signOut as signOutService} from '../../actions/auth';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
const SignOutButton = ({signOut}: {signOut:any}) => {
  const navigate = useNavigate();
  return (
    <Row onClick={() => signOut(() => navigate('/'))}>
      <FontAwesomeIcon icon={faSignOutAlt} style={{width: '23px', height: '23px'}}></FontAwesomeIcon>
    </Row>
  );
};
const Row = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  flex-direction: row;
  padding-top: 18%;
  padding-bottom: 18%;
  margin-bottom: 10px;
`;
function mapStateToProps(state:any) {
  return {
    user: state.authReducer.user,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    signOut: (callback:any) => dispatch(signOutService(callback)),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignOutButton);
