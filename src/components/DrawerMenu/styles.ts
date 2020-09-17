import styled from 'styled-components';

interface DrawerContainerProps {
  themeColor: string;
  drawerOpen: boolean;
}

export const DrawerContainer = styled.div<DrawerContainerProps>`
  background: ${(props) => (props.themeColor === 'light' ? '#000' : '#fff')};
  height: 100%;
  width: ${(props) => (props.drawerOpen ? '75vw' : '0px')};
  position: absolute;
  z-index: 10;
  max-width: 400px;
  transition: width 0.2s ease-in-out;

  img {
    margin-top: 10px;
  }
  h1 {
    margin-top: 20px;
    margin-left: 15px;
  }

  a {
    color: ${(props) => (props.themeColor === 'light' ? '#fff' : '#000')};
  }
`;
