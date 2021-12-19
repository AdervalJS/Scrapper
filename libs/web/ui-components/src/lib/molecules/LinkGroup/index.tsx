import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';

import { Title } from '../../atoms/Title';
import { Link } from '../../atoms/Link';
import { Button } from '../../atoms/Button';

import { Container } from './linkGroup.styles';

export type Link = {
  label: string;
  url: string;
};

export type Data = {
  title?: string;
  links: Link[];
};

export interface LinkGroupProps {
  data: Data;
}

export const LinkGroup: React.FC<LinkGroupProps> = ({ data, ...rest }) => {
  const { title, links } = data;
  const theme = useTheme() as Theme;

  return (
    <Container
      theme={theme}
      columns={title ? true : false}
      id="linkGroup"
      {...rest}
    >
      {title && <Title>{title}</Title>}

      {title &&
        links.map(({ label, url }) => (
          <Link key={url} to={url}>
            {label}
          </Link>
        ))}

      {!title &&
        links.map(({ label, url }) => (
          <Button key={url}>
            <Link to={url}>{label}</Link>
          </Button>
        ))}
    </Container>
  );
};
