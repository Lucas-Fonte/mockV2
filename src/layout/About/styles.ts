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

export const MarkdownContent = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-left: 20%;
  padding-bottom: 15vh;


  @media (max-width: 450px){
    padding-left: 5%;

    img {
      max-width:85%;
    }
  }

  @media (min-width: 1200px){
    margin-top: -4%;
    padding-left: 30%;
  }

  @media (min-width: 1000px){
     padding-bottom: 35vh;
  }

  @media (max-height: 900px){
    padding-top: 30%;
  }

  @media (max-height: 800px){
    padding-top: 50%;
  }
  
  @media (max-height: 700px){
    padding-top: 70%;
  }

  @media (max-height: 600px){
    padding-top: 110%;
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
      max-width:85%;

      img {
        max-height: 26px;
      }
  }


`;
