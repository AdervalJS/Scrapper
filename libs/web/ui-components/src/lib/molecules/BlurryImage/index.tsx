import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { ItemImage } from '../../atoms/ItemImage';

import { Container, ContainerProps, Content } from './blurryImage.styles';

export interface BlurryImageProps extends ContainerProps {
  data: {
    imageUrl: string;
    alt: string;
  };
}

export const BlurryImage: React.FC<BlurryImageProps> = ({
  data,
  children,
  ...rest
}) => {
  const theme = useTheme() as Theme;

  return (
    <Container theme={theme} className="blurryImage" {...rest}>
      <ItemImage src={data.imageUrl} alt={data.alt} className='bg'/>

      <Content theme={theme}>{children}</Content>
    </Container>
  );
};
