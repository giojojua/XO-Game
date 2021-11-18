const mix = require('laravel-mix');

mix.setPublicPath('public');
mix.setResourceRoot('/');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/scss/main.scss', 'public/css')
    .copy('resources/views/*.html', 'public')
    .copy('resources/images/**', 'public/images/')