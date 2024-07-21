import { meta } from './shared';
import type { Story } from './shared';
import { angleLeft, angleRight } from '../../../../story_assets/inlines';

export default {
  ...meta,
  title: 'Component/Pagination/Base',
};

export const Base: Story = {
  render: (_args) => {
    return `
<nav class="ab-Pagination">
  <a href="#" class="ab-IconButton-outlined ab-Pagination-prevButton">
    ${angleLeft('ab-Icon')}
  </a>
  <a href="#" class="ab-IconButton-text ab-IconButton-small">1</a>
  <a href="#" class="ab-IconButton ab-IconButton-small">2</a>
  <a href="#" class="ab-IconButton-text ab-IconButton-small">3</a>
  <a href="#" class="ab-IconButton-text ab-IconButton-small">4</a>
  <a href="#" class="ab-IconButton-text ab-IconButton-small">5</a>
  <a href="#" class="ab-IconButton-text ab-IconButton-small">6</a>
  <a href="#" class="ab-IconButton-text ab-IconButton-small">...</a>
  <a href="#" class="ab-IconButton-text ab-IconButton-small">24</a>
  <a href="#" class="ab-IconButton-outlined ab-Pagination-nextButton">
    ${angleRight('ab-Icon')}
  </a>
</nav>
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
