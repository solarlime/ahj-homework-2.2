import renderTableTitle from '../renderTableTitle';

test('renderTableTitle without extras', () => {
  const received = document.createElement('table');
  const expected = `${'<tbody><tr>\n'
  + '  <td class="table-cell table-cell-id table-cell-title" id="id">id</td>\n'
  + '  <td class="table-cell table-cell-title" id="title">title</td>\n'
  + '  <td class="table-cell table-cell-title" id="year">year</td>\n'
  + '  <td class="table-cell table-cell-title" id="imdb">imdb</td>\n'
  + '</tr>\n'
  + '</tbody>'}`;
  renderTableTitle(received, 'default', 'default');
  expect(received.innerHTML).toEqual(expected);
});

test('renderTableTitle with extras', () => {
  const received = document.createElement('table');
  const expected = `${'<tbody><tr>\n'
  + '  <td class="table-cell table-cell-id table-cell-title" id="id">id\u{2191}</td>\n'
  + '  <td class="table-cell table-cell-title" id="title">title</td>\n'
  + '  <td class="table-cell table-cell-title" id="year">year</td>\n'
  + '  <td class="table-cell table-cell-title" id="imdb">imdb</td>\n'
  + '</tr>\n'
  + '</tbody>'}`;
  renderTableTitle(received, 'id', 'ascending');
  expect(received.innerHTML).toEqual(expected);
});
