import styled from 'styled-components';
import * as template from '../../template/read';

export const Container = styled(template.Container)`
  .content {
  }
`;

export const Header = styled(template.Header)`
  .closeButton {
    position: fixed;
    right: 20px;
  }
`;

export const HeaderContent = styled.div`
  display: grid;
  max-width: 50%;

  #title {
    margin-top: 20px;
    margin-bottom: 0;
    text-align: center;
    font-size: clamp(1rem, 1.4vw, 1.7rem);
    line-height: clamp(2.1vw, 1.6vw, 2.5rem);
  }

  #text {
    margin-top: 2px;
    margin-bottom: 0;
    text-align: center;
    font-size: clamp(0.7rem, 0.9vw, 1rem);
    line-height: clamp(1.3rem, 1.2vw, 2rem);
  }
`;

export const Content = styled(template.Content)`
  .chapters {
    margin: 0 auto;
    width: 95%;
    height: 70vh;
  }
`;
