import { Meta, Story } from '@storybook/react';

import { ViewIcon, ViewIconProps } from '.';

export default {
  title: 'atoms/ViewIcon',
  component: ViewIcon,
} as Meta;

const Template: Story<ViewIconProps> = (args) => <ViewIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 60,
  color: '#646464',
};
