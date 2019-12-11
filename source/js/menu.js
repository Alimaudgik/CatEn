var Menu = document.querySelector('.index__menu');
var OpenButton = document.querySelector('.index__menu--open');
var CloseButton = document.querySelector('.index__menu--close');
var ButtonMenu = document.querySelector('.nav-button');

OpenButton.addEventListener('click', function() {
  if (Menu.classList.contains('menu-off')) {
    Menu.classList.remove('menu-off');
    Menu.classList.add('menu-on');

    OpenButton.classList.remove('button-on');
    OpenButton.classList.add('button-off');

    CloseButton.classList.remove('button-off');
    CloseButton.classList.add('button-on');
  }
});

CloseButton.addEventListener('click', function() {
  if (Menu.classList.contains('menu-on')) {
    Menu.classList.remove('menu-on');
    Menu.classList.add('menu-off');

    OpenButton.classList.remove('button-off');
    OpenButton.classList.add('button-on');

    CloseButton.classList.remove('button-on');
    CloseButton.classList.add('button-off');
  }
});