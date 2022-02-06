import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Item = ({icon}:{icon:any}) => (
  <div style={menuItemTitle}>
    <Row>
      <FontAwesomeIcon icon={icon} style={{width: '30px', height: '30px'}}></FontAwesomeIcon>
    </Row>
  </div>
);

function MenuItem({path, icon}:{path:any, icon:any}) {
  const Path = path;
  return ( <>
    {path &&
      <Link to={Path} style={{textDecoration: 'none'}}>
        <Item icon={icon}></Item>
      </Link>
    }
    { !path &&
        <Item icon={icon}></Item>
    }
  </>
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
  borderRadius: '50%',
};

export default MenuItem;
