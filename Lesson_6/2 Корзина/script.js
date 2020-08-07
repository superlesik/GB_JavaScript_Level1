//выводим товары на страницу
var out = '';
for (var key in goods) {
    out += '<div class="item" onclick>';
    out += '<p class="name">' + 'Название: ' + goods[key].name + '</p>';
    out += '<p class="price">' + goods[key].cost + '</p>';
    out += '<img src="' + goods[key].img + '">' + '<br>';
    out += '<button class="buy">Купить</button>';
    out += '<button class="del">Отменить</button>' + '<br>';
    out += '</div>';
};
document.querySelector('.items').innerHTML = out;

var items = document.getElementsByClassName('item'),
    cart = document.getElementById('cart'),
    infotext = document.getElementById('infotext'),
    summ = document.getElementsByClassName('summ'),
    del = document.getElementsByClassName('del')

//Функция добавления элемента в корзину
function addItem() {
    //скрываем надпись ваша корзина пуста
    infotext.style.display = 'none';
    //добавляем элементы в корзину
    var item_clone = this.parentElement.cloneNode(true);
    cart.appendChild(item_clone)

    //Считаем общую сумму покупок
    var prices = cart.getElementsByClassName('price')
    totalprice = 0;
    for (var j = 0; j < prices.length; j++) {
        totalprice = totalprice + Number(prices[j].innerHTML);
    }
    //console.log('TOTAL PRICE', totalprice);
    summ[0].innerHTML = 'Итоговая сумма ' + totalprice;
}

//Обработка нажатия на кнопку для добавления элемента в корзину
var buy = document.getElementsByClassName('buy');
for (var i = 0; i < buy.length; i++) {
    buy[i].onclick = addItem;
};

//Очистка корзины
var buttonClear = document.getElementById('clear');
buttonClear.onclick = function () {
    //очистка начального текста корзины
    cart.innerHTML = ''
    cart.appendChild(infotext)
    infotext.style.display = 'block';
    //очистка блока с общей суммой покупок
    summ[0].innerText = '';
}

//Функция удаления элемента из корзины
function delItem() {
    this.parentElement.remove()
}

//Обработка нажания на кнопку для удаления элементы из корзины
for (var i = 0; i < del.length; i++) {
    del[i].setAttribute('onclick', 'delItem.call(this)');
}
