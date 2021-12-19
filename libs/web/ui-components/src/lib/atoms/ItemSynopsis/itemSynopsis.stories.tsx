import { Meta, Story } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { ItemSynopsis, ItemSynopsisProps } from '.';

export default {
  title: 'atoms/ItemSynopsis',
  component: ItemSynopsis,
} as Meta;

const Template: Story<ItemSynopsisProps> = (args) => (
  <ThemeProviderWrapper>
    <ItemSynopsis {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'ItemSynopsis',
  style: {
    fontSize: '30px',
  },
};
