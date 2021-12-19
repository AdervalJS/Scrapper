import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { Container, ContainerProps } from './card.styles';

export type CardProps = ContainerProps;

export const Card: React.FC<CardProps> = (Props) => {
  const theme = useTheme() as Theme;
  return <Container theme={theme} id="card" {...Props} />;
};
