import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { links } from './header.utils';
import { Header, HeaderProps } from '.';

export default {
  title: 'organisms/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => (
  <BrowserRouter>
    <ThemeProviderWrapper>
      <Header {...args} links={links} />
    </ThemeProviderWrapper>
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  searchValue: ''
}
