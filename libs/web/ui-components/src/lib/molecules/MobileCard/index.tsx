import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';

import { LogoIcon } from '../../atoms/LogoIcon';
import { Title } from '../../atoms/Title';
import { Text } from '../../atoms/Text';

import {
  Container,
  ContainerProps,
  MobileIcon,
  MobileInfoLeft,
} from './mobileCard.styles';

export interface MobileCardData {
  label: string;
  text: string;
}

export interface MobileCardProps extends ContainerProps, MobileCardData {}

export const MobileCard: React.FC<MobileCardProps> = ({
  label,
  text,
  ...rest
}) => {
  const theme = useTheme() as Theme;
  return (
    <Container theme={theme} id="mobileCard" {...rest}>
      <MobileIcon>
        <LogoIcon />
      </MobileIcon>

      <MobileInfoLeft>
        <Title>{label}</Title>
        <Text>{text}</Text>
      </MobileInfoLeft>
    </Container>
  );
};
