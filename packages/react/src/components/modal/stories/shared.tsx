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
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { MouseEvent } from 'react';
import 'dialog-polyfill/dist/dialog-polyfill.css';

export function useDialogpolyfill(ref: React.RefObject<HTMLDialogElement | null>) {
  useEffect(() => {
    if (ref.current) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);
}

export { Modal, Button, Divider, IconButton, Typography, Textfield, useRef, useState };
export type { MouseEvent };

export const meta = {
  component: Modal.Root,
  args: {},
  argTypes: {
    onCancel: {
      control: { disable: true },
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: '(event: React.BaseSyntheticEvent) => void',
        },
      },
      description: 'onCancel',
    },
    onClose: {
      control: { disable: true },
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: '(event: React.BaseSyntheticEvent) => void',
        },
      },
      description: 'onClose',
    },
  },
} satisfies Meta<Modal.RootProps>;

export type Story = StoryObj<typeof meta>;
