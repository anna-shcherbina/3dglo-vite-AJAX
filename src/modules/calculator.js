export const calcFunc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block')
    const calcType = document.querySelector('.calc-type') //селект (поле выбора типа объекта)
    const calcSquare = document.querySelector('.calc-square') // инпут "Общая площадь"
    const calcCount = document.querySelector('.calc-count') // инпут "Количество помещений"
    const calcDay = document.querySelector('.calc-day') // инпут "Срок в днях"
    const total = document.getElementById('total') // итоговая сумма
    const inputsCalc = document.querySelectorAll("input.calc-item") //коллекция 4х инпутов калькулятора
    const inputsName = document.querySelectorAll('[name="user_name"]')
    const inputsTel = document.querySelectorAll('[type="tel"]')
    const inputsEmail = document.querySelectorAll('[type="email"]')
    const inputFooterMessage = document.getElementById('form2-message')

    const countCalc = () => { // функция рассчитывает итоговую стоимость и записывает в total
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value //переменная, в которую занесли значение селекта (1/1.4/2), value (строка) всегда с +, чтобы получить число
        const calcSquareValue = calcSquare.value

        let totalValue = 0
        let calcCountValue = 1
        let calcDayValue = 1

        if (calcCount.value > 1) { //по таблице формул (столбец В, строка 4) >1 = +10% - если количество помещений больше 1, то например 1 = 1 или 4 = 1,4
            calcCountValue += +calcCount.value / 10
        }

        if (calcDay.value && calcDay.value < 5) { //по таблице формул: если <5дней, то вся цена *2, также если ничего не введено, то вернётся null, поэтому добавим проверку на существование value
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) { //например 9 дней, то =1,5 (если <10, то увеличивается в 1,5раза)
            calcDayValue = 1.5
        } // в любом другом случае: let calcDayValue = 1

        if (calcType.value && calcSquare.value) {//только в случае заполненных полей (value существуют/не 0/не undefiend) мы должны делать расчёт итога
            totalValue = Math.round(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue) //см.общую формулу в таблице (столбец С, строка 6)
        } else {
            totalValue = 0
        }

        total.textContent = totalValue //итог значения totalValue вывели в textContent спана (поле ИТОГО)
    }

    calcBlock.addEventListener('input', (e) => { //при каж.вводе очередного символа в инпуте или выборе типа помещения в селекте увидим соответствующий подсчёт итога

        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc() //при событии инпут/селект вызывай ф-цию countCalc
        }
    })

    inputsName.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+$/g, ""); //кроме кириллицы, дефиса, пробела заменяй на пустую строку
        });
    });

    inputFooterMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+$/g, "");
    })

    inputsCalc.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, ""); //замени на пустую строку всё, кроме чисел
        });
    });

    inputsTel.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\-\(\)]+$/g, ""); //замени на пустую строку всё, кроме цифр, дефиса, скобок
        });
    });

    //замени на пустую строку всё, кроме латинницы, цифр и спецсимволов:  @  -  _  . ! ~ * '

    inputsEmail.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9\@\s\-\_\.\!\~\*\']+$/g, "");
        });
    });
}