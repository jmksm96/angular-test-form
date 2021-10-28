Тестовое задание Front-end, Angular

Нужно сделать форму-анкету Фронт-Энд разработчика.
Для выполнения данного задания нужно использовать 'реактивные формы angular'.

Поля которые должны быть в форме:

1. Имя
2. Фамилия
3. поле чтобы выбрать День Рождения. (используйте angular material datepicker или другую библиотеку на ваше усмотрение)
4. Select для выбора js технологии (данные для селекта: [angular, react, vue])
5. Select для выбора версии, выбранного выше фреймворка. (селект для выбора версии изначально должен быть недоступен, его можно использовать только после выбора js-фреймворка, данные для выбора версии будут разные смотрите ниже JSON ).
   {
   angular: ['1.1.1', '1.2.1', '1.3.3'],
   react: ['2.1.2', '3.2.4', '4.3.1'],
   vue: ['3.3.1', '5.2.1', '5.1.3'],
   }
6. поле для email.
   -- для этого поля должна быть валидация на email,

- также для этого поля нужно создать асинхронный валидатор который будет обращаться на сервер и проверять существует ли такой емейл. (сымитируйте обращение к серверу и верните результат через 2 секунды, если пользователь ввел test@test.test он должен увидеть ошибку что такой емейл уже существует).
  7.Также у пользователя должна быть возможность добавить несколько увлечений (хобби).

---Все поля формы должны быть required и должно быть хотя бы одно хобби.

конечная модель которая будет отправляться на сервер должна выглядеть так:
{
firstName: 'Petro',
lastName: 'Pupkin',
dateOfBirth: '23-11-1990',
framework: 'angular',
frameworkVersion: '1.2.1',
email: 'test2@test.test',
hobby: [{name: 'football', duration: '2 month'}, {name: 'tennis', duration: '6 month'}]
}