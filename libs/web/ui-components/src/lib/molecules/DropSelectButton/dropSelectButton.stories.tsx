import { Meta, Story } from '@storybook/react';
import { light } from '@scrapper/shared/assets';
import { DropSelectButton, DropSelectButtonProps } from '.';

export default {
  title: 'molecules/DropSelectButton',
  component: DropSelectButton,
} as Meta;

const Template: Story<DropSelectButtonProps> = (args) => (
  <DropSelectButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  theme: light,
  title: 'Button'
};
