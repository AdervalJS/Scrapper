import { Meta, Story } from '@storybook/react';
import { LogoIcon, LogoIconProps } from '.';

export default {
  title: 'atoms/LogoIcon',
  component: LogoIcon,
} as Meta;

const Actions = {
  onClick: () => alert(`click action`),
};

const Template: Story<LogoIconProps> = (args) => (
  <LogoIcon {...Actions} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: '60px',
  height: '60px',
};
