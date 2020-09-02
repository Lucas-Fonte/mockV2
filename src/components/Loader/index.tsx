import React, { useState, useEffect } from 'react';
import { Container, LoadingContainer, ChildrenContainer } from './styles';
import Loading from '../Loading';
import { timeout } from '../../utils/tools/timeout';

const Loader: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      await timeout(1500);
      setLoading(false);
    }

    loadData();
  }, [children]);

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <Loading loadingType="loading" />
        </LoadingContainer>
      ) : (
        <ChildrenContainer show={loading}>{children}</ChildrenContainer>
      )}
    </Container>
  );
};

export default Loader;
