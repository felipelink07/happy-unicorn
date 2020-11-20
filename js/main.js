
const toggleButton = document.getElementById('toggle-button');
const navBarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {

  navBarLinks.classList.toggle('show');

})

sal();