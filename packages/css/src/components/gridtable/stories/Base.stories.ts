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
  <div class="ab-Gridtable" style="--ab-gridtable-columns-count: 5;">
    <div class="ab-Gridtable-head">
      <div class="ab-Gridtable-head-cell">商品情報</div>
      <div class="ab-Gridtable-head-cell">価格</div>
      <div class="ab-Gridtable-head-cell">ギフト利用審査</div>
      <div class="ab-Gridtable-head-cell">最低発注数有無</div>
      <div class="ab-Gridtable-head-cell">有効期限</div>
    </div>

    <div class="ab-Gridtable-body">
      <div class="ab-Gridtable-row-group">
        <div class="ab-Gridtable-row">
          <div class="ab-Gridtable-cell">
            <div class="ab-flex ab-flex-column">
              <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
              <span class="ab-text-body-s">giftee Box</span>
            </div>
          </div>
          <div class="ab-Gridtable-cell">¥500</div>
          <div class="ab-Gridtable-cell">1〜2営業日</div>
          <div class="ab-Gridtable-cell">あり</div>
          <div class="ab-Gridtable-cell">１ヶ月後の月末</div>
        </div>
      </div>

      <div class="ab-Gridtable-row-group">
        <div class="ab-Gridtable-row">
          <div class="ab-Gridtable-cell">
            <div class=" ab-flex ab-flex-items-center">
              <img src="${GifteeBox}" class="ab-mr-2" style="height: 56px;" />
              <div class="ab-flex ab-flex-column">
                <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
                <span class="ab-text-body-s">giftee Box</span>
              </div>
            </div>
          </div>
          <div class="ab-Gridtable-cell">¥500</div>
          <div class="ab-Gridtable-cell">1〜2営業日</div>
          <div class="ab-Gridtable-cell">あり</div>
          <div class="ab-Gridtable-cell">１ヶ月後の月末</div>
        </div>
      </div>

      <div class="ab-Gridtable-row-group">
        <div class="ab-Gridtable-row">
          <div class="ab-Gridtable-cell">
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
          <div class="ab-Gridtable-cell">¥500</div>
          <div class="ab-Gridtable-cell">1〜2営業日</div>
          <div class="ab-Gridtable-cell">あり</div>
          <div class="ab-Gridtable-cell">１ヶ月後の月末</div>
        </div>
      </div>
    </div>
  </div>


  <div class="ab-Gridtable" style="--ab-gridtable-columns-count: 4;">
    <div class="ab-Gridtable-head">
      <div class="ab-Gridtable-head-cell">商品情報</div>
      <div class="ab-Gridtable-head-cell">価格</div>
      <div class="ab-Gridtable-head-cell">数量</div>
      <div class="ab-Gridtable-head-cell">小計</div>
    </div>

    <div class="ab-Gridtable-body">
      <div class="ab-Gridtable-row-group">
        <div class="ab-Gridtable-row">
          <!-- 「style="--ab-gridtable-cell-rowspan: 2;"」のように指定すると、縦に2行分のサイズになる -->
          <div class="ab-Gridtable-cell" style="--ab-gridtable-cell-rowspan: 2;">
            <div class="ab-flex ab-flex-column">
              <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
              <span class="ab-text-body-s">giftee Box</span>
            </div>
          </div>
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border">¥100</div>
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border">10</div>
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border">¥1,000</div>
        </div>

        <div class="ab-Gridtable-row">
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border">¥200</div>
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border">30</div>
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border">¥6,000</div>
        </div>
      </div>

      <div class="ab-Gridtable-row-group">
        <div class="ab-Gridtable-row">
          <div class="ab-Gridtable-cell">
            <div class="ab-flex ab-flex-items-center">
              <img src="${GifteeBox}" class="ab-mx-2" style="height: 56px;" />
              <div class="ab-flex ab-flex-column">
                <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
                <span class="ab-text-body-s">giftee Box</span>
              </div>
            </div>
          </div>
          <div class="ab-Gridtable-cell">¥500</div>
          <div class="ab-Gridtable-cell">50</div>
          <div class="ab-Gridtable-cell">¥25,000</div>
        </div>
      </div>

      <!-- 「style="--ab-gridtable-column-start: 3;"」で3列目からの配置になる -->
      <!-- 「style="--ab-gridtable-column-end: 5;"」で5列目までの配置になる -->
      <div class="ab-Gridtable-row-group" style="--ab-gridtable-column-start: 3; --ab-gridtable-column-end: 5;">
        <div class="ab-Gridtable-row">
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border">商品代合計</div>
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border">¥32,000</div>
        </div>

        <div class="ab-Gridtable-row">
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border">消費税</div>
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border">¥3,200</div>
        </div>

        <div class="ab-Gridtable-row">
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border">お支払い合計</div>
          <div class="ab-Gridtable-cell ab-Gridtable-cell-border">¥35,200</div>
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
