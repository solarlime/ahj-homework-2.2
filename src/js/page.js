import data from './data';
import renderTableTitle from './renderTableTitle';
import render from './render';

/** Создаём таблицу из данных
 *  представленных в виде объекта
 *  в data.js
 */
export default function init() {
  const body = document.querySelector('body');
  const title = document.getElementById('table-title');
  const table = document.createElement('table');
  const sorts = [
    { by: 'id', how: 'ascending' },
    { by: 'id', how: 'descending' },
    { by: 'title', how: 'ascending' },
    { by: 'title', how: 'descending' },
    { by: 'year', how: 'ascending' },
    { by: 'year', how: 'descending' },
    { by: 'imdb', how: 'ascending' },
    { by: 'imdb', how: 'descending' },
  ];
  title.innerText = 'By default';
  table.setAttribute('class', 'table');

  renderTableTitle(table, 'default', 'default');

  // Вытягиваем данные и строим таблицу по умолчанию
  data.films.forEach((item) => {
    table.innerHTML += `${`<tr class="table-row" data-id="${item.id}" data-title="${item.title}" data-year="${item.year}" data-imdb="${item.imdb}">\n`
    + `  <td class="table-cell table-cell-id">${item.id}</td>\n`
    + `  <td class="table-cell">${item.title}</td>\n`
    + `  <td class="table-cell">${item.year}</td>\n`
    + `  <td class="table-cell">imdb: ${item.imdb}</td>\n`
    + '</tr>\n'}`;
  });

  body.insertAdjacentElement('beforeend', table);
  const rows = Array.from(body.querySelectorAll('tr.table-row'));

  // Первый запуск
  setTimeout(render, 2000, title, table, rows, sorts);
}
