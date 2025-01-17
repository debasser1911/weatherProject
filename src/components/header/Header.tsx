import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  some?: string;
};

const Header = (props: Props) => {
  return (
    <header>
      <Link to="/countries">Countries page</Link>
    </header>
  );
};

export default Header;
