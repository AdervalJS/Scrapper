import { useTheme } from 'styled-components';
import { Theme } from '@scrapper/shared/util-interfaces';
import { Content, ContentProps } from './itemSynopsis.styles';

export type ItemSynopsisProps = ContentProps;

export const ItemSynopsis: React.FC<ItemSynopsisProps> = (props) => {
  const theme = useTheme() as Theme;
  return <Content id="itemSynopsis" {...props} />;
};
