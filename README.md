# @plcgi1/fastify-firebase-identity

## LINKS TO INVESTIGATE

https://gist.github.com/shwei/d34c7383a117451c07dc701ad12482f1

https://github.com/oxsav/fastify-firebase-auth

https://stackoverflow.com/questions/53766349/fastify-and-cloud-functions

https://github.com/fastify/fastify/issues/946#issuecomment-461104668

https://firebase.google.com/docs/database/admin/save-data

https://www.toptal.com/firebase/role-based-firebase-authentication

https://firebase.google.com/docs/auth/admin/custom-claims

## DESCRIPTION


## FEATURES


## INSTALL

```
npm install @plcgi1/fastify-firebase-identity
```

## USAGE

Full usage example in ./examples folder. You can use it as boilerplate too

```
mkdir your-project
cd your-project
npm init
cp node_modules/@plcgi1/fastify-firebase-identity/examples .
npm install

# edit .env file with your requirements

npm start

# go to browser - http://localhost:3000/docs

```

### ADDITIONAL fastify objects

## ISSUES

PR and issues are welcome

## TODO

1. Возможность авторизовывать и регать юзеров с доп параметрами,
которых нет в firebase.users
2. Использовать проверку ролей пользователей
3. Аутентифицировать готовых юзеров в сервисах, 
при использовании микросервисной и не очень архитектуре

Пример
Прилага заказа билетов - роли: админ, юзер
Сервисы: identity, delayed-jobs

Юзер регается(с доп параметрами) и логинится через firebase-identity. 
Система выдает токен
Этот токен валиден в delayed-jobs
Админ может добавлять задания в delayed-jobs 
Юзер может видеть список заданий в delayed-jobs



