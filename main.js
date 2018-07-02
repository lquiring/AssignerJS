createTable(randomAssign());

function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    var tableHeader1 = document.createElement('th');
    tableHeader1.appendChild(document.createTextNode('Partner 1'));
    var tableHeader2 = document.createElement('th');
    tableHeader2.appendChild(document.createTextNode('Partner 2'));
    tableBody.appendChild(tableHeader1);
    tableBody.appendChild(tableHeader2);

    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
}

function randomAssign() {
    var array = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ];
    var num;
    var list = [];
    var compiledList = [];

    while(compiledList.length < 15) {
        num = getRandomInt(0, array.length);
        list.push(array[num]);
        array.splice(num, 1);

        num = getRandomInt(0, array.length);
        list.push(array[num]);
        array.splice(num, 1);

        compiledList.push(list);
        list = [];
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    return compiledList;
}