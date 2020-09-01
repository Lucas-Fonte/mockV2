import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 600px;
  padding-left: 5%;
  overflow: auto;

  img {
    margin-bottom: 10px;
    width: 95%;
    max-width: 600px;
  }
`;
