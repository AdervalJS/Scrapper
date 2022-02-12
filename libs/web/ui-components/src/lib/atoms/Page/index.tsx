import { Content, ContentProps } from './page.styles';

export type PageProps = ContentProps;

export const Page: React.FC<PageProps> = (props) => {
  return <Content className="page" {...props} />;
};
