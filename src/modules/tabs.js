export const tabsFunc = () => {
    const tabContent = document.querySelectorAll('.service-tab'); //блок с информацией и картинкой
    const tabPanel = document.querySelector('.service-header'); // блок с кнопками
    const tabs = document.querySelectorAll('.service-header-tab');

    tabPanel.addEventListener('click', (e) => {
        if (e.target.closest('.service-header-tab')) { //если клик был по кнопке с родит.классом

            const tabBtn = e.target.closest('.service-header-tab') //определяем, на какой кнопке произошёл клик 

            tabs.forEach((tab, index) => { //то перебирай табы          
                if (tab === tabBtn) { //если итерируемая кнопка - это кликнутая кнопка с классом...
                    tab.classList.add('active'); //то даём ей класс active (станет синим цветом)
                    tabContent[index].classList.remove('d-none'); //переключай соответствующий контент
                } else {
                    tab.classList.remove('active'); //у всех остальных его удаляем
                    tabContent[index].classList.add('d-none'); //все остальные контенты скрой
                };
            })
        }
    })

}
