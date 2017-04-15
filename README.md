# Vue CLI and Laravel 5.4 Boilerplate for Passport Auth


This project composed of two different frameworks (VueJS and Laravel), separated in to two directories so that VueJS is purely for Front-end and Laravel for Back-end.

This may not be perfect for I'm still learning some of the new concepts added on both frameworks but this may come in handy for some people, including myself :)

Please feel free to use and modify it depending on your project's requirements.


## Installation

#### Front End
```
cd front/
npm install
gulp
npm run build
```
Edit hard-coded URLs on `main.js`, `Login.vue` and `Registration.vue`



#### Back End
```
cd back/
composer update
php artisan migrate
php artisan passport:install
```
Edit hard-coded client_id and client_secret on `Login.vue` and `Registration.vue` 
