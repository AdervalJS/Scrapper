import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { ArrowUpIcon } from '../../atoms/ArrowUpIcon';
import { Container, ContainerProps } from './gradientButtonArrowUp.styles';

export type GradientButtonArrowUpProps = ContainerProps;

export const GradientButtonArrowUp: React.FC<GradientButtonArrowUpProps> = (
  props
) => {
  const theme = useTheme() as Theme;
  return (
    <Container theme={theme} id="gradientButtonArrowUp" {...props}>
      <ArrowUpIcon size={30} color="#FFF" />
    </Container>
  );
};
