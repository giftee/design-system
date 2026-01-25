import {
  meta,
  Modal,
  Button,
  Divider,
  IconButton,
  Typography,
  useRef,
  useState,
  useDialogpolyfill,
  type Story,
} from './shared';

export default {
  ...meta,
  title: 'Modal/Base',
};

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
