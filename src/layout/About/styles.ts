import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const MarkdownContent = styled.div`
  max-width: 600px;
  overflow: auto;
  text-align: left;
  padding-bottom: 15vh;
  margin-top: 5px; /** Fix for IphoneXR on Safari*/

  @media (max-width: 450px) {
    padding-left: 5%;

    img {
      max-width: 85%;
    }
  }

  h3:first-of-type {
    font-size: 30px;
  }

  h2 {
    margin-top: 14px;
    margin-bottom: 14px;
  }

  hr {
    display: none;
    margin-top: 14px;
    margin-bottom: 14px;
  }

  ul {
    margin-bottom: 14px;
  }

  #connectList {
    margin-top: 10px;
    background: #fff;
    padding: 4px;
    border-radius: 2px;
  }

  #toolsList {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    margin-top: 10px;
    background: #fff;
    padding: 4px;
    border-radius: 2px;
    max-width: 85%;

    img {
      max-height: 26px;
    }
  }
`;
