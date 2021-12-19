import { Meta, Story } from '@storybook/react';
import { light } from '@scrapper/shared/assets';
import { mangasBase, ThemeProviderWrapper } from '@scrapper/web/util-test';

import { SimpleItemList, SimpleItemListProps } from '.';

export default {
  title: 'organisms/SimpleItemList',
  component: SimpleItemList,
} as Meta;

const Actions: Partial<SimpleItemListProps> = {
  onPick: ({ name, id }) => alert(`pick ${name} id:${id}`),
};

const Template: Story<SimpleItemListProps> = (args) => (
  <ThemeProviderWrapper>
    <SimpleItemList {...args} {...Actions} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  data: mangasBase,
  theme: light,
  title: 'Item simple List',
};
