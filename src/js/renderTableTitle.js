// Простая функция отрисовки первой строки таблицы
export default function renderTableTitle(table, by, how) {
  // eslint-disable-next-line no-param-reassign
  table.innerHTML += `${'<tr>\n'
  + '  <td class="table-cell table-cell-id table-cell-title" id="id">id</td>\n'
  + '  <td class="table-cell table-cell-title" id="title">title</td>\n'
  + '  <td class="table-cell table-cell-title"id="year">year</td>\n'
  + '  <td class="table-cell table-cell-title" id="imdb">imdb</td>\n'
  + '</tr>\n'}`;
  if (by !== 'default') {
    const forSymbol = table.querySelector(`#${by}`);
    if (how === 'ascending') {
      forSymbol.textContent += '\u{2191}';
    } else {
      forSymbol.textContent += '\u{2193}';
    }
  }
}
