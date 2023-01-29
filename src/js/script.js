const slider = tns({
    container: '.forums__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    responsive: {
        320: {
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