import { Title } from '../../atoms/Title';
import { Text } from '../../atoms/Text';
import { ArrowRightIcon } from '../../atoms/ArrowRightIcon';

import { Container, ContainerProps, Button } from './bannerGradientCard.styles';
import { Theme } from '@scrapper/shared/util-interfaces';
import { useTheme } from 'styled-components';

export interface BannerGradientCardProps extends ContainerProps {
  title: string;
  text: string;
  buttonText: string;
  onClickButton?: () => void;
}

export const BannerGradientCard: React.FC<BannerGradientCardProps> = ({
  title,
  text,
  buttonText,
  onClickButton = () => {}, //eslint-disable-line
  ...rest
}) => {
  const theme = useTheme() as Theme;
  return (
    <Container theme={theme} id="bannerGradientCard" {...rest}>
      <Title>{title}</Title>
      <Text> {text}</Text>

      <Button theme={theme} onClick={onClickButton}>
        <Text>{buttonText}</Text>
        <ArrowRightIcon size={20} color="#FFF" />
      </Button>
    </Container>
  );
};
