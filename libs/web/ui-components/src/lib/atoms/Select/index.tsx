import { Content, ContentProps } from './select.styles';

export type SelectProps = ContentProps;

export const Select: React.FC<SelectProps> = (props) => {
  return <Content id="select" {...props} />;
};
