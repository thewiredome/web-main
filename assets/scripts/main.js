// var siteTheme = document.querySelectorAll('.s-theme');
// siteTheme.forEach(element => {
//     element.addEventListener('click', () => {
//         document.body.classList.toggle('dark-theme')
//     })
// });

// var menuBar = document.querySelector(".menu-icon");
// var closeMenu = document.querySelector('.close-sidebar');
// var sideMenu = document.querySelector('.sidebar-menu');


// menuBar.addEventListener('click', () => {
//     sideMenu.classList.remove('display-none');
// })

// window.onclick = function (event) {
//     if (event.target == closeMenu) {
//         sideMenu.classList.add('display-none');
//     }
// }



// var portFolio = document.querySelector('.portfolio-btn');
// var modal = document.querySelector('.popup-modal')

// portFolio.addEventListener('click', () => {
//     modal.classList.remove('display-none');
// })

// var closeModal = document.querySelectorAll('.close-btn')
// closeModal.forEach(x => {
//     x.addEventListener('click', () => {
//         modal.classList.add('display-none');
//     })
// });

var menuBar = document.querySelectorAll(".bi-list");
var closeMenu = document.querySelectorAll(".close-menu");
var menuContent = document.querySelectorAll(".menu-content");
var scrollBtn = document.querySelectorAll('.scrollBtn');


menuBar.forEach(menubar => {
    menubar.addEventListener('click', () => {
        menuContent.forEach(menucontent => {
            menucontent.classList.remove('display-none');
        })
    })
});

closeMenu.forEach(closemenu => {
    closemenu.addEventListener('click', () => {
         menuContent.forEach(menucontent => {
            menucontent.classList.add('display-none');
         })
    })
})

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.forEach(scrollbtn => {
            scrollbtn.classList.remove('display-none')
        })
    }
    else{
        scrollBtn.forEach(scrollbtn => {
            scrollbtn.classList.add('display-none')
        })
    }
}
scrollBtn.forEach(scrollbtn => {
    scrollbtn.addEventListener('click', () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    })
})