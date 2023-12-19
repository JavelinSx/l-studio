import type { FC } from 'react';
import Burger from '../Burger/Burger';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <section className='header'>
      <Burger></Burger>
    </section>
  );
};

export default Header;
