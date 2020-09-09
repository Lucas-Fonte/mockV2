import React, { useState, useEffect } from 'react';
import { Container, LoadingContainer, ChildrenContainer } from './styles';
import Loading from '../Loading';

interface Loader {
  loaded?: boolean;
}
const Loader: React.FC<Loader> = ({ children, loaded }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      if (loaded) {
        setLoading(false);
      }
    }

    loadData();
  }, [loaded]);

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
