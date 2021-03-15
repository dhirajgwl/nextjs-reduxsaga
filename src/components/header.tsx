import Link from 'next/link';
import React from 'react';
import Container from './container';

const Header = () => {
  return (
    <header>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <Container cssName="d-flex justify-content-between">
          <Link href="/">
            <a onClick={() => null} className="navbar-brand d-flex align-items-center">
              <strong>RHD</strong>
            </a>
          </Link>
        </Container>
      </div>
    </header>
  );
};

export default Header;
