import React from 'react';
import { Container, Content, ProjectsContainer } from './styles';
import Card from '../../components/Loader';
import Header from '../../components/Header';
import { urlResolver } from '../../utils/tools/urlResolver';

const url = urlResolver('Lucas-Fonte', 'dark');

const mainRepositories = [
  'mockV2',
  'server_test',
  'Pineapple',
  'GoStack-Challenge',
  'CSV-to-SQL',
];

const REPOS_ARRAY_URLS = mainRepositories.map((repo) => ({
  statsUrl: url.resolveGithubStats(repo),
  githubUrl: url.resolveGithubRepositories(repo),
}));

const Main: React.FC = () => (
  <Container>
    <Header />
    <Content>
      <Card>
        <ProjectsContainer>
          {REPOS_ARRAY_URLS.map(({ statsUrl, githubUrl }, index) => (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <img src={statsUrl} alt={`repo${index}`} id={`repo${index}`} />
            </a>
          ))}
        </ProjectsContainer>
      </Card>
    </Content>
  </Container>
);

export default Main;
