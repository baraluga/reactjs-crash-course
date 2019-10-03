import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: '#FFF',
  textAlign: 'center',
  padding: '10px',
};

const linkStyle = {
  color: '#FFF',
  textDecoration: 'none',
};
