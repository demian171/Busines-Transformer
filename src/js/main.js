document.getElementById('menu-button').onclick = function() {
    this.classList.toggle('active');
    document.querySelector(".header__menu").classList.toggle("active");
}