import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './index';

import { ThemeProviderWrapper } from '@scrapper/web/util-test';

export default {
  title: 'atoms/Button',
  component: Button,
} as Meta;

const Actions = {
  onClick: () => alert(`click action`),
};

const Template: Story<ButtonProps> = (args) => (
  <ThemeProviderWrapper>
    <Button {...args} {...Actions} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  width: '100px',
  height: '100px',
};
