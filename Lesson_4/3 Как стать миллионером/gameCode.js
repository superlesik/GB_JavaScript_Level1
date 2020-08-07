var event; //задаем вопрос и варианты ответа
var answerCorrect = 0; //количество правильных ответов, изначально равно 0
var money = 0; //выигрыш игрока, изначально равен 0
//var maxTryCount=2; //количество попыток на правильный ответ
var ok = false;


function billionerGame() {

    for (var i = 0; i < 4; i++) {
        do {
            event = parseInt(prompt(questions[i].qtext + '\n(Чтобы закончить игру введите -1)' + "\n" + questions[i].a1 + "\n" + questions[i].a2 + "\n" +
                questions[i].a3 + "\n" + questions[i].a4 + "\n"));
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(event);
            }

        } while (!ok);

        if (event == questions[i].correct) {
            answerCorrect++;
            money+=1000;
        } else if (event != questions[i].correct) {
            alert("Это неверный ответ");

            event = parseInt(prompt('Попробуйте еще раз\n' + questions[i].qtext + '\n(Чтобы закончить игру введите -1)' + "\n" + questions[i].a1 + "\n" + questions[i].a2 + "\n" +
                questions[i].a3 + "\n" + questions[i].a4 + "\n" + 'У вас осталось ' + `${tryAnswer()}` + ' попыток'));//(maxTryCount - tryCount)
        } else if(maxTryCount===0) {
            alert("Вы проиграли!");
            break;
        }
    }
    alert("Кол-во правильных ответов: " + answerCorrect + "\nВы заработали:" + money);
    alert('Спасибо за игру');
}
function tryAnswer(maxTryCount=2){
    return maxTryCount-1;
}

//------------------------------------------
function isAnswer(event) {
    if (Number.isNaN(event) || !Number.isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > 5) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}