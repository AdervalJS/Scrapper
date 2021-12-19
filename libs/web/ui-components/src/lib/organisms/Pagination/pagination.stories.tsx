import { Story, Meta } from '@storybook/react';
import { light } from '@scrapper/shared/assets';
import { Pagination, PaginationProps } from './index';

import { RecoilWrapper, ThemeProviderWrapper } from '@scrapper/web/util-test';
import { pageSelectedState } from './pagination.test.state';

export default {
  component: Pagination,
  title: 'organisms/Pagination',
} as Meta;

const Template: Story<PaginationProps> = (args) => (
  <RecoilWrapper>
    <ThemeProviderWrapper>
      <Pagination {...args} />
    </ThemeProviderWrapper>
  </RecoilWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  theme: light,
  totalPage: 100,
  totalVisiblePage: 8,
  state: pageSelectedState,
};
