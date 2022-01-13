import { CloseIcon } from '../../atoms/CloseIcon';

import { Container, ContainerProps } from './close.styles';

export type CloseButtonProps = ContainerProps;

export const CloseButton: React.FC<CloseButtonProps> = (props) => {
  return (
    <Container {...props} className="closeButton">
      <CloseIcon />
    </Container>
  );
};
