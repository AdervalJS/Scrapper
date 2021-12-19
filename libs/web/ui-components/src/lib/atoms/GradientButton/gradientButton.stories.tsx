import { Meta, Story } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';

import { GradientButton, GradientButtonProps } from '.';

export default {
  title: 'atoms/GradientButton',
  component: GradientButton,
} as Meta;

const Template: Story<GradientButtonProps> = (args) => (
  <ThemeProviderWrapper>
    <GradientButton {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  width: '100px',
  height: '100px',
};
