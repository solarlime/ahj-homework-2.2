/* eslint-disable no-param-reassign */
import renderTableTitle from './renderTableTitle';

// Функция для очистки таблицы, сортировки строк по критериям и последующей отрисовки
export default function tableRender(title, table, rows, operation) {
  Array.from(table.children).forEach((item) => item.remove());
  if ((operation.by === 'id') || (operation.by === 'year')) {
    rows.sort((a, b) => a.dataset[operation.by] - b.dataset[operation.by]);
  } else if ((operation.by === 'title') || (operation.by === 'imdb')) {
    rows.sort((a, b) => a.dataset[operation.by].localeCompare(b.dataset[operation.by], 'ru'));
  }
  if (operation.how === 'descending') {
    rows.reverse();
  }
  title.innerText = `By ${operation.by} (${operation.how})`;
  renderTableTitle(table);
  rows.forEach((item) => {
    table.innerHTML += `${`<tr class="table-row" data-id="${item.dataset.id}" data-title="${item.dataset.title}" data-year="${item.dataset.year}" data-imdb="${item.dataset.imdb}">\n`
    + `  <td class="table-cell table-cell-id">${item.dataset.id}</td>\n`
    + `  <td class="table-cell">${item.dataset.title}</td>\n`
    + `  <td class="table-cell">${item.dataset.year}</td>\n`
    + `  <td class="table-cell">imdb: ${item.dataset.imdb}</td>\n`
    + '</tr>\n'}`;
  });
}
