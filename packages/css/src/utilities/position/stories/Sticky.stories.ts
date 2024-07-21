import { meta } from './shared';
import type { Story } from './shared';

export default {
  ...meta,
  title: 'Utility/Position/Sticky',
};

export const Sticky: Story = {
  render: (_args) => {
    return `
<div style="max-width: 300px; height: 300px;">
  <section class="ab-mb-3">
    <header
      class="ab-border ab-position-sticky ab-top-0 ab-bg-secondary p-3"
      style="z-index: 1;"
    >
      Sticky 1
    </header>
    <main class="ab-border ab-border-top-0 p-3">
      <p>
        Sticky は親要素が見えない場合は relative 要素として、見えていてかつ一定の閾値を超える場合は fixed 要素として振る舞います。今回は親要素の section が見えていてかつ top-0 にくると fixed になります。
      </p>
    </main>
  </section>
  <section class="ab-mb-3">
    <header
      class="ab-border ab-position-sticky ab-top-0 ab-bg-secondary p-3"
      style="z-index: 1;"
    >
      Sticky 2
    </header>
    <main class="ab-border ab-border-top-0 p-3">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </main>
  </section>
  <section class="ab-mb-3">
    <header
      class="ab-border ab-position-sticky ab-top-0 ab-bg-secondary p-3"
      style="z-index: 1;"
    >
      Sticky 3
    </header>
    <main class="ab-border ab-border-top-0 p-3">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </main>
  </section>
</div>
`;
  },
  args: {},
  parameters: {
    pseudo: {
      hover: '#hover',
      active: '#active',
      focus: '#focus',
    },
  },
};
