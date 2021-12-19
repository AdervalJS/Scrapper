import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';

import { MobileCard, MobileCardData } from '../../molecules/MobileCard';
import { GradientButtonArrowUp } from '../../molecules/GradientButtonArrowUp';
import { LinkGroup, Data } from '../../molecules/LinkGroup';

import {
  Container,
  ContainerProps,
  Content,
  Shortcut,
  Copyright,
} from './footer.style';

export type FooterData = Required<Data>[];

export interface FooterProps extends ContainerProps {
  data: FooterData;
  copyright: string;
  card: MobileCardData;
}

export const Footer: React.FC<FooterProps> = ({
  data,
  copyright,
  card,
  ...rest
}) => {
  const theme = useTheme() as Theme;

  function toTopPage() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Container theme={theme} id="footer" {...rest}>
      <Content>
        <GradientButtonArrowUp theme={theme} onClick={toTopPage} />

        <Shortcut>
          {data.map((data) => (
            <LinkGroup key={data.title} data={data} />
          ))}

          <MobileCard {...card} />
        </Shortcut>

        <Copyright theme={theme}>{copyright}</Copyright>
      </Content>
    </Container>
  );
};
