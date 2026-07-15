import { meta } from './shared';
import type { Story } from './shared';
import GifteeBox from '../../../../story_assets/giftee-box.svg';

export default {
  ...meta,
  title: 'Component/Table/OverflowVisible',
};

export const Bordered: Story = {
  render: (_args) => {
    return `
<table class="ab-Table ab-Table-overflow-visible">
  <thead class="ab-Table-head">
    <tr>
      <th
        class="ab-Table-head-cell"
        aria-sort="descending"
        tabindex="0"
      >
        商品情報
      </th>
      <th class="ab-Table-head-cell" aria-sort="descending">価格</th>
      <th class="ab-Table-head-cell">ギフト利用審査</th>
      <th class="ab-Table-head-cell">最低発注数有無</th>
      <th class="ab-Table-head-cell">有効期限</th>
    </tr>
  </thead>
  <tbody class="ab-Table-body">
    <tr class="ab-Table-body-row">
      <td class="ab-Table-cell ab-flex ab-flex-column">
        <span class="ab-text-body-xs ab-text-secondary">ギフティ</span>
        <span class="ab-text-body-s">giftee Box</span>
      </td>
      <td class="ab-Table-cell">¥500</td>
      <td class="ab-Table-cell">1〜2営業日</td>
      <td class="ab-Table-cell">あり</td>
      <td class="ab-Table-cell">
        <span class="ab-Tooltip ab-Tooltip-top"
          >１ヶ月後の月末
          <span class="ab-Tooltip-description"
            >テーブルからはみ出して要素を表示できます</span
          >
        </span>
      </td>
    </tr>
    <tr class="ab-Table-body-row">
      <td class="ab-Table-cell ab-flex ab-flex-items-center">
        <img src="${GifteeBox}" class="ab-mr-2" style="height: 56px" />
        <div class="ab-flex ab-flex-column">
          <span class="ab-text-body-xs ab-text-secondary"
            >ギフティ</span
          >
          <span class="ab-text-body-s">giftee Box</span>
        </div>
      </td>
      <td class="ab-Table-cell">¥500</td>
      <td class="ab-Table-cell">1〜2営業日</td>
      <td class="ab-Table-cell">あり</td>
      <td class="ab-Table-cell">
        <span class="ab-Tooltip ab-Tooltip-top"
          >１ヶ月後の月末
          <span class="ab-Tooltip-description"
            >テーブルからはみ出して要素を表示できます</span
          >
        </span>
      </td>
    </tr>
    <tr class="ab-Table-body-row">
      <td class="ab-Table-cell ab-flex ab-flex-items-center">
        <div class="ab-Checkbox-wrapper ab-mr-2">
          <div class="ab-Checkbox">
            <input type="checkbox" class="ab-Checkbox-input" />
            <span class="ab-Checkbox-box"></span>
          </div>
        </div>
        <img src="${GifteeBox}" class="ab-mx-2" style="height: 56px" />
        <div class="ab-flex ab-flex-column">
          <span class="ab-text-body-xs ab-text-secondary"
            >ギフティ</span
          >
          <span class="ab-text-body-s">giftee Box</span>
        </div>
      </td>
      <td class="ab-Table-cell">¥500</td>
      <td class="ab-Table-cell">1〜2営業日</td>
      <td class="ab-Table-cell">あり</td>
      <td class="ab-Table-cell">
        <span class="ab-Tooltip ab-Tooltip-top"
          >１ヶ月後の月末
          <span class="ab-Tooltip-description"
            >テーブルからはみ出して要素を表示できます</span
          >
        </span>
      </td>
    </tr>
  </tbody>
</table>
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
