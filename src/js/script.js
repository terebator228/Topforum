
window.addEventListener('DOMContentLoaded', () => {
    const hamburger_menu = document.querySelector('.burger-menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.navmenu__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('navmenu__burger_active');
        hamburger_menu.classList.toggle('burger-menu__item_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('navmenu__burger_active');
            hamburger_menu.classList.toggle('burger-menu__item_active');
        })
    })
})

const slider = tns({
    container: '.forums__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    responsive: {
        319: {
            nav: true,
            mouseDrag: true
        },
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 1
        },
        700: {
          gutter: 30
        },
        900: {
          items: 1,
          nav: false,
        }
      }
});

document.querySelector('.prev').addEventListener('click',function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click',function () {
    slider.goTo('next');
});

const reviewsSlider = tns({
    container: '.reviews__inner',
    items: 2,
    slideBy: 'page',
    autoplay: false,
    responsive: {
        320: {
            nav: true,
            mouseDrag: true,
        },
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 1
        },
        700: {
          gutter: 30
        },
        900: {
          items: 2,
          nav: false,
        }
      }
});

document.querySelector('.prev_review').addEventListener('click',function () {
    reviewsSlider.goTo('prev');
});

document.querySelector('.next_review').addEventListener('click',function () {
    reviewsSlider.goTo('next');
});

const clientsSlider = tns({
    container: '.clients__inner',
    items: 6,
    slideBy: 1,
    autoplay: false,
    rewind: true,
    responsive: {
        320: {
            nav: true,
            mouseDrag: true,
        },
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 1
        },
        700: {
          gutter: 30
        },
        900: {
          items: 6,
          nav: false,
          controls: false,
        }
      }
});

document.querySelector('.clients_prev').addEventListener('click',function () {
    clientsSlider.goTo('prev');
});

document.querySelector('.clients_next').addEventListener('click',function () {
    clientsSlider.goTo('next');
});