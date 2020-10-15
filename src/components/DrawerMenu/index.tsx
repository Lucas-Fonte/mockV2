/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable object-curly-newline */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import lightLogo from '../../assets/lightLogo.svg';
import darkLogo from '../../assets/darkLogo.svg';
import { DrawerContainer } from './styles';
import { AppContext } from '../../App';
import { useOutside } from '../../utils/hooks/useOutside';

const DrawerMenu: React.FC = () => {
  const isMobile = window.innerWidth <= 1200;

  const { title } = useContext(ThemeContext);
  const { drawerOpen, toggleDrawer }: any = useContext(AppContext);
  const [logo, setLogo] = useState(darkLogo);
  const ref = useRef<HTMLDivElement>(null);

  const handleMenuClickOnMobile = () => {
    if (isMobile) {
      toggleDrawer();
    }
  };
  useOutside(ref, () => {
    if (drawerOpen && isMobile) {
      toggleDrawer();
    }
  });

  useEffect(() => {
    setLogo(title === 'light' ? lightLogo : darkLogo);
  }, [title]);

  return (
    <DrawerContainer ref={ref} themeColor={title} drawerOpen={drawerOpen}>
      {drawerOpen ? (
        <>
          <Link to="/" onClick={() => (isMobile ? toggleDrawer() : null)}>
            <img src={logo} alt="Mock" onClick={handleMenuClickOnMobile} />
          </Link>
          <Link to="/">
            <h1 onClick={handleMenuClickOnMobile}>home</h1>
          </Link>
          <Link to="/about">
            <h1 onClick={handleMenuClickOnMobile}>about</h1>
          </Link>
          <Link to="/books">
            <h1 onClick={handleMenuClickOnMobile}>books</h1>
          </Link>
          <h1 style={{ color: '#bbb' }}>articles</h1>
          <h1 style={{ color: '#bbb' }}>certificates</h1>
        </>
      ) : null}
    </DrawerContainer>
  );
};

export { DrawerMenu };
