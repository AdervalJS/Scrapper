import { Meta, Story } from '@storybook/react';
import { light, viewOrderSelect } from '@scrapper/shared/assets';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { mangas } from '@scrapper/shared/util-test';

import { TitleAndSelect } from '../../molecules/TitleAndSelect';
import { titleAndSelectState } from '../../molecules/TitleAndSelect/titleAndSelect.test.state';
import { listTypeSelected } from './toggleList.test.state';
import { ToggleList, ToggleListProps } from '.';

export default {
  title: 'organisms/ToggleList',
  component: ToggleList,
} as Meta;

const Actions: Partial<ToggleListProps> = {};

const Template: Story<ToggleListProps> = (args) => (
  <ThemeProviderWrapper>
    <ToggleList {...args} {...Actions} state={listTypeSelected} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  data: mangas,
};

export const Secondary = Template.bind({});
Secondary.args = {
  data: mangas,
  header: (
    <TitleAndSelect
      state={titleAndSelectState}
      label="Ordenar por"
      options={viewOrderSelect}
      theme={light}
    />
  ),
};
