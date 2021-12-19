import { Story, Meta } from '@storybook/react';
import { light } from '@scrapper/shared/assets';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';

import { TitleShadow, TitleShadowProps } from '.';

export default {
  title: 'atoms/TitleShadow',
  component: TitleShadow,
} as Meta;

const Template: Story<TitleShadowProps> = (args) => (
  <ThemeProviderWrapper>
    <TitleShadow {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'title shadow',
  theme: light,
};
