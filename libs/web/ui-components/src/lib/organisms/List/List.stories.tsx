import { Meta, Story } from '@storybook/react';
import { light } from '@scrapper/shared/assets';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { mangas } from '@scrapper/shared/util-test';

import { ItemCompacted } from '../../molecules/ItemCompacted';

import { List, ListProps } from '.';

export default {
  title: 'organisms/List',
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => (
  <ThemeProviderWrapper>
    <List {...args}>
      {mangas.map((item) => (
        <ItemCompacted key={item.id} data={item} theme={light} />
      ))}
    </List>
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  autoScrollTime: 3000,
  title: 'mangas',
  theme: light,
};
