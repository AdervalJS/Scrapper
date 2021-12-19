import { Meta, Story } from '@storybook/react';
import { light, viewOrderSelect } from '@scrapper/shared/assets';
import { mangas, ThemeProviderWrapper } from '@scrapper/web/util-test';

import { TitleAndSelect } from '../../molecules/TitleAndSelect';
import { ToggleList, ToggleListProps } from '.';

export default {
  title: 'organisms/ToggleList',
  component: ToggleList,
} as Meta;

const Actions: Partial<ToggleListProps> = {};

const Template: Story<ToggleListProps> = (args) => (
  <ThemeProviderWrapper>
    <ToggleList {...args} {...Actions} />
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
      label="Ordenar por"
      options={viewOrderSelect}
      theme={light}
    />
  ),
};
