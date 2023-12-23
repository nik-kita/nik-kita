import React from 'react';

const Button = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: 'grey',
      color: 'white',
      border: '1px solid black',
      borderRadius: 2,
      padding: '1px 5px',
      cursor: 'pointer',
      ...props.style,
    }}
  />
);

const ReactLiveScope = {
  React,
  ...React,
  Button,
};

export default ReactLiveScope;