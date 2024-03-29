document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const searchBtn = document.querySelector('#searchBtn');
    const spoilerSearch = document.querySelector('.search__spoiler');
    const spoilerSearchInputs = document.querySelectorAll('.search__input');
    const spoilerSearchClean = document.querySelectorAll('.clearSearchInput');
    const spoilerSearchContent = document.querySelector('.search__row');
    const body = document.querySelector('body');

    const burger = document.querySelector('.header-burger');
    const mobileMenu = document.querySelector('.menumobile');

    const switchSizes = document.querySelectorAll('.size__switch-btn input');
    const switchFilterBtns = document.querySelectorAll('.product__footer-filter_btn');

    const catalogCards = document.querySelectorAll('.row__card');

    // window.addEventListener('scroll', function () {
    //     const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // });



    function headerWatcher() {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        if (window.scrollY < 0.1) {
            header.classList.remove('header--scroll')
        } else {
            header.classList.add('header--scroll')
        }
        requestAnimationFrame(headerWatcher)
    }

    headerWatcher();

    catalogCards.forEach((card) => {
        card.addEventListener('mouseenter', (e) => {
            const self = e.currentTarget;
            card.style.height = self.offsetHeight + 'px';
            self.style.zIndex = '3';
            self.querySelector('.product-sizes').style.height = 'auto';
            const fullSize = self.offsetHeight + self.querySelector('.product-sizes').offsetHeight;
            self.querySelector('.row__card-inner').style.height = fullSize + 'px';

            // debugger;
        });
        card.addEventListener('mouseleave', (e) => {
            card.style.removeProperty('height');
            card.style.removeProperty('z-index');
            card.querySelector('.product-sizes').style.removeProperty('height');
            card.querySelector('.row__card-inner').style.removeProperty('height');
        });
    });


    const checkboxes = document.querySelectorAll('.filter__checkbox');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const filterCategoryButton = document.querySelector(`[data-filter=${this.id}]`)

            if (this.checked) {
                filterCategoryButton.classList.add('filer__data-show');
                checkbox.addEventListener('click', function () {
                    filterCategoryButton.classList.remove('filer__data-show');
                })

                checkboxes.forEach(function (otherCheckbox) {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                        document.querySelector(`[data-filter=${otherCheckbox.id}]`).classList.remove('filer__data-show');
                    }
                });
            }
        });
    });

    const filterButtons = document.querySelectorAll('.filter__field');
    const filterInners = document.querySelectorAll('.filter__data');
    document.addEventListener('mouseup', function (e) {
        filterInners.forEach((filter) => {
            const target = e.target;
            const isCurrentFilter = target === filter || filter.contains(target);
            const isCurrentButton = Array.from(filterButtons).filter((button) => button === target || button.contains(target))[0];
            const isFilterActive = filter.classList.contains('filer__data-show');

            if (!isCurrentFilter && !isCurrentButton && isFilterActive) {
                filter.classList.remove('filer__data-show');
                filterButtons.forEach((button) => {
                    button.querySelector('.filter__checkbox').checked = false;
                });
            }
        });
    });

    const sortingRadioButtons = document.querySelectorAll('input[name=sort]');
    const labelSort = document.querySelector('label[for=sort]');

    sortingRadioButtons.forEach((sort) => {
        sort.addEventListener('click', () => {
            labelSort.innerHTML = sort.value;
        });
    });

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        spoilerSearch.classList.toggle('show__spoiler');
        header.classList.toggle('header--color')
        body.classList.toggle('modal-open');
        spoilerSearchInputs.forEach((input) => {
            input.focus();
        });
    });

    if (!spoilerSearch.classList.contains('show__spoiler')) {
        header.classList.remove('header--color');
    }

    spoilerSearchClean.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            spoilerSearchInputs.forEach((input) => {
                if (input.value !== '') input.value = '';
                input.focus();
            });
        });
    });

    window.addEventListener('resize', function (e) {
        if (e.currentTarget.outerWidth >= 900) {
            burger.classList.remove('burger-close');
            mobileMenu.classList.remove('show');
            mobileMenu.classList.remove('visible');
            body.classList.remove('modal-open');
            document.querySelector('.menumobile-wrap').classList.remove('visible');
        }
    });

    const mobileSearchClear = document.querySelector('.btn__clear');

    spoilerSearchInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            console.log(e.target.value);
            if (window.innerWidth <= 900 && e.target.value.length >= 1) {
                mobileSearchClear.style.display = 'block';
            } else if (window.innerWidth <= 600 && e.target.value === '') {
                mobileSearchClear.style.display = 'none';
            } else {
                mobileSearchClear.style.display = 'none';
            }
        });
    });

    mobileSearchClear.addEventListener('click', () => {
        mobileSearchClear.style.display = 'none';
    });

    /*=======================SWITCH SIZES=======================*/

    const cardSizes = document.querySelectorAll('.sizes__table');

    switchSizes.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
        });
    });

    /*=======================/SWITCH SIZES=======================*/

    switchFilterBtns.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            const index = Array.from(this.parentNode.children).indexOf(this)
            Array.from(this.parentNode.children).forEach(item => {
                item.classList.remove('filter-btn__active');
            })
            this.classList.add('filter-btn__active');

            document.querySelectorAll('.product__footer-slider').forEach(slider => {
                slider.classList.remove('product__footer-slider_active')
            })
            document.querySelectorAll('.product__footer-slider')[index].classList.add('product__footer-slider_active')
        });
    });

    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            burger.classList.remove('burger-close');
            mobileMenu.classList.remove('show');
            mobileMenu.classList.remove('visible');
            body.classList.remove('modal-open');
            document.querySelector('.menumobile-wrap').classList.remove('visible');
        }
    });

    const toggleMobileMenu = () => {
        burger.classList.toggle('burger-close');
        mobileMenu.classList.toggle('show');
        mobileMenu.classList.toggle('visible');
        document.querySelector('.menumobile-wrap').classList.toggle('visible');
        body.classList.toggle('modal-open');
    };

    burger.addEventListener('click', () => {
        toggleMobileMenu();
    });

    const setActive = (el, active) => {
        const formField = el.parentNode.parentNode;
        if (active) {
            formField.classList.add('form-field--is-active');
        } else {
            formField.classList.remove('form-field--is-active');
            el.value === '' ? formField.classList.remove('form-field--is-filled') : formField.classList.add('form-field--is-filled');
        }
    };

    [].forEach.call(document.querySelectorAll('.form-field__input, .form-field__textarea'), (el) => {
        el.onblur = () => {
            setActive(el, false);
        };
        el.onfocus = () => {
            setActive(el, true);
        };
    });
});

