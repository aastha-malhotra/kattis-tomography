function sortNumber(a,b) { return b - a; }

function check(row_sums, col_sums) {
  while (row_sums.length > 0) {
    col_sums.sort(sortNumber);
    var k = row_sums[row_sums.length-1];
    row_sums.pop();
    if (k > col_sums.length)
      return false;
    if (k === 0)
      continue;
    if (col_sums[k - 1] === 0)
      return false;
    for (var i = 0; i < k; i++)
      col_sums[i]--;
  }
  for (var i = 0; i < col_sums.length; i++) {
    if (col_sums[i] !== 0)
      return false;
  }
  return true;
}

var matrix_size = [];
var row_sums = [];
var	col_sums = [];

var input_lines = 3;
while (input_lines > 0) {
  switch (input_lines) {
    case 3:
      matrix_size = readline().split(' ').map(function(num){ return parseInt(num); });
      input_lines--;
      break;
    case 2:
      row_sums = readline().split(' ').map(function(num){ return parseInt(num); });
      input_lines--;
      break;
    case 1:
      col_sums = readline().split(' ').map(function(num){ return parseInt(num); });
      input_lines--;
      break;
  }
}

print(check(row_sums, col_sums) ? "Yes" : "No");
