import { Meta, Story } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { ItemCompactedButton, ItemCompactedButtonProps } from '.';

export default {
  title: 'molecules/ItemCompactedButton',
  component: ItemCompactedButton,
} as Meta;

const Template: Story<ItemCompactedButtonProps> = (args) => (
  <ThemeProviderWrapper>
    <ItemCompactedButton {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
