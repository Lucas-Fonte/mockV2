/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
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

interface ProjectsWrapperProps {
  isMobile?: boolean;
}

export const ProjectsWrapper = styled.div<ProjectsWrapperProps>`
  width: 100%;
  height: 100%;
  max-width: ${(props) => (props.isMobile ? '400px' : '800px')};
  margin-left: ${(props) => (props.isMobile ? null : '15vw')};
  padding-left: 10px;
  padding-right: 10px;
  overflow: auto;
  padding-bottom: 10vh;

  img {
    width: 100%;
  }
`;

export const ProjectsList = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ProjectContainer = styled.div`
  margin-bottom: 15px;
  width: 350px;
`;

interface ZoomPreviewProps {
  isPlaying?: boolean;
}

export const ZoomPreview = styled.div<ZoomPreviewProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${(props) => (props.isPlaying ? 'rgba(51, 53, 55, 0.8)' : null)};
`;
