import React from 'react';
import { Container, Content, ProjectsContainer } from './styles';
import Card from '../../components/Card';
import Header from '../../components/Header';

const REPOS_ARRAY_URLS = [
  'https://github-readme-stats.vercel.app/api/pin/?username=Lucas-Fonte&repo=mockV2&theme=dark',
  'https://github-readme-stats.vercel.app/api/pin/?username=Lucas-Fonte&repo=Pineapple&theme=dark',
  'https://github-readme-stats.vercel.app/api/pin/?username=Lucas-Fonte&repo=GoStack-Challenge&theme=dark',
  'https://github-readme-stats.vercel.app/api/pin/?username=Lucas-Fonte&repo=CSV-to-SQL&theme=dark',
];

const Main: React.FC = () => (
  <Container>
    <Header />
    <Content>
      <Card>
        <ProjectsContainer>
          {REPOS_ARRAY_URLS.map((repoUrl, index) => (<img src={repoUrl} alt={`repo${index}`} id={`repo${index}`} />))}
        </ProjectsContainer>
      </Card>
    </Content>
  </Container>
);

export default Main;
