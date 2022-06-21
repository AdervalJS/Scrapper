import { Meta, Story } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { Page, PageProps } from '.';
import { manga } from '@scrapper/shared/util-test';

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
