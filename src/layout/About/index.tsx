import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Container, Content, MarkdownContent } from './styles';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { timeout } from '../../utils/tools/timeout';

const README_URL = 'https://raw.githubusercontent.com/Lucas-Fonte/Lucas-Fonte/master/README.md';

const About: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const loadContent = async () => {
      const { data } = await axios.get(README_URL);

      setLoading(true);
      await timeout(1500);
      setContent(data);
      setLoading(false);
    };

    loadContent();
  }, [content]);

  return (
    <Container>
      <Header />
      <Content>
        {loading
          ? <Loading loadingType="loading" />
          : (
            <MarkdownContent>
              <ReactMarkdown source={content} escapeHtml={false} />
            </MarkdownContent>
          )}
      </Content>
    </Container>
  );
};

export { About };
