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

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 95%;
  padding-left: 5%;
  overflow: auto;

  a {
    max-width: 400px;
  }

  img {
    max-width: 95%;
    margin-bottom: 10px;
  }
`;
