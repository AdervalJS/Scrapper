import { Theme } from '@scrapper/shared/util-interfaces';
import { useTheme } from 'styled-components';
import { Content, ContentProps } from './select.styles';

export type SelectProps = ContentProps;

export const Select: React.FC<SelectProps> = (props) => {
  const theme = useTheme() as Theme;
  return <Content id="select" {...props} />;
};
