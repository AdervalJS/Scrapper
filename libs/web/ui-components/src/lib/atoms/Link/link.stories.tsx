import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { Link, LinkProps } from '.';

export default {
  title: 'atoms/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <BrowserRouter>
    <ThemeProviderWrapper>
      <Link {...args} />
    </ThemeProviderWrapper>
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  to: '/',
  children: 'link',
};
