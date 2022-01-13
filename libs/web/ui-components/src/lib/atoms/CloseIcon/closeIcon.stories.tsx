import { Meta, Story } from '@storybook/react';

import { CloseIcon, CloseIconProps } from '.';

export default {
  title: 'atoms/CloseIcon',
  component: CloseIcon,
} as Meta;

const Template: Story<CloseIconProps> = (args) => <CloseIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 60,
  color: '#000',
};
