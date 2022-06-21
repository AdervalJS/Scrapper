import { Story, Meta } from '@storybook/react';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';
import { CloseButton, CloseButtonProps } from '.';

export default {
  component: CloseButton,
  title: 'molecules/CloseButton',
} as Meta;

export const Actions: Partial<CloseButtonProps> = {
  onClick: () => alert('click'),
};

const Template: Story<CloseButtonProps> = (args) => (
  <ThemeProviderWrapper>
    <CloseButton {...Actions} {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
