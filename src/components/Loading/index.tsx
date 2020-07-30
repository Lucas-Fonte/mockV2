import React from 'react';
import Lottie from 'react-lottie';
import { Container } from './styles';
import loadingAnimationData from '../../assets/loading.json';
import mailingAnimationData from '../../assets/mailing.json';

interface LoadingProps {
  loadingType: string;
}
const Loading = ({ loadingType }: LoadingProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingType === 'mailing' ? mailingAnimationData : loadingAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={150}
        width={150}
      />
    </Container>
  );
};
export default Loading;
