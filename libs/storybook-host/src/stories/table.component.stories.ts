import { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from '@lara/table';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<TableComponent> = {
  title: 'Components/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule], // Necessário para ngModel
    }),
  ],
};

export default meta;

type Story = StoryObj<TableComponent>;

export const Default: Story = {
  args: {},
};
