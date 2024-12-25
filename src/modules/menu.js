export const menuFunc = () => {
    const menuBtn = document.querySelector('.menu') //кнопка-бургер меню
    const menu = document.querySelector('menu') //выезжающее меню    
    const menuItems = menu.querySelectorAll('ul>li>a') //ссылки в меню

    menuBtn.addEventListener('click', () => {
        menu.classList.add('active-menu')
    }) //появление меню по кнопке-бургеру

    menu.addEventListener('click', (e) => {
        if (e.target.closest('ul>li>a') || e.target.closest('.close-btn')) {
            //если это элемент/ссылка меню, или кнопка-крестик 
            const menuItem = e.target.closest('ul>li>a')

            menuItems.forEach((item) => {
                if (item === menuItem) { //если итерир.элемент - это ссылка                    
                    menu.classList.remove('active-menu') //то убери с меню актив-класс (скрой меню)                    
                }
            })
            menu.classList.remove('active-menu')
        }
    })
}





