import { Meta, Story } from '@storybook/react';
import { Banner, BannerProps } from '.';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { manga } from '@scrapper/shared/util-test';

export default {
  title: 'molecules/Banner',
  component: Banner,
} as Meta;

const Template: Story<BannerProps> = (args) => (
  <ThemeProviderWrapper>
    <Banner {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  data: manga,
};
