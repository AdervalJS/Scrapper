import { Story, Meta } from '@storybook/react';
import { IndicatorLeftButton, IndicatorLeftButtonProps } from '.';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';

export default {
  title: 'molecules/IndicatorLeftButton',
  component: IndicatorLeftButton,
} as Meta;

const actions = {
  onClick: () => alert(`click`),
};

const Template: Story<IndicatorLeftButtonProps> = (args) => (
  <ThemeProviderWrapper>
    <IndicatorLeftButton {...args} {...actions} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
