import React, { Component } from 'react';

const Header = (props)=> {
    return (
      <div className="col-xs-1 col-xs-offset-11">
          <h1>Welcome to Header</h1>
          {true ? 'hello' : 'world'}
          <h2>{props.homeLink}</h2>
      </div>
    );
  }

export default Header;
