import { Meta, Story } from '@storybook/react';
import { BaseProfile, BaseProfileProps } from '.';
import { manga, ThemeProviderWrapper } from '@scrapper/web/util-test';

export default {
  title: 'molecules/BaseProfile',
  component: BaseProfile,
} as Meta;

const Template: Story<BaseProfileProps> = (args) => (
  <ThemeProviderWrapper>
    <BaseProfile {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  data: manga,
  viewType:'banner'
};