document.querySelectorAll('.size__switch-btn-name').forEach((button) => {
    button.addEventListener('click', function () {
        const index = Array.from(this.parentNode.children).indexOf(button);
        Array.from(this.parentNode.children).forEach((item) => {
            item.classList.remove('size__switch-btn_active');
        });
        this.classList.add('size__switch-btn_active');


        this.closest('.product-sizes__inner')
            .querySelectorAll('.sizes')
            .forEach((item) => {
                item.classList.remove('sizes_show');
            });
        this.closest('.product-sizes__inner').querySelectorAll('.sizes')[index].classList.add('sizes_show');
    });
});

new Swiper('.category__slider', {
    direction: 'horizontal',
    spaceBetween: 12,
    navigation: {
        nextEl: '.category__slider-arrow-next',
        prevEl: '.category__slider-arrow-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.2,
        },
        375: {
            slidesPerView: 1.8,
        },
        480: {
            slidesPerView: 2.3,
        },
        640: {
            slidesPerView: 3.5,
        },
        900: {
            slidesPerView: 4.5,
        },
        1200: {
            slidesPerView: 6,
        }
    }
});

new Swiper('.other__shape_slider', {
    direction: 'horizontal',
    spaceBetween: 12,
    navigation: {
        nextEl: '.other__shape_slider-arrow-next',
        prevEl: '.other__shape_slider-arrow-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.2,
        },
        375: {
            slidesPerView: 1.8,
        },
        480: {
            slidesPerView: 2.3,
        },
        640: {
            slidesPerView: 3.5,
        },
        900: {
            slidesPerView: 4.5,
        },
        1200: {
            slidesPerView: 6,
        }
    }
});

new Swiper('.product-images-mobile-slider', {
    slidesPerView: 'auto',
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: false,
    navigation: false,
    scrollbar: false,
});



new Swiper('.product__slider', {
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.product__slider-arrow-next',
        prevEl: '.product__slider-arrow-prev',
    },
});

new Swiper('.product__footer-slider', {
    direction: 'horizontal',
    loop: false,
    navigation: {
        nextEl: '.product__footer-slider-arrow-next',
        prevEl: '.product__footer-slider-arrow-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.3,
        },
        480: {
            slidesPerView: 1.9,
        },
        640: {
            slidesPerView: 3.5,
        },
        900: {
            slidesPerView: 3.3,
        },
    },
});