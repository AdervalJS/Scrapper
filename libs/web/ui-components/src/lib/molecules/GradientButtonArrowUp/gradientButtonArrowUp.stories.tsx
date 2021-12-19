import { Story, Meta } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { GradientButtonArrowUp, GradientButtonArrowUpProps } from '.';

export default {
  component: GradientButtonArrowUp,
  title: 'molecules/GradientButtonArrowUp',
} as Meta;

const Template: Story<GradientButtonArrowUpProps> = (args) => (
  <ThemeProviderWrapper>
    <GradientButtonArrowUp {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
