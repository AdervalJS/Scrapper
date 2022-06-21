import { Content, ContentProps } from './itemSynopsis.styles';

export type ItemSynopsisProps = ContentProps;

export const ItemSynopsis: React.FC<ItemSynopsisProps> = (props) => {
  return <Content id="itemSynopsis" {...props} />;
};
