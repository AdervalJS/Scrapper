import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { Content, ContentProps } from './gradientButton.styles';

export type GradientButtonProps = ContentProps;

export const GradientButton: React.FC<GradientButtonProps> = (props) => {
  const theme = useTheme() as Theme;
  return <Content theme={theme} id="gradientButton" {...props} />;
};
