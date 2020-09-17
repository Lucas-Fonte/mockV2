/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import React, { useEffect, useState } from 'react';
import {
  Container,
  Content,
  ProjectContainer,
  ProjectsContainer,
  ProjectsList,
  ProjectsWrapper,
  TitleWrapper,
  ZoomPreview,
} from './styles';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import { urlResolver } from '../../utils/tools/urlResolver';
import { timeout } from '../../utils/tools/timeout';
import { mainRepositories } from '../../data/content';
import { PreviewPlayer } from '../../components/PreviewPlayer';
import { DrawerMenu } from '../../components/DrawerMenu';

const url = urlResolver('Lucas-Fonte', 'dark');

const REPOS_ARRAY_URLS = mainRepositories.map(
  ({ name, previewUrl, previewStyle, projectUrl = null }) => ({
    statsUrl: url.resolveGithubStats(name),
    githubUrl: url.resolveGithubRepositories(name),
    previewUrl,
    previewStyle,
    projectUrl,
    zoomOn: false,
    previewOpacity: '0.5',
    previewButton: true,
  })
);

const Main: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState(REPOS_ARRAY_URLS);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPreview = (index: number) => {
    const currentData = data;

    if (currentData[index].previewStyle !== 'none') {
      currentData[index].previewOpacity = '1.0';
      currentData[index].previewButton = false;
    }

    setData([...currentData]);
  };

  const handleZoomOn = (index: number) => {
    const currentData = data;

    currentData[index].zoomOn = true;
    setIsPlaying(true);
    setData([...currentData]);
  };

  const handleZoomOff = () => {
    const currentData = data.map((dataElement) => ({
      ...dataElement,
      zoomOn: false,
    }));

    setIsPlaying(false);
    setData([...currentData]);
  };

  useEffect(() => {
    const loadContent = async () => {
      handleZoomOff();
      await timeout(2000);
      setLoaded(true);
    };

    loadContent();
    // eslint-disable-next-line
  }, []);
  return (
    <Container>
      <ZoomPreview
        isPlaying={isPlaying}
        onClick={() => (isPlaying ? handleZoomOff() : null)}
      >
        <DrawerMenu />
        <Header />
        <Content>
          <Loader loaded={loaded}>
            <ProjectsContainer>
              <ProjectsWrapper isMobile={window.innerWidth <= 1200}>
                <TitleWrapper>
                  <h1>Projects</h1>
                </TitleWrapper>
                <ProjectsList>
                  {data.map(
                    (
                      {
                        statsUrl,
                        githubUrl,
                        previewStyle,
                        previewUrl,
                        projectUrl,
                        previewButton,
                        previewOpacity,
                        zoomOn,
                      },
                      index
                    ) => (
                      <ProjectContainer key={`repo${statsUrl}`}>
                        <PreviewPlayer
                          index={index}
                          previewOpacity={previewOpacity}
                          previewStyle={previewStyle}
                          zoomOn={zoomOn}
                          previewButton={previewButton}
                          previewUrl={previewUrl}
                          projectUrl={projectUrl}
                          handlePlayPreview={handlePlayPreview}
                          handleZoomOn={handleZoomOn}
                        />
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={statsUrl}
                            alt={`repo${index}`}
                            id={`repo${index}`}
                          />
                        </a>
                      </ProjectContainer>
                    )
                  )}
                </ProjectsList>
              </ProjectsWrapper>
            </ProjectsContainer>
          </Loader>
        </Content>
      </ZoomPreview>
    </Container>
  );
};

export default Main;
