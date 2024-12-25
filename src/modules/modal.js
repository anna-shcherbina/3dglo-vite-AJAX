import { animate } from './helpers'

export const modalFunc = () => {
    const modal = document.querySelector('.popup') //блок, где лежит модальное окно
    const buttons = document.querySelectorAll('.popup-btn')

    let valueOpacity = modal.style.opacity;

    const appearanceModal = () => { //функция анимир.появления окна
        animate({
            duration: 1000,
            timing(timeFraction) {
                return Math.pow(timeFraction, 5) //увеличиваем саму скорость анимации
            },
            draw(progress) {
                modal.style.opacity = valueOpacity + progress; //прозрачность изменяется от 0 до 1
            },
        });
    };

    const disappearanceModal = () => { //функция анимир.исчезновения окна
        animate({
            duration: 1000,
            timing(timeFraction) {
                return Math.pow(timeFraction, 5) //увеличиваем саму скорость анимации
            },
            draw(progress) {
                modal.style.opacity = valueOpacity + 1 - progress; // прозрачность от 1 до 0 

                if (modal.style.opacity <= 0) { //когда окно стало прозрачным,
                    modal.style.display = 'none' //закрой его
                };
            },
        });
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            modal.style.display = 'block' //заблокировали экран
            modal.style.opacity = 1 //сделай окно сразу ярким

            if (window.screen.width > 768) { //если ширина экрана устройства больше...,
                appearanceModal() //то запускай анимацию
            };
        })
    });

    modal.addEventListener('click', (e) => { //что ты кликнул на блоке, где модал.окно?
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            //если при клике мы получим null, т.е. кликнули элемент НЕ с классом модал.окна ИЛИ есть класс кнопки-крестика

            if (window.screen.width > 768) {
                disappearanceModal()
            } else {
                modal.style.display = 'none' //разблокируй экран (закрой модал.окно)
            };
        };
    });
}