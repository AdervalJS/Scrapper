import { Meta, Story } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { mangas } from '@scrapper/shared/util-test';

import { BannerList, BannerListProps } from '.';

export default {
  title: 'organisms/BannerList',
  component: BannerList,
} as Meta;

const Template: Story<BannerListProps> = (args) => (
  <ThemeProviderWrapper>
    <BannerList {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  data: mangas,
};
