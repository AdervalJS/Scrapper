import { Theme } from '@scrapper/shared/util-interfaces';
import { useTheme } from 'styled-components';
import { ItemSimpleIcon } from '../../atoms/ItemSimpleIcon';
import { Container, ContainerProps } from './itemSimpleButton.styles';

export type ItemSimpleButtonProps = ContainerProps;

export const ItemSimpleButton: React.FC<ItemSimpleButtonProps> = (props) => {
  const theme = useTheme() as Theme;
  return (
    <Container theme={theme} id="itemSimpleButton" {...props}>
      <ItemSimpleIcon />
    </Container>
  );
};
