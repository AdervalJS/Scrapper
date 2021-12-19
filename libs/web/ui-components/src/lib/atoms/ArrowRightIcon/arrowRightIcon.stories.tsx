import { Meta, Story } from '@storybook/react';

import { ArrowRightIcon, ArrowRightIconProps } from '.';

export default {
  title: 'atoms/ArrowRightIcon',
  component: ArrowRightIcon,
} as Meta;

const Template: Story<ArrowRightIconProps> = (args) => (
  <ArrowRightIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: 60,
  color: '#000',
};
