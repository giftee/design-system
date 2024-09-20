import { meta } from './shared';
import type { Story } from './shared';
import GifteeBox from '../../../../story_assets/giftee-box.svg';

export default {
  ...meta,
  title: 'Component/GridTable/Select',
};

export const Select: Story = {
  render: (_args) => {
    return `
<!-- 「class="ab-Gridtable-select"」を追加している -->
<div class="ab-Gridtable ab-Gridtable-select" role="table" aria-label="商品一覧" style="--ab-gridtable-columns-count: 5;">
  <div class="ab-Gridtable-head" role="rowgroup">
    <div class="ab-Gridtable-head-cell" role="columnheader">商品情報</div>
    <div class="ab-Gridtable-head-cell" role="columnheader">価格</div>
    <div class="ab-Gridtable-head-cell" role="columnheader">ギフト利用審査</div>
    <div class="ab-Gridtable-head-cell" role="columnheader">最低発注数有無</div>
    <div class="ab-Gridtable-head-cell" role="columnheader">有効期限</div>
  </div>

  <div class="ab-Gridtable-body" role="rowgroup">
    <div class="ab-Gridtable-rowgroup" role="rowgroup">
      <div class="ab-Gridtable-row" role="row">
        <div class="ab-Gridtable-cell" role="cell">
          <div class="ab-flex ab-flex-column">
            <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
            <span class="ab-text-body-s">giftee Box</span>
          </div>
        </div>
        <div class="ab-Gridtable-cell" role="cell">¥500</div>
        <div class="ab-Gridtable-cell" role="cell">1〜2営業日</div>
        <div class="ab-Gridtable-cell" role="cell">あり</div>
        <div class="ab-Gridtable-cell" role="cell">１ヶ月後の月末</div>
      </div>
    </div>

    <div class="ab-Gridtable-rowgroup" role="rowgroup">
      <div class="ab-Gridtable-row" role="row">
        <div class="ab-Gridtable-cell" role="cell">
          <div class=" ab-flex ab-flex-items-center">
            <img src="${GifteeBox}" class="ab-mr-2" style="height: 56px;" />
            <div class="ab-flex ab-flex-column">
              <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
              <span class="ab-text-body-s">giftee Box</span>
            </div>
          </div>
        </div>
        <div class="ab-Gridtable-cell" role="cell">¥500</div>
        <div class="ab-Gridtable-cell" role="cell">1〜2営業日</div>
        <div class="ab-Gridtable-cell" role="cell">あり</div>
        <div class="ab-Gridtable-cell" role="cell">１ヶ月後の月末</div>
      </div>
    </div>

    <div class="ab-Gridtable-rowgroup" role="rowgroup">
      <div class="ab-Gridtable-row" role="row">
        <div class="ab-Gridtable-cell" role="cell">
          <div class="ab-flex ab-flex-items-center">
            <div class="ab-Checkbox-wrapper ab-mr-2">
              <div class="ab-Checkbox">
                <input type="checkbox" class="ab-Checkbox-input" />
                <span class="ab-Checkbox-box"></span>
              </div>
            </div>
            <img src="${GifteeBox}" class="ab-mx-2" style="height: 56px;" />
            <div class="ab-flex ab-flex-column">
              <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
              <span class="ab-text-body-s">giftee Box</span>
            </div>
          </div>
        </div>
        <div class="ab-Gridtable-cell" role="cell">¥500</div>
        <div class="ab-Gridtable-cell" role="cell">1〜2営業日</div>
        <div class="ab-Gridtable-cell" role="cell">あり</div>
        <div class="ab-Gridtable-cell" role="cell">１ヶ月後の月末</div>
      </div>
    </div>
  </div>
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
