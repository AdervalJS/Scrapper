import { light } from '@scrapper/shared/assets';
import { Meta, Story } from '@storybook/react';
import { ItemSimple, ItemSimpleProps } from '.';
import { baseManga, ThemeProviderWrapper } from '@scrapper/web/util-test';

export default {
  title: 'molecules/itemSimple',
  component: ItemSimple,
} as Meta;

const Actions: Partial<ItemSimpleProps> = {
  onPick: ({ name, id }) => alert(`pick ${name} id:${id}`),
};

const Template: Story<ItemSimpleProps> = (args) => (
  <ThemeProviderWrapper>
    <ItemSimple {...Actions} {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  data: baseManga,
  theme: light,
  width: '100px',
  height: '170px',
};
