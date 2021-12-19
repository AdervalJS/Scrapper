import { Meta, Story } from '@storybook/react';
import { viewOrderSelect } from '@scrapper/shared/assets';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { TitleAndSelect, TitleAndSelectProps } from '.';

export default {
  title: 'molecules/TitleAndSelect',
  component: TitleAndSelect,
} as Meta;

const Template: Story<TitleAndSelectProps> = (args) => (
  <ThemeProviderWrapper>
    <TitleAndSelect {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Title',
  options: viewOrderSelect,
};
