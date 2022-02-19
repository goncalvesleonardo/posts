import React from 'react';

import {Container, Subject, Date, Detail} from './styles';

export function PostDetail() {
  return (
    <Container>
      <Subject>Assunto da mensagem</Subject>
      <Date>Data da mensagem</Date>
      <Detail>
        bom dia, estamos marcando nossa reunião para a proxima segunda feira dia
        14/02/2022
      </Detail>
    </Container>
  );
}
