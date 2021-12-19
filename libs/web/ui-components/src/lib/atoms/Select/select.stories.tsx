import { Meta, Story } from '@storybook/react';
import { light, viewOrderSelect } from '@scrapper/shared/assets';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { OptionsForTest } from './select.data';
import { Select, SelectProps } from '.';

export default {
  title: 'atoms/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => (
  <ThemeProviderWrapper>
    <Select {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  children: <OptionsForTest options={viewOrderSelect} />,
  theme: light,
};
