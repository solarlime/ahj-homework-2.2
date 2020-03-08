import tableRender from './tableRender';

// Обёртка для tableRender, реализующая рекурсивный вызов и бесконечную работу
// eslint-disable-next-line no-shadow

export default function render(title, table, rows, sorts) {
  clearTimeout(render);
  tableRender(title, table, rows, sorts[0]);
  sorts.shift();
  if (!sorts.length) {
    // eslint-disable-next-line no-param-reassign
    sorts = [
      { by: 'id', how: 'ascending' },
      { by: 'id', how: 'descending' },
      { by: 'title', how: 'ascending' },
      { by: 'title', how: 'descending' },
      { by: 'year', how: 'ascending' },
      { by: 'year', how: 'descending' },
      { by: 'imdb', how: 'ascending' },
      { by: 'imdb', how: 'descending' },
    ];
  }
  setTimeout(render, 2000, title, table, rows, sorts);
}
