import { meta } from './shared';
import type { Story } from './shared';
import GifteeBox from '../../../../story_assets/giftee-box.svg';

export default {
  ...meta,
  title: 'Component/GridTable/Base',
};

export const Base: Story = {
  render: (_args) => {
    return `
<div>
  <!-- 「style="--ab-gridtable-columns-count: 5;"」のように、テーブルの列数を指定する必要がある -->
  <div class="ab-Gridtable" role="table" aria-label="商品一覧" style="--ab-gridtable-columns-count: 5;">
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


  <div class="ab-Gridtable" role="table" aria-label="ギフトのお申し込み内容" style="--ab-gridtable-columns-count: 4;">
    <div class="ab-Gridtable-head" role="rowgroup">
      <div class="ab-Gridtable-head-cell" role="columnheader">商品情報</div>
      <div class="ab-Gridtable-head-cell" role="columnheader">価格</div>
      <div class="ab-Gridtable-head-cell" role="columnheader">数量</div>
      <div class="ab-Gridtable-head-cell" role="columnheader">小計</div>
    </div>

    <div class="ab-Gridtable-body" role="rowgroup">
      <div class="ab-Gridtable-rowgroup" role="rowgroup">
        <div class="ab-Gridtable-row" role="row">
          <!-- 「style="--ab-gridtable-cell-rowspan: 2;"」のように指定すると、縦に2行分のサイズになる -->
          <div class="ab-Gridtable-cell" role="cell" style="--ab-gridtable-cell-rowspan: 2;">
            <div class="ab-flex ab-flex-column">
              <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
              <span class="ab-text-body-s">giftee Box</span>
            </div>
          </div>
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border" role="cell">¥100</div>
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border" role="cell">10</div>
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border" role="cell">¥1,000</div>
        </div>

        <div class="ab-Gridtable-row" role="row">
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border" role="cell">¥200</div>
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border" role="cell">30</div>
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border" role="cell">¥6,000</div>
        </div>
      </div>

      <div class="ab-Gridtable-rowgroup" role="rowgroup">
        <div class="ab-Gridtable-row" role="row">
          <div class="ab-Gridtable-cell" role="cell">
            <div class="ab-flex ab-flex-items-center">
              <img src="${GifteeBox}" class="ab-mx-2" style="height: 56px;" />
              <div class="ab-flex ab-flex-column">
                <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
                <span class="ab-text-body-s">giftee Box</span>
              </div>
            </div>
          </div>
          <div class="ab-Gridtable-cell" role="cell">¥500</div>
          <div class="ab-Gridtable-cell" role="cell">50</div>
          <div class="ab-Gridtable-cell" role="cell">¥25,000</div>
        </div>
      </div>

      <!-- 「style="--ab-gridtable-column-start: 3;"」で3列目からの配置になる -->
      <!-- 「style="--ab-gridtable-column-end: 5;"」で5列目までの配置になる -->
      <div class="ab-Gridtable-rowgroup" role="rowgroup" style="--ab-gridtable-column-start: 3; --ab-gridtable-column-end: 5;">
        <div class="ab-Gridtable-row" role="row">
          <div class="ab-Gridtable-cell" role="cell">商品代合計</div>
          <div class="ab-Gridtable-cell" role="cell">¥32,000</div>
        </div>

        <div class="ab-Gridtable-row" role="row">
          <div class="ab-Gridtable-cell" role="cell">消費税</div>
          <div class="ab-Gridtable-cell" role="cell">¥3,200</div>
        </div>

        <div class="ab-Gridtable-row ab-font-bold" role="row">
          <div class="ab-Gridtable-cell" role="cell">お支払い合計</div>
          <div class="ab-Gridtable-cell" role="cell">¥35,200</div>
        </div>

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
