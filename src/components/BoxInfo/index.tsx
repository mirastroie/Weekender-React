import React from 'react';
import {Paper, Box} from '@mui/material';

const BoxInfo = (props:any) => {
  const ActionComponent = props.actionComponent;
  return (
    <>
      <Paper sx={BoxInfoStyle}>
        <Box sx={{fontSize: 'h6.fontSize', mb: 10}}>{props.title}</Box>
        { React.Children.map(props.children, (child:any, index:number) => (
          <Box key={index} sx={{flexGrow: 1, width: '100%'}}>
            {child}
          </Box>
        ))}
        <ActionComponent/>
      </Paper>
    </>
  );
};

const BoxInfoStyle = {
  width: '400px',
  height: '400px',
  padding: '20px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '16px',
};

export default BoxInfo;
