import { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from '@lara/modal';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<ModalComponent> = {
  title: 'Components/Modal',
  component: ModalComponent,
  decorators: [
    moduleMetadata({
      imports: [ModalComponent],
    }),
  ],
  args: {
    title: 'Exemplo de Modal',
    body: 'Este é o conteúdo do modal exibido no Storybook.'
  }
};

export default meta;
type Story = StoryObj<ModalComponent>;

export const Default: Story = {};

export const LongContent: Story = {
  args: {
    title: 'Modal com muito conteúdo',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `.repeat(10)
  }
};
