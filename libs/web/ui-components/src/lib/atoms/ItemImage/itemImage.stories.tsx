import { Meta, Story } from '@storybook/react';
import { ItemImage, ItemImageProps } from '.';
import { manga } from '@scrapper/shared/util-test';

export default {
  title: 'atoms/ItemImage',
  component: ItemImage,
} as Meta;

const Actions = {
  onClick: () => alert(`click action`),
};

const Template: Story<ItemImageProps> = (args) => (
  <ItemImage {...Actions} {...args} alt={manga.name} src={manga.image} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: '130px',
  height: '200px',
};
