import { Meta, Story } from '@storybook/react';
import { RecoilWrapper, ThemeProviderWrapper } from '@scrapper/web/util-test';
import { Filters, FiltersProps } from '.';
import { data } from './filters.util';

export default {
  title: 'organisms/Filters',
  component: Filters,
} as Meta;

const Template: Story<FiltersProps> = (args) => (
  <RecoilWrapper>
    <ThemeProviderWrapper>
      <Filters {...args} />
    </ThemeProviderWrapper>
  </RecoilWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  data,
};
