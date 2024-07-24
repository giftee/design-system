import dialogPolyfill from 'dialog-polyfill';
import { useRef, useState, useEffect } from 'react';
import {
  Modal,
  Button,
  Divider,
  IconButton,
  Typography,
  Textfield,
} from '@/index';
import type { Meta, StoryObj } from '@storybook/react';
import type { MouseEvent } from 'react';
import 'dialog-polyfill/dist/dialog-polyfill.css';

function useDialogpolyfill(ref: React.RefObject<HTMLDialogElement>) {
  useEffect(() => {
    if (ref.current) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);
}

const meta = {
  title: 'Modal',
  tags: ['autodocs'],
  component: Modal.Root,
  args: {},
  argTypes: {},
} satisfies Meta<Modal.RootProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleCancel = () => setOpen(false);
    const ref = useRef<HTMLDialogElement>(null);
    useDialogpolyfill(ref);

    return (
      <>
        <Button onClick={handleOpen}>Open Modal{open}</Button>
        <Modal.Root
          ref={ref}
          onClose={handleClose}
          onCancel={handleCancel}
          open={open}
        >
          <Modal.Header>
            <IconButton variant="negative" size="small" className="ab-mr-2">
              X
            </IconButton>
            <Typography
              variant="body-m"
              fontWeight="bold"
              className="ab-inline"
            >
              モーダル Header
            </Typography>
          </Modal.Header>
          <Divider />
          <Modal.Body>モーダル Body</Modal.Body>
          <Divider />
          <Modal.Footer>
            <Button variant="neutral">Cancel</Button>
            <Button>OK</Button>
          </Modal.Footer>
        </Modal.Root>
      </>
    );
  },
};

export const Form: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleCancel = () => setOpen(false);

    const [name, setName] = useState('');
    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
      console.log({ e }, { name });
    };

    return (
      <>
        <Button onClick={handleOpen}>Open Modal{open}</Button>
        <Modal.Root onClose={handleClose} onCancel={handleCancel} open={open}>
          <Modal.Header>
            <IconButton variant="negative" size="small" className="ab-mr-2">
              X
            </IconButton>
            <Typography
              variant="body-m"
              fontWeight="bold"
              className="ab-inline"
            >
              モーダル Header
            </Typography>
          </Modal.Header>
          <Divider />
          <Modal.Body>
            <Textfield
              autoFocus={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Modal.Body>
          <Divider />
          <Modal.Footer>
            <Button variant="neutral">Cancel</Button>
            <Button type="submit" onClick={handleSubmit}>
              OK
            </Button>
          </Modal.Footer>
        </Modal.Root>
      </>
    );
  },
};
