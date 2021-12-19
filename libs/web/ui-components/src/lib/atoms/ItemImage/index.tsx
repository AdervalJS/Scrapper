import { Content, ContentProps } from './itemImage.styles';

export type ItemImageProps = ContentProps;

export const ItemImage: React.FC<ItemImageProps> = (props) => {
  return <Content id="itemImage" {...props} />;
};
