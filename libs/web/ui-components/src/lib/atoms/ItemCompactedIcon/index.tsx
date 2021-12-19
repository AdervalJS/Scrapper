import { itemCompactedIconSvg } from '@scrapper/shared/assets';
import { Content, ContentProps } from './itemCompactedIcon.styles';

export type ItemCompactedIconProps = ContentProps;

export const ItemCompactedIcon: React.FC<ItemCompactedIconProps> = (props) => {
  return (
    <Content
      id="itemCompactedIcon"
      src={itemCompactedIconSvg}
      alt="itemCompactedIcon"
      {...props}
    />
  );
};
