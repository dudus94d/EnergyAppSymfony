const $ = require('jquery');
require('bootstrap');

$(document).ready(function () {
    alert('działa');
}).on('click', function () {
    console.log('click');
})