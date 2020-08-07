function chessboard() {
    //создаем тег table для нашей таблицы
    var tbl = document.createElement('table'),
        //создаем массивы с численной и буквенной нумерацией, а также белыми и черными фигурами
        letters = ['','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
        blackFigs1 = ['8','&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', '8'],
        whiteFigs1 = ['1','&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '1'],
        blackFigs2 = ['7','&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '7'],
        whiteFigs2 = ['2','&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'],
        num6 = ['6', '', '', '', '', '', '', '', '', '6'],
        num5 = ['5', '', '', '', '', '', '', '', '', '5'],
        num4 = ['4', '', '', '', '', '', '', '', '', '4'],
        num3 = ['3', '', '', '', '', '', '', '', '', '3'];

    //присваиваем таблице класс
    tbl.className = 'chess-board';
    document.body.appendChild(tbl);

    //переменная для окрашивания ячеек в черно-белый цвет var flag = true;

    //генерируем строки и столбцы таблицы
    for (var i = 0; i < 10; i++) {
        var tr = tbl.insertRow(i);

        for (var j = 0; j < 10; j++) {
            var td = tr.insertCell(j);
            switch (i) {
                case 0:
                    td.innerHTML = letters[j];
                    td.className = 'letters-top';
                    break;
                case 1:
                    td.innerHTML = blackFigs1[j];
                    break;
                case 2:
                    td.innerHTML = blackFigs2[j];
                    break;
                case 3:
                    td.innerHTML = num6[j];
                    break;
                case 4:
                    td.innerHTML = num5[j];
                    break;
                case 5:
                    td.innerHTML = num4[j];
                    break;
                case 6:
                    td.innerHTML = num3[j];
                    break;
                case 7:
                    td.innerHTML = whiteFigs2[j];
                    break;
                case 8:
                    td.innerHTML = whiteFigs1[j];
                    break;
                case 9:
                    td.innerHTML = letters[j];
                    td.className = 'letters';
                    break;
            }
        }
    }

    document.body.appendChild(tbl);
};
chessboard();
