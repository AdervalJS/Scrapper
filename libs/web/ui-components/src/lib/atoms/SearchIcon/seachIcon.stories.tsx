import { Meta, Story } from '@storybook/react';

import { SearchIcon, SearchIconProps } from '.';

export default {
  title: 'atoms/SearchIcon',
  component: SearchIcon,
} as Meta;

const Template: Story<SearchIconProps> = (args) => <SearchIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 60,
  color: '#000',
};
