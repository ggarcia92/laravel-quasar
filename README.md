# Laravel + Quasar basic template

## Versions
- [Laravel](https://laravel.com/): 7.0 
- [Quasar](https://quasar.dev) 1.11.2

## Optional libraries used
- [Axios](https://github.com/axios/axios)
- [lodash](https://github.com/lodash/lodash)
- [Vuex](https://github.com/vuejs/vuex)
- [animate.css](https://github.com/animate-css/animate.css)

## Install dependencies
1. `composer install`
2. `npm install` or `yarn`

## After Install
1. Duplicate `.env.example` file, change its name to `.env` and change the environment variables
2. `php artisan key:generate`
3. `php artisan config:cache`

## Run on development
1. `php artisan serve`
2. `npm run watch`

## Run on production
1. Change production URL on `/resources/js/boot/axios`
2. `npm run prod`
3. Deploy Laravel according to [this](https://laravel.com/docs/7.x/deployment)
