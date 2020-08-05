import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  
`;

export const MarkdownContent = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  padding-top: 15vh;
  padding-bottom: 15vh;

  @media (max-width: 450px){
    width: 80%; 
  }

  @media (max-height: 800px){
    padding-top: 70%;
  }
  
  @media (max-height: 700px){
    padding-top: 120%;
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
      margin-top: 10px;
      background: #fff;
      width: 300px;
      padding: 4px;
      border-radius: 2px;
  }

`;
