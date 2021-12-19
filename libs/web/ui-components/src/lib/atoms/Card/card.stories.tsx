import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from './index';

import { ThemeProviderWrapper } from '@scrapper/web/util-test';

export default {
  title: 'atoms/Card',
  component: Card,
} as Meta;

const Actions = {
  onClick: () => alert(`click action`),
};

const Template: Story<CardProps> = (args) => (
  <ThemeProviderWrapper>
    <Card {...args} {...Actions} />;
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  width: '300px',
  height: '200px',
};
