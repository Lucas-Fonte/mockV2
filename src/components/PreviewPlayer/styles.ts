/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import styled from 'styled-components';

interface PreviewPlayerContainerProps {
  opacity: string;
  isMobile?: boolean;
  zoomOn?: boolean;
}

export const PreviewPlayerContainer = styled.div<PreviewPlayerContainerProps>`
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
    max-height: ${(props) => (props.zoomOn ? '100%' : '150px')};
    max-width: ${(props) =>
      props.isMobile
        ? props.zoomOn
          ? '90%'
          : '30%'
        : props.zoomOn
        ? '95%'
        : '50%'};
    border-radius: ${(props) => (props.zoomOn ? '8px' : null)};
    transition: max-width 0.5s, max-height 0.5s linear;
  }
`;

interface PreviewButtonProps {
  displayButton: boolean;
}

export const PreviewButton = styled.div<PreviewButtonProps>`
  display: ${(props) => (props.displayButton ? 'block' : 'none')};
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
  cursor: pointer;
`;

export const ZoomPreviewButton = styled.div`
  color: #fff;
  font-size: 30px;
  position: absolute;
  right: 10px;
  bottom: 100px;
  cursor: pointer;
`;
