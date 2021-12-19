import { Meta, Story } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';

import { ItemName, ItemNameProps } from '.';

export default {
  title: 'atoms/ItemName',
  component: ItemName,
} as Meta;

const Template: Story<ItemNameProps> = (args) => (
  <ThemeProviderWrapper>
    <ItemName {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'item name',
  style: {
    fontSize: '30px',
  },
};
