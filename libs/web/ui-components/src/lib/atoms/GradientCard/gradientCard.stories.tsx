import { Meta, Story } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';

import { GradientCard, GradientCardProps } from '.';

export default {
  title: 'atoms/GradientCard',
  component: GradientCard,
} as Meta;

const Template: Story<GradientCardProps> = (args) => (
  <ThemeProviderWrapper>
    <GradientCard {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  width: '300px',
  height: '100px',
};
