import renderTableTitle from '../renderTableTitle';

test('renderTableTitle', () => {
  const received = document.createElement('table');
  const expected = `${'<tbody><tr>\n'
  + '  <td class="table-cell table-cell-id table-cell-title">id</td>\n'
  + '  <td class="table-cell table-cell-title">title</td>\n'
  + '  <td class="table-cell table-cell-title">year</td>\n'
  + '  <td class="table-cell table-cell-title">imdb</td>\n'
  + '</tr>\n'
  + '</tbody>'}`;
  renderTableTitle(received);
  expect(received.innerHTML).toEqual(expected);
});
