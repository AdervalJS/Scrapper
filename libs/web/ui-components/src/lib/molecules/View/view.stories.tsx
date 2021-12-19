import { Story, Meta } from '@storybook/react';
import { View, ViewProps } from '.';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';

export default {
  component: View,
  title: 'molecules/View',
} as Meta<ViewProps>;

const Template: Story<ViewProps> = (args) => (
  <ThemeProviderWrapper>
    <View {...args} />
  </ThemeProviderWrapper>
);
export const Primary = Template.bind({});
Primary.args = {
  view: 200,
};
