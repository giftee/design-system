import { meta } from './shared';
import type { Story } from './shared';
import GifteeBox from '../../../../story_assets/giftee-box.svg';

export default {
  ...meta,
  title: 'Component/Table/Base',
};

export const Base: Story = {
  render: (_args) => {
    return `
<div>
  <table class="ab-Table ab-mb-12">
    <thead class="ab-Table-head">
      <tr>
        <th class="ab-Table-head-cell" aria-sort="descending" tabindex="0">
          商品情報
        </th>
        <th class="ab-Table-head-cell" aria-sort="descending">
          価格
        </th>
        <th class="ab-Table-head-cell">
          ギフト利用審査
        </th>
        <th class="ab-Table-head-cell">
          最低発注数有無
        </th>
        <th class="ab-Table-head-cell">
          有効期限
        </th>
      </tr>
    </thead>
    <tbody class="ab-Table-body">
      <tr class="ab-Table-body-row">
        <td class="ab-Table-cell">
          <div class="ab-flex ab-flex-column">
            <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
            <span class="ab-text-body-s">giftee Box</span>
          </div>
        </td>
        <td class="ab-Table-cell">¥500</td>
        <td class="ab-Table-cell">1〜2営業日</td>
        <td class="ab-Table-cell">あり</td>
        <td class="ab-Table-cell">１ヶ月後の月末</td>
      </tr>
      <tr class="ab-Table-body-row">
        <td class="ab-Table-cell">
          <div class=" ab-flex ab-flex-items-center">
            <img src="${GifteeBox}" class="ab-mr-2" style="height: 56px;" />
            <div class="ab-flex ab-flex-column">
              <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
              <span class="ab-text-body-s">giftee Box</span>
            </div>
          </div>
        </td>
        <td class="ab-Table-cell">¥500</td>
        <td class="ab-Table-cell">1〜2営業日</td>
        <td class="ab-Table-cell">あり</td>
        <td class="ab-Table-cell">１ヶ月後の月末</td>
      </tr>
      <tr class="ab-Table-body-row">
        <td class="ab-Table-cell">
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
        </td>
        <td class="ab-Table-cell">¥500</td>
        <td class="ab-Table-cell">1〜2営業日</td>
        <td class="ab-Table-cell">あり</td>
        <td class="ab-Table-cell">１ヶ月後の月末</td>
      </tr>
    </tbody>
  </table>
  <table class="ab-Table">
    <thead class="ab-Table-head">
      <tr>
        <th class="ab-Table-head-cell" aria-sort="descending" tabindex="0">
          商品情報
        </th>
        <th class="ab-Table-head-cell" aria-sort="descending">
          価格
        </th>
        <th class="ab-Table-head-cell">
          数量
        </th>
        <th class="ab-Table-head-cell">
          小計
        </th>
      </tr>
    </thead>
    <tbody class="ab-Table-body">
      <tr class="ab-Table-body-row">
        <td class="ab-Table-cell" rowspan="2">
          <div class="ab-flex ab-flex-column">
            <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
            <span class="ab-text-body-s">giftee Box</span>
          </div>
        </td>
        <td class="ab-Table-cell">¥100</td>
        <td class="ab-Table-cell">10</td>
        <td class="ab-Table-cell">¥1,000</td>
      </tr>
      <tr class="ab-Table-body-row">
        <td class="ab-Table-cell">¥200</td>
        <td class="ab-Table-cell">30</td>
        <td class="ab-Table-cell">¥6,000</td>
      </tr>
      <tr class="ab-Table-body-row">
        <td class="ab-Table-cell">
          <div class="ab-flex ab-flex-items-center">
            <img src="${GifteeBox}" class="ab-mx-2" style="height: 56px;" />
            <div class="ab-flex ab-flex-column">
              <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
              <span class="ab-text-body-s">giftee Box</span>
            </div>
          </div>
        </td>
        <td class="ab-Table-cell">¥500</td>
        <td class="ab-Table-cell">50</td>
        <td class="ab-Table-cell">¥25,000</td>
      </tr>
      <tr class="ab-Table-body-row">
        <td class="ab-Table-cell ab-border-0" colspan="2" rowspan="3">
        </td>
        <td class="ab-Table-cell">商品代合計</td>
        <td class="ab-Table-cell">¥32,000</td>
      </tr>
      <tr class="ab-Table-body-row">
        <td class="ab-Table-cell">消費税</td>
        <td class="ab-Table-cell">¥3,200</td>
      </tr>
      <tr class="ab-Table-body-row ab-border-0">
        <td class="ab-Table-cell">お支払い合計</td>
        <td class="ab-Table-cell">¥35,200</td>
      </tr>
    </tbody>
  </table>
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
