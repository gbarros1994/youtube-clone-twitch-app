import React from 'react';
import { Text } from 'react-native';

import { Wrapper, Heading } from './styles';

const ComingSoon: React.FC = () => {
  return (
    <Wrapper>
      <Heading>Em breve</Heading>
      <Text style={{color: 'red'}}>Estamos em manutenção</Text>
    </Wrapper>
  )
};

export default ComingSoon;