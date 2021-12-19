import { Meta, Story } from '@storybook/react';
import { ItemSimpleIcon, ItemSimpleIconProps } from '.';

export default {
  title: 'atoms/ItemSimpleIcon',
  component: ItemSimpleIcon,
} as Meta;

const Actions = {
  onClick: () => alert(`click action`),
};

const Template: Story<ItemSimpleIconProps> = (args) => (
  <ItemSimpleIcon {...Actions} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: '80px',
  height: '100px',
};
