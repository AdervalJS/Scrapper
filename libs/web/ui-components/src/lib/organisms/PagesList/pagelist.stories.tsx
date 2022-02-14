import { Meta, Story } from '@storybook/react';
import {
  ThemeProviderWrapper,
  RecoilWrapper,
  pages,
} from '@scrapper/web/util-test';
import { PagesListFocus } from './pagesList.test.state';

import { PagesList, PagesListProps } from '.';

export default {
  title: 'organisms/PagesList',
  component: PagesList,
} as Meta;

const Template: Story<PagesListProps> = (args) => (
  <ThemeProviderWrapper>
    <RecoilWrapper>
      <PagesList {...args} state={PagesListFocus}></PagesList>
    </RecoilWrapper>
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  data: pages,
};
