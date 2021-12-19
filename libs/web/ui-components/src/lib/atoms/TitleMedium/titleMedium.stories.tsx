import { Story, Meta } from '@storybook/react';
import { light } from '@scrapper/shared/assets';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';

import { TitleMedium, TitleMediumProps } from './index';

export default {
  title: 'atoms/TitleMedium',
  component: TitleMedium,
} as Meta;

const Template: Story<TitleMediumProps> = (args) => (
  <ThemeProviderWrapper>
    <TitleMedium {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'title medium',
  theme: light,
};
