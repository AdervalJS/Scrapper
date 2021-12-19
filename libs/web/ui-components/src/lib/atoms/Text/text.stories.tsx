import { Meta, Story } from '@storybook/react';
import { light } from '@scrapper/shared/assets';
import { Text, TextProps } from '.';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';

export default {
  title: 'atoms/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <ThemeProviderWrapper>
    <Text {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: light,
  style: {
    fontSize: '30px',
  },
};
