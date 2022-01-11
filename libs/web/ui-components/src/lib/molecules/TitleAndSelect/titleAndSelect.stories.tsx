import { Meta, Story } from '@storybook/react';
import { viewOrderSelect } from '@scrapper/shared/assets';
import { ThemeProviderWrapper, RecoilWrapper } from '@scrapper/web/util-test';

import { titleAndSelectState } from './titleAndSelect.test.state';
import { TitleAndSelect, TitleAndSelectProps } from '.';

export default {
  title: 'molecules/TitleAndSelect',
  component: TitleAndSelect,
} as Meta;

const Template: Story<TitleAndSelectProps> = (args) => (
  <ThemeProviderWrapper>
    <RecoilWrapper>
      <TitleAndSelect {...args} state={titleAndSelectState} />
    </RecoilWrapper>
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Title',
  options: viewOrderSelect,
};
