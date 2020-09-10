import React from 'react';
import { MdZoomOutMap } from 'react-icons/md';
import { VscOpenPreview } from 'react-icons/vsc';
import GifPlayer from 'react-gif-player';
import {
  PreviewButton,
  GoToProject,
  ZoomPreviewButton,
  PreviewPlayerContainer,
} from './styles';

interface PreviewPlayerProps {
  index: number;
  previewOpacity: string;
  previewStyle: string;
  zoomOn: boolean;
  previewButton: boolean;
  previewUrl: string | null;
  projectUrl: string | null;
  handlePlayPreview: (index: number) => void;
  handleZoomOn: (index: number) => void;
}
const PreviewPlayer: React.FC<PreviewPlayerProps> = ({
  index,
  previewOpacity,
  previewStyle,
  zoomOn,
  previewButton,
  previewUrl,
  projectUrl,
  handlePlayPreview,
  handleZoomOn,
}) => (
  <PreviewPlayerContainer
    id={`repo${index}`}
    opacity={previewOpacity}
    isMobile={previewStyle === 'mobile'}
    onClick={() => handlePlayPreview(index)}
    zoomOn={zoomOn}
  >
    {previewStyle !== 'none' ? (
      <>
        <PreviewButton displayButton={previewButton} />
        <GifPlayer gif={previewUrl} />
        <GoToProject
          href={projectUrl || ''}
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscOpenPreview />
        </GoToProject>
        <ZoomPreviewButton onClick={() => handleZoomOn(index)}>
          <MdZoomOutMap />
        </ZoomPreviewButton>
      </>
    ) : (
      <PreviewButton displayButton={previewButton}>
        Sorry, no preview :(
      </PreviewButton>
    )}
  </PreviewPlayerContainer>
);

export { PreviewPlayer };
