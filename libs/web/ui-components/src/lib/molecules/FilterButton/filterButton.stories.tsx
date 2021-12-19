import { Story, Meta } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { FilterButton, FilterButtonProps } from '.';

export default {
  title: 'molecules/FilterButton',
  component: FilterButton,
} as Meta;

const actions = {
  onClick: () => alert(`click`),
};

const Template: Story<FilterButtonProps> = (args) => (
  <ThemeProviderWrapper>
    <FilterButton {...args} {...actions} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
