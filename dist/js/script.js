
// Modal

const modal = document.querySelector('.modal'),
      close = document.querySelector('[data-close]'),
      club = document.querySelectorAll('.btn_club');

club.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.add('modal_show');
        document.body.style.overflow = 'hidden';
    })
})

close.addEventListener('click', () => {
    modal.classList.remove('modal_show');
    document.body.style.overflow = '';
})

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('modal_show');
        document.body.style.overflow = '';
    }
});

// Registration button

const btnWrap = document.querySelector('.registration__btn-wrap'),
      btnWrapPayment = document.querySelector('.registration__btn-wrap_payment'),
      package = btnWrap.querySelectorAll('button'),
      payment = document.querySelectorAll('.btn_payment');

function removeActive(btn, className) {
    btn.forEach((item) => {
        item.classList.remove(className);
    }) 
};

function addPackageActive(i = 0) {
    package[i].classList.add('btn_package_active')
};

function addPaymentActive(i = 0) {
    payment[i].classList.add('btn_payment_active')
};

removeActive(package, 'btn_package_active');
removeActive(payment, 'btn_payment_active');
addPackageActive();
addPaymentActive();

btnWrap.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('btn_package')) {
        package.forEach((item, i) => {
            if (target == item) {
                removeActive(package, 'btn_package_active');
                addPackageActive(i);
            }
        })
    }
});

btnWrapPayment.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('btn_payment')) {
        payment.forEach((item, i) => {
            if (target == item) {
                removeActive(payment, 'btn_payment_active');
                addPaymentActive(i);
            }
        })
    }
});


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
            items: 1,
            controls: false,
            nav: true,
            mouseDrag: true,
        },
        640: {
          edgePadding: 20,
          gutter: 20,
        },
        767: {
          nav: false,
          gutter: 30
        },
        900: {
          items: 1,
        },
        1201: {
            items: 2,
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
            controls: false,
            fixedWidth: 150,
            mouseDrag: true,
            gutter: 10,
        },
        577: {

        },
        640: {
          edgePadding: 20,
        },
        769: {
          fixedWidth: 180,
          nav: false,
          gutter:60,
          items: 3,
        },
        993: {
          items: 4,
          nav: false,
          gutter: 10,
        },
        1200: {
            items: 6,
        }
      }
});

document.querySelector('.clients_prev').addEventListener('click',function () {
    clientsSlider.goTo('prev');
});

document.querySelector('.clients_next').addEventListener('click',function () {
    clientsSlider.goTo('next');
});

// Registration Buttons

