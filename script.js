const urlGet = 'db.json';
const urlSend = 'https://jsonplaceholder.typicode.com/posts';

const getData = (url) => { //получает данные из файла db.json
    return fetch(url)
        .then(response => response.json()) //методом response раскрыли данные (ответ от сервера), объект Response
        .catch(error => console.log(error))
};

const sendData = (url, data) => { //отправляем полученные данные на адрес https://jsoт...
    return fetch(url, {
        method: 'POST', //POST отправляет данные
        body: JSON.stringify(data), //тело - данные, что отправляем
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .catch(error => console.log(error))
};

const result = getData(urlGet); //заносим рез-т работы ф-ции в переменную

sendData(urlSend, result) //вызываем ф-цию отправки данных 
    .then(data => console.log(data)) //получаем данные в удоб.виде (должен быть статус 101)
    .catch(error => console.log(error));