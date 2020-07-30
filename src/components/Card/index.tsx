import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Loading from '../Loading';
import { timeout } from '../../utils/tools/timeout';

interface CardProps {
  content: string;
}
const Card = ({ content }: CardProps) => {
  const [message, setMessage] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      await timeout(1500);
      setMessage(content);
      setLoading(false);
    }

    loadData();
  }, [content]);

  return (
    <Container>
      {
      loading ? <Loading loadingType="loading" />
        : (
          <>
            <h2>{message}</h2>
          </>
        )
      }
    </Container>
  );
};

export default Card;
