import { Meta, Story } from '@storybook/react';
import { genresFilter } from '@scrapper/shared/assets';
import { RecoilWrapper, ThemeProviderWrapper } from '@scrapper/web/util-test';
import { DropSelect, DropSelectProps } from '.';
import { dropSelectState } from './dropSelect.test.state';

export default {
  title: 'organisms/DropSelect',
  component: DropSelect,
} as Meta;

const Template: Story<DropSelectProps> = (args) => (
  <RecoilWrapper>
    <ThemeProviderWrapper>
      <DropSelect {...args} />
    </ThemeProviderWrapper>
  </RecoilWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  ...genresFilter,
  state: dropSelectState,
};
