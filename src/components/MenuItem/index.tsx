import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function MenuItem({path, icon}:{path:any, icon:any}) {
  const Path = path;
  return (
    <Link to={Path} style={menuItemTitle}>
      <Row>
        <FontAwesomeIcon icon={icon} style={{width: '30px', height: '30px'}}></FontAwesomeIcon>
      </Row>
    </Link>
  );
}

const Row = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  flex-direction: row;
  padding-top: 18%;
  padding-bottom: 18%;
`;
const menuItemTitle = {
  fontSize: 16,
  lineHeight: '20px',
  letterSpacing: '0.2px',
  color: '#A4A6B3',
  textDecoration: 'none',
  borderRadius: '50%',
};

export default MenuItem;
