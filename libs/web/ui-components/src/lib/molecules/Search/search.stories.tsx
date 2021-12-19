import { Story, Meta } from '@storybook/react';
import { Search, SearchProps } from './index';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';

export default {
  component: Search,
  title: 'molecules/Search',
} as Meta;

const Template: Story<SearchProps> = (args) => (
  <ThemeProviderWrapper>
    <Search {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
