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

export const TitleWrapper = styled.div`
  text-align: left;
  margin-bottom: 10px;
  width: 100%;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ProjectsWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  padding-left: 10px;
  padding-right: 10px;
  overflow: auto;
  padding-bottom: 10vh;

  img {
    width: 100%;
  }
`;
export const ProjectContainer = styled.div`
  margin-bottom: 15px;
`;

interface PreviewPlayerProps {
  opacity: string;
  isMobile?: boolean;
}

export const PreviewPlayer = styled.div<PreviewPlayerProps>`
  opacity: ${(props) => props.opacity};
  margin-top: 10px;
  z-index: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #373637;
  border-radius: 4px;
  height: 150px;

  .gif_player img {
    margin-top: 3px;
    max-height: 150px;
    max-width: ${(props) => (props.isMobile ? '30%' : '90%')};
  }
`;

interface PreviewButtonProps {
  display: boolean;
}

export const PreviewButton = styled.div<PreviewButtonProps>`
  display: ${(props) => (props.display ? 'block' : 'none')};
  color: #fff;
  font-size: 30px;
  z-index: 2;
  position: absolute;
`;

export const GoToProject = styled.a`
  color: #fff;
  font-size: 30px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
