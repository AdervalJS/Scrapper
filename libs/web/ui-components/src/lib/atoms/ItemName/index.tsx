import { Theme } from '@scrapper/shared/util-interfaces';
import { useTheme } from 'styled-components';
import { Content, ContentProps } from './itemName.styles';

export type ItemNameProps = ContentProps;

export const ItemName: React.FC<ItemNameProps> = (props) => {
  const theme = useTheme() as Theme;
  return <Content id="itemName" {...props} />;
};
