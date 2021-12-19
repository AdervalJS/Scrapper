import { Meta, Story } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { DropSelectOption, DropSelectOptionProps } from '.';

export default {
  title: 'molecules/DropSelectOption',
  component: DropSelectOption,
} as Meta;

const Template: Story<DropSelectOptionProps> = (args) => (
  <ThemeProviderWrapper>
    <DropSelectOption {...args} />
  </ThemeProviderWrapper>
);

const option = {
  label: 'test',
  value: 1,
};

export const Primary = Template.bind({});
Primary.args = {
  selected: false,
  width: '300px',
  option,
};
