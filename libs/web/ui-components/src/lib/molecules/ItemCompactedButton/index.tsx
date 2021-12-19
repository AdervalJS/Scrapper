import { Theme } from '@scrapper/shared/util-interfaces';
import { useTheme } from 'styled-components';
import { ItemCompactedIcon } from '../../atoms/ItemCompactedIcon';
import { Container, ContainerProps } from './itemCompactedButton.styles';

export type ItemCompactedButtonProps = ContainerProps;

export const ItemCompactedButton: React.FC<ItemCompactedButtonProps> = (
  props
) => {
  const theme = useTheme() as Theme;
  return (
    <Container theme={theme} id="itemCompactedButton" {...props}>
      <ItemCompactedIcon />
    </Container>
  );
};
