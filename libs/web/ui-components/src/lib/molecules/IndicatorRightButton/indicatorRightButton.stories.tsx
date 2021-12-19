import { Story, Meta } from '@storybook/react';
import { IndicatorRightButton, IndicatorRightButtonProps } from '.';
import { ThemeProviderWrapper } from '@scrapper/web/util-test';

export default {
  title: 'molecules/IndicatorRightButton',
  component: IndicatorRightButton,
} as Meta;

const actions = {
  onClick: () => alert(`click`),
};

const Template: Story<IndicatorRightButtonProps> = (args) => (
  <ThemeProviderWrapper>
    <IndicatorRightButton {...args} {...actions} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
