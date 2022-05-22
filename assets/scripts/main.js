var siteTheme = document.querySelectorAll('.s-theme');
siteTheme.forEach(element => {
    element.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme')
    })
});

var menuBar = document.querySelector(".menu-icon");
var closeMenu = document.querySelector('.close-sidebar');
var sideMenu = document.querySelector('.sidebar-menu');


menuBar.addEventListener('click', () => {
    sideMenu.classList.remove('display-none');
})

window.onclick = function (event) {
    if (event.target == closeMenu) {
        sideMenu.classList.add('display-none');
    }
}



var portFolio = document.querySelector('.portfolio-btn');
var modal = document.querySelector('.popup-modal')

portFolio.addEventListener('click', () => {
    modal.classList.remove('display-none');
})

var closeModal = document.querySelectorAll('.close-btn')
closeModal.forEach(x => {
    x.addEventListener('click', () => {
        modal.classList.add('display-none');
    })
});
