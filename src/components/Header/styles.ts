import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 5px 10px;
  img {
    margin-left: -10%;
  }
`;

export const SideContainer = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
