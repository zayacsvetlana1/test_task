# Next.js with react-bootstrap example

## Тестовое задание

#### С использованием библиотеки React реализовать приложение (плюсом будет использование Next.js, а также TypeScript), которое умеет показывать следующие страницы:

- / - главная
- /login - страница ввода логина и пароля
- /users - страница с пользователями
- /users/:id - страница конкретного пользователя
- /profile - страница с произвольным текстом, недоступная без авторизации

#### На сайте, в шапке или подвале реализовать ссылки:

- На главную (/)
- Пользователи (/users)
- Профиль (/profile)

Если пользователь попадает на страницу /profile и он не авторизован - перекидывать на страницу /login. Форма входа (
/login) состоит их двух полей email и password. Для авторизации используем POST https://reqres.in/api/login. В случае
успешного ответа от сервера, перебрасываем на страницу /profile, в противном выводить error, который пришел в ответе.
Информация об авторизации пользователя должна сохраняться при перезагрузке страницы.

Страница /users содержит список пользователей. Первоначальный список пользователей получаем
GET https://reqres.in/api/users. Все остальные действия с пользователями (добавление, удаление, фильтрация) реализуем
через глобальный/локальный стейт.

#### На странице необходимо реализовать возможность:

- добавления и удаления пользователей
- переходы на конкретные страницы пользователей /users/:id
- форму для фильтрации пользователей по email/first_name/last_name, выбор фильтров должен сохраняться при перезагрузке
  страницы Запрос за пользователями, попытку залогиниться и все что посчитаете нужным - пробросить через Redux.

Оформление (дизайн) — не важно.

Код оформить на GitHub.

### How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the
example:

```bash
npx create-next-app --example with-react-bootstrap with-react-bootstrap-app
# or
yarn create next-app --example with-react-bootstrap with-react-bootstrap-app
# or
pnpm create next-app -- --example with-react-bootstrap with-react-bootstrap-app
```

Deploy it to the cloud
with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment))
.
