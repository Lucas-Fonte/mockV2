import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Container, Content, MarkdownContent } from './styles';
import Header from '../../components/Header';
import Card from '../../components/Card';

const README_URL = 'https://raw.githubusercontent.com/Lucas-Fonte/Lucas-Fonte/master/README.md';

const About: React.FC = () => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const loadContent = async () => {
      const { data } = await axios.get(README_URL);
      setContent(data);
    };

    loadContent();
  }, [content]);

  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <MarkdownContent>
            <ReactMarkdown source={content} escapeHtml={false} />
          </MarkdownContent>
        </Card>
      </Content>
    </Container>
  );
};

export { About };
