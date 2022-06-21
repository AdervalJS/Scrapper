import { Meta, Story } from '@storybook/react';
import { RecoilWrapper, ThemeProviderWrapper } from '@scrapper/web/util-test';
import { chapters } from '@scrapper/shared/util-test';
import { Chapters, ChaptersProps } from '.';
import { SelectedIdState } from './chapters.test.state';

export default {
  title: 'organisms/Chapters',
  component: Chapters,
} as Meta;

const Template: Story<ChaptersProps> = (args) => (
  <RecoilWrapper>
    <ThemeProviderWrapper>
      <Chapters {...args} />
    </ThemeProviderWrapper>
  </RecoilWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  data: chapters,
  state: SelectedIdState,
};
