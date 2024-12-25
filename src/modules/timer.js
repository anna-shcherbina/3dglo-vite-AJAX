export const timer = (deadline) => { //получаем deadline прямо из main.js
    console.log(deadline);
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    let idInterval;

    const getTimeRemaining = () => { //ф-ция представляет рассчит.время для updateClock

        let dateStop = new Date(deadline).getTime(); //миллисекунды до дедлайна
        let dateNow = new Date().getTime(); //миллисекунды до текущего времени на ПК
        let timeRemaining = (dateStop - dateNow) / 1000; //разница в сек        
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60); //остаток от деления на 60

        return { timeRemaining, hours, minutes, seconds } //ф-ция возвращает объект с рассчит.временем
        //название ключа соответствует названию своего значения
    };

    const changeTimeFormat = (value) => { //изменение формата времени
        return value < 10 ? "0" + value : value; //значение <10 ? то подставь 0 перед ним
    };

    const updateClock = () => { //функция обновляет таймер на экране
        let getTime = getTimeRemaining(); //заносим результат функции getTimeRemaining и запускаем её

        timerHours.textContent = changeTimeFormat(getTime.hours); //записали в вёрстку
        timerMinutes.textContent = changeTimeFormat(getTime.minutes);
        timerSeconds.textContent = changeTimeFormat(getTime.seconds);

        if (getTime.timeRemaining < 0) { //если секунды до дедлайна кончились
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';

            clearInterval(idInterval);
        }
    }

    idInterval = setInterval(updateClock, 1000);

}