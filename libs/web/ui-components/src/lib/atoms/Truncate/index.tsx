import { Container, ContainerProps } from './truncate.styles';

export type TruncateProps = ContainerProps;

export const Truncate: React.FC<TruncateProps> = (props) => {
  return <Container {...props} />;
};
