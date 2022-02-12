import { Meta, Story } from '@storybook/react';
import { manga, ThemeProviderWrapper } from '@scrapper/web/util-test';
import { Page, PageProps } from '.';

export default {
  title: 'atoms/Page',
  component: Page,
} as Meta;

const Actions = {
  onClick: () => alert(`click action`),
};

const Template: Story<PageProps> = (args) => (
  <ThemeProviderWrapper>
    <Page {...Actions} {...args} alt={manga.name} src={manga.image} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  isCompacted: true,
};
