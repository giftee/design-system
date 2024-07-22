import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Component/Modal/Base',
};

export const Base: Story = {
  render: (_args) => {
    return `
<div>
  <button id="showButton" class="ab-Button">モーダルを開く</button>
  <dialog id="modal" class="ab-Modal" style="width: 800px">
    <form method="dialog">
      <div class="ab-Modal-header">
        <button class="ab-IconButton-text ab-IconButton-small ab-mr-2">
          X
        </button>
        <span class="ab-font-bold">モーダル Header</span>
      </div>
      <hr class="ab-Divider" />
      <div class="ab-Modal-body">
        モーダル Body
      </div>
      <hr class="ab-Divider" />
      <div class="ab-Modal-footer">
        <button class="ab-Button-negative">Cancel</button>
        <button class="ab-Button">OK</button>
      </div>
    </form>
  </dialog>
</div>

<script>
  const showButton = document.querySelector('#showButton');
  const modal = document.querySelector('#modal');

  showButton.addEventListener('click', () => {
    modal.showModal();
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });
</script>
  `;
  },
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
