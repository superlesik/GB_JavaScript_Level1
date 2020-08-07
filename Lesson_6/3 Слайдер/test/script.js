function listCreate() {
    ul = document.createElement('ul');
    ul.className = 'slider'
    ul.style.listStyleType = 'none';
    ul.style.position = 'relative';
    ul.style.margin = '0 auto';

    for (var i =0; i <3; i++) {
        var li = document.createElement('li');
        li.className = 'slide';
    }
    document.body.appendChild(ul);
}
listCreate();

//получаем все слайды из html
var slider = document.querySelectorAll('.slider .slide');

//переменная, обозначаюшая текущий слайд
var currentSlide = 0;

//функции, которые меняют слады в соответствующем порядке при нажатии кнопок
function nextSlide() {
    changeSlide(currentSlide+1);
}

function previousSlide() {
    changeSlide(currentSlide-1);
}

//функция, которая менят  по очереди класс у слайдов, чтобы они отображались
function changeSlide(n) {
    slider[currentSlide].className = 'slide';
    currentSlide = (n+slider.length)%slider.length;
    slider[currentSlide].className = 'slide active';
}

