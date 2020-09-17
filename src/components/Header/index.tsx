import React, { useState, useContext, useEffect } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, HorizontalContainer, SideContainer } from './styles';
import lightLogo from '../../assets/lightLogo.svg';
import darkLogo from '../../assets/darkLogo.svg';
import { AppContext } from '../../App';

const Header: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);
  const { toggleTheme, toggleDrawer }: any = useContext(AppContext);
  const [logo, setLogo] = useState(darkLogo);

  useEffect(() => {
    setLogo(title === 'light' ? darkLogo : lightLogo);
  }, [title]);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Mock" />
      </Link>
      <SideContainer>
        <HorizontalContainer>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={30}
            handleDiameter={13}
            onColor="#666"
            offColor="#000"
          />
          <a
            href="https://www.linkedin.com/in/lucas-fonte-02b03a164/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size="30" color={colors.text} />
          </a>
          <a
            href="https://github.com/Lucas-Fonte/mockV2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub size="30" color={colors.text} />
          </a>
          <AiOutlineMenu size="30" color={colors.text} onClick={toggleDrawer} />
        </HorizontalContainer>
      </SideContainer>
    </Container>
  );
};

export default Header;
