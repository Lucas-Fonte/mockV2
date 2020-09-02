/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Container, Content, MarkdownContent, Wrapper } from './styles';
import Header from '../../components/Header';
import Loader from '../../components/Loader';

const README_URL =
  'https://raw.githubusercontent.com/Lucas-Fonte/Lucas-Fonte/master/README.md';

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
        <Loader>
          <Wrapper>
            <MarkdownContent>
              <ReactMarkdown source={content} escapeHtml={false} />
            </MarkdownContent>
          </Wrapper>
        </Loader>
      </Content>
    </Container>
  );
};

export { About };
