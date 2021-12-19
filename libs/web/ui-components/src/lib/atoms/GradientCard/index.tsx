import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { Content, ContentProps } from './gradientCard.styles';

export type GradientCardProps = ContentProps;

export const GradientCard: React.FC<GradientCardProps> = (props) => {
  const theme = useTheme() as Theme;
  return <Content theme={theme} id="gradientCard" {...props} />;
};
