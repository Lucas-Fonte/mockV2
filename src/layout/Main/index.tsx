/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import GifPlayer from 'react-gif-player';
import { VscOpenPreview } from 'react-icons/vsc';
import {
  Container,
  Content,
  GoToProject,
  PreviewButton,
  PreviewPlayer,
  ProjectContainer,
  ProjectsContainer,
  ProjectsWrapper,
  TitleWrapper,
} from './styles';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import { urlResolver } from '../../utils/tools/urlResolver';
import { timeout } from '../../utils/tools/timeout';
import { mainRepositories } from './content';

const url = urlResolver('Lucas-Fonte', 'dark');

const REPOS_ARRAY_URLS = mainRepositories.map(
  ({ name, previewUrl, previewStyle, projectUrl = null }) => ({
    statsUrl: url.resolveGithubStats(name),
    githubUrl: url.resolveGithubRepositories(name),
    previewUrl,
    previewStyle,
    projectUrl,
    previewOpacity: '0.5',
    previewButton: true,
  })
);

const Main: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState(REPOS_ARRAY_URLS);

  const handlePlayPreview = (index: number) => {
    const currentData = data;
    console.log({ data, index: data[index] });

    if (currentData[index].previewStyle !== 'none') {
      currentData[index].previewOpacity = '1.0';
      currentData[index].previewButton = false;
    }

    setData([...currentData]);
  };

  useEffect(() => {
    const loadContent = async () => {
      await timeout(2000);
      setLoaded(true);
    };

    loadContent();
  }, []);
  return (
    <Container>
      <Header />
      <Content>
        <Loader loaded={loaded}>
          <ProjectsContainer>
            <ProjectsWrapper>
              <TitleWrapper>
                <h1>Projects</h1>
              </TitleWrapper>
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
                  },
                  index
                ) => (
                  <ProjectContainer key={`repo${statsUrl}`}>
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
                    <PreviewPlayer
                      id={`repo${index}`}
                      opacity={previewOpacity}
                      isMobile={previewStyle === 'mobile'}
                      onClick={() => handlePlayPreview(index)}
                    >
                      {previewStyle !== 'none' ? (
                        <>
                          <PreviewButton display={previewButton} />
                          <GifPlayer gif={previewUrl} />
                          <GoToProject
                            href={projectUrl || ''}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <VscOpenPreview />
                          </GoToProject>
                        </>
                      ) : (
                        <PreviewButton display={previewButton}>
                          Sorry, no preview :(
                        </PreviewButton>
                      )}
                    </PreviewPlayer>
                  </ProjectContainer>
                )
              )}
            </ProjectsWrapper>
          </ProjectsContainer>
        </Loader>
      </Content>
    </Container>
  );
};

export default Main;
