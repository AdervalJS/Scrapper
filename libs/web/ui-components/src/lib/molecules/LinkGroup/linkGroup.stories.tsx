import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { data } from './linkGroup.utils';
import { LinkGroup, LinkGroupProps } from '.';

export default {
  title: 'molecules/LinkGroup',
  component: LinkGroup,
} as Meta;

const Template: Story<LinkGroupProps> = (args) => (
  <BrowserRouter>
    <ThemeProviderWrapper>
      <LinkGroup {...args} data={data} />
    </ThemeProviderWrapper>
  </BrowserRouter>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  data: { links: data.links },
};
