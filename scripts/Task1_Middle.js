(function () {
  const btn = document.getElementById('run'),
        table = document.getElementById('table');

  btn.addEventListener('click', () => {
    let fullTable = '',
        rowValue = parseInt(document.getElementById('rows').value),
        columnValue = parseInt(document.getElementById('columns').value)

    for (let i = 0; i < rowValue; i++) {
      fullTable += createTr(columnValue);
    };

    table.innerHTML = fullTable;
  });

  function createTr(val) {
    let td = '';

    for (let i = 0; i < val; i++) {
      td += `<td></td>`;
    };

    return `<tr>${td}</tr>`;
  };

  btn.addEventListener('click', () => {
    let trList = table.rows;

    [...trList].forEach(fillTable);
  });

  function fillTable(elem, index) {
    let tdList = elem.cells,
        randomColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

    [...tdList].forEach((item, i) => {
      item.textContent = `${index + 1}${i + 1}`;

      item.addEventListener('click', () => {
        item.classList.contains('colored') ? item.style.background = '' : item.style.background = randomColor;

        item.classList.toggle('colored');
      });
    });
  };

  function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
  };
})();
