import { Story, Meta } from '@storybook/react';
import { Read, ReadProps } from './index';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';

export default {
  title: 'molecules/Read',
  component: Read,
} as Meta;

const Template: Story<ReadProps> = (args) => (
  <ThemeProviderWrapper>
    <Read {...args} />
  </ThemeProviderWrapper>
);
export const Primary = Template.bind({});
Primary.args = {
  data: {
    itemId: 1,
  },
};
