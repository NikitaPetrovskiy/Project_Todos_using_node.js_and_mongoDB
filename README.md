# Project_Todos_using_node.js_and_mongoDB
Это проект был создан успользуя: `Node.js` и `MongoDB`. Дополнительно использовались: `express`, `nodemon`, `express-handlebars`,
а так же `mongoose`.
## `Цель:`
1. Практика `Node.js`. (автообновление сервера используя модуль `nodemon`, настройка маршрутов (используя `Router` библиотеки `express`),
практика методов (`.get`, `.post`), подключение и отправка данных базе данных `MongoDB`).
2. Практика взаимодействия с базой данных `MonogoDB`. (создание базы данных, добавление и удаление елементов, создание объекта и
подключение используя ODM-библиотеку `Mongoose`).
3. Практика создания динамических страниц и модулей используя шаблонизатор `Handlebars`.
## Описание приложения `Todos`:
Это простое приложение, где можно создавать новые заметки и отмечать выполненые.<br/>
- Главноя страница `Todo list` - это список всех заметок. <br/>
- Вторая страница `Create todo` - страница, где можно создать новую заметку. <br/>
Созданная заметка сохраняется как новый елемент в базу данных. Он имеет поле `title` - содержимое заметки, и поле `completed`.<br/>
Поле `completed` по умолчание имеет булевое значение `false`. <br/>
Если же заметка отмечена как выполненая, то значение поля изменится на `true`. <br/>