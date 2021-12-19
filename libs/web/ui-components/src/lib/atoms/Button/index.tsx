import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { Container, ContainerProps } from './button.styles';

export type ButtonProps = ContainerProps;

export const Button: React.FC<ButtonProps> = ({
  keepPressed = false,
  ...rest
}) => {
  const theme = useTheme() as Theme;
  return (
    <Container theme={theme} id="button" {...rest} keepPressed={keepPressed} />
  );
};
