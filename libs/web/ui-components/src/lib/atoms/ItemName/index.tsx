import { Content, ContentProps } from './itemName.styles';

export type ItemNameProps = ContentProps;

export const ItemName: React.FC<ItemNameProps> = (props) => {
  return <Content id="itemName" {...props} />;
};
