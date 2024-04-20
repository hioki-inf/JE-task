// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "jquery"
import "slick"
import "popper.js"
import "bootstrap"

import '@fortawesome/fontawesome-free/js/all';
import "../stylesheets/application" 

Rails.start()
Turbolinks.start()
ActiveStorage.start()

alert('a');
console.log('a');
const file1 = document.getElementById("file1").files[0];
console.log(file1);