import styled, { keyframes } from 'styled-components';

interface ChildrenContainerProps {
  show: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 100%;

  h1 {
    margin-top: 30px;
  }

`;
export const LoadingContainer = styled.div`
  margin-bottom: 30%;
  
  @media (max-width: 450px){
    margin-bottom: 50%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ChildrenContainer = styled.div`
  height: 100%;
  animation: ${(props: ChildrenContainerProps) => (props.show ? null : fadeIn)} 0.3s linear;
`;
