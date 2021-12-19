import { Meta, Story } from '@storybook/react';

import { FilterIcon, FilterIconProps } from '.';

export default {
  title: 'atoms/FilterIcon',
  component: FilterIcon,
} as Meta;

const Template: Story<FilterIconProps> = (args) => <FilterIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: '#000',
  size: 60,
};
