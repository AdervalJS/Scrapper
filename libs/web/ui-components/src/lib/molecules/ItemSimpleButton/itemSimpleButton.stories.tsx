import { Meta, Story } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { ItemSimpleButton, ItemSimpleButtonProps } from '.';

export default {
  title: 'molecules/ItemSimpleButton',
  component: ItemSimpleButton,
} as Meta;

const Template: Story<ItemSimpleButtonProps> = (args) => (
  <ThemeProviderWrapper>
    <ItemSimpleButton {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
