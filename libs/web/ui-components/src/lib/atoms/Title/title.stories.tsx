import { Meta, Story } from '@storybook/react';
import { light } from '@scrapper/shared/assets';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { Title, TitleProps } from '.';

export default {
  title: 'atoms/Title',
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => (
  <ThemeProviderWrapper>
    <Title {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Title',
  theme: light,
};
