// нашли все заголовки табов по дата атрибуту
const tabsHeaders = document.querySelectorAll('[data-tab]');

// Для каждого заголовока запустили функцию tabsHandler
tabsHeaders.forEach(tabsHandler);

function tabsHandler(item) {
    console.log(item);
    // Для каждого заголовка по клику запускаем функцию tabsClick
    item.addEventListener('click', tabsClick)
}

function tabsClick() {
    console.log('Fired');
    // Находим название ID связанного блока с контентом
    const tabId = this.dataset.tab;


    // Скрываем все блоки с контентом 
    // Находим по дата атрибуту блоки с контентом и скрываем их
    document.querySelectorAll('[data-tab-content]').forEach(function (item) {
        item.classList.add('tab-content-hidden');
    })
    // По ID включаем нужный блок с контентом
    document.getElementById(tabId).classList.toggle('tab-content-hidden');
}