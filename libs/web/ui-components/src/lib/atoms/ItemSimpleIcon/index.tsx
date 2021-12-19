import { itemSimpleIconSvg } from '@scrapper/shared/assets';
import { Content, ContentProps } from './itemSimpleIcon.styles';

export type ItemSimpleIconProps = ContentProps;

export const ItemSimpleIcon: React.FC<ItemSimpleIconProps> = (props) => {
  return (
    <Content
      id="itemSimpleIcon"
      src={itemSimpleIconSvg}
      alt="itemSimpleIcon"
      {...props}
    />
  );
};
