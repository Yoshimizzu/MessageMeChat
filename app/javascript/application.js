// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery" 
import "semantic-ui"

$(document).on('ready turbo:load', function() {
  $('.ui.dropdown').dropdown();
});