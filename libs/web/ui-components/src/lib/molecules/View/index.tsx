import { Theme } from '@scrapper/shared/util-interfaces';
import { useTheme } from 'styled-components';
import { Text } from '../../atoms/Text';
import { ViewIcon } from '../../atoms/ViewIcon';

import { Container, ContainerProps } from './view.styles';

export interface ViewProps extends ContainerProps {
  view: number;
}

export const View: React.FC<ViewProps> = ({ view, ...rest }) => {
  const theme = useTheme() as Theme;

  return (
    <Container id="view" theme={theme} {...rest}>
      <ViewIcon color={theme?.secondaryText} />
      <Text>{view}</Text>
    </Container>
  );
};
