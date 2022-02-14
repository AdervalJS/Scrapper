import styled from 'styled-components';
import { Card } from '../../atoms/Card';

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  #dropSelectOption {
    margin: 3px;
  }

  #title {
    margin-top: 30px;
    font-size: clamp(1rem, 1.5rem, 2rem);
    line-height: clamp(2.1vw, 2vw, 3rem);
  }
`;
