// Простая функция отрисовки первой строки таблицы
export default function renderTableTitle(table) {
  // eslint-disable-next-line no-param-reassign
  table.innerHTML += `${'<tr>\n'
  + '  <td class="table-cell table-cell-id table-cell-title">id</td>\n'
  + '  <td class="table-cell table-cell-title">title</td>\n'
  + '  <td class="table-cell table-cell-title">year</td>\n'
  + '  <td class="table-cell table-cell-title">imdb</td>\n'
  + '</tr>\n'}`;
}
