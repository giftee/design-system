import {
  meta,
  Modal,
  Button,
  Divider,
  IconButton,
  Typography,
  Textfield,
  useState,
  type MouseEvent,
  type Story,
} from './shared';

export default {
  ...meta,
  title: 'Modal/Form',
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
            <IconButton variant="neutral" size="small" className="ab-mr-2">
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
            <Textfield value={name} onChange={(e) => setName(e.target.value)} />
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
