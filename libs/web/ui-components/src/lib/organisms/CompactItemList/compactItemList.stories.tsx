import { Meta, Story } from '@storybook/react';
import { mangas, ThemeProviderWrapper } from '@scrapper/web/util-test';

import { Actions as itemActions } from '../../molecules/ItemCompacted/itemCompacted.stories';
import { CompactItemList, CompactItemListProps } from '.';

export default {
  title: 'organisms/CompactItemList',
  component: CompactItemList,
} as Meta;

const Actions: Partial<CompactItemListProps> = {
  onPick: itemActions.onPick,
  itemCompacted: itemActions,
};

const Template: Story<CompactItemListProps> = (args) => (
  <ThemeProviderWrapper>
    <CompactItemList {...args} {...Actions} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'manga list',
  data: mangas,
};
