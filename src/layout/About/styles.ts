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
  width: 80%;  
  height: 100%;
  overflow: auto;
  padding-top: 15vh;
  padding-bottom: 15vh;

  @media (min-width: 600px){
    width: 40%; 
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
  }

  #toolsList {
      margin-top: 10px;
      overflow-wrap: break-word;
      width: 300px;
  }

`;
