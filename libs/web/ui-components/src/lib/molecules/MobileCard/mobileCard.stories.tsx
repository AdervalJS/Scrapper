import { Meta, Story } from '@storybook/react';
import { MobileCard, MobileCardProps } from '.';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';

export default {
  title: 'molecules/MobileCard',
  component: MobileCard,
} as Meta;

const Template: Story<MobileCardProps> = (args) => (
  <ThemeProviderWrapper>
    <MobileCard {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Scrapper',
  text: 'Em desenvolvimento',
};
