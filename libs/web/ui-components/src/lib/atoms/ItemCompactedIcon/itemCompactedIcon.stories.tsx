import { Meta, Story } from '@storybook/react';
import { ItemCompactedIcon, ItemCompactedIconProps } from '.';

export default {
  title: 'atoms/ItemCompactedIcon',
  component: ItemCompactedIcon,
} as Meta;

const Actions = {
  onClick: () => alert(`click action`),
};

const Template: Story<ItemCompactedIconProps> = (args) => (
  <ItemCompactedIcon {...Actions} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: '100px',
  height: '90px',
};
