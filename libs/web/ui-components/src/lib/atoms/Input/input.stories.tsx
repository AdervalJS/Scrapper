import { Meta, Story } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';

import Input, { InputProps } from '.';

export default {
  title: 'atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
  <ThemeProviderWrapper>
    <Input {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Input',
};
