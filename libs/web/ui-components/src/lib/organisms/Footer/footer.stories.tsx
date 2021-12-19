import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { data } from './footer.utils';
import { Footer, FooterProps } from '.';

export default {
  title: 'organisms/Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => (
  <BrowserRouter>
    <ThemeProviderWrapper>
      <Footer {...args} data={data} />
    </ThemeProviderWrapper>
  </BrowserRouter>
);

export const Primary = Template.bind({});
