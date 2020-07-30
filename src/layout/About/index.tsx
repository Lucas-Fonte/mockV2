import React from 'react';
import { Container, Content } from './styles';
import Card from '../../components/Card';
import Header from '../../components/Header';

const About: React.FC = () => (
  <Container>
    <Header />
    <Content>
      <Card content="about" />
    </Content>
  </Container>
);

export default About;
