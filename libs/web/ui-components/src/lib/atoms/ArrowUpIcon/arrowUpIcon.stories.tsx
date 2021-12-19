import { Meta, Story } from '@storybook/react';

import { ArrowUpIcon, ArrowUpIconProps } from '.';

export default {
  title: 'atoms/ArrowUpIcon',
  component: ArrowUpIcon,
} as Meta;

const Template: Story<ArrowUpIconProps> = (args) => <ArrowUpIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 60,
  color: '#000',
};
