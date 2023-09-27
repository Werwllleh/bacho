document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('#searchBtn');
    const spoilerSearch = document.querySelector('.search__spoiler');
    const spoilerSearchInputs = document.querySelectorAll('.search__input');
    const spoilerSearchClean = document.querySelectorAll('.clearSearchInput');
    const spoilerSearchContent = document.querySelector('.search__row');
    const body = document.querySelector('body');
    const header = document.querySelector('header');

    const burger = document.querySelector('.header-burger');
    const mobileMenu = document.querySelector('.menumobile');

    const catalogFilters = document.querySelectorAll('.filter__checkbox');

    const switchSizes = document.querySelectorAll('.size__switch-btn input');
    const switchFilterBtns = document.querySelectorAll('.product__footer-filter_btn');

    const catalogCards = document.querySelectorAll('.row__card');

    window.addEventListener('scroll', function () {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > 65) {
            header.classList.add('header-fixed');
        } else {
            header.classList.remove('header-fixed');
        }
    });

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

    catalogFilters.forEach((filter) => {
        filter.addEventListener('click', (e) => {
            if (e.target.id === 'size') {
                document.querySelector('input#category').checked = false;
                document.querySelector('input#sort').checked = false;
                document.querySelector('[data-filter="sort"]').classList.remove('filer__data-show');
                document.querySelector('[data-filter="category"]').classList.remove('filer__data-show');
                document.querySelector('[data-filter="size"]').classList.toggle('filer__data-show');
            } else if (e.target.id === 'category') {
                document.querySelector('input#size').checked = false;
                document.querySelector('input#sort').checked = false;
                document.querySelector('[data-filter="size"]').classList.remove('filer__data-show');
                document.querySelector('[data-filter="sort"]').classList.remove('filer__data-show');
                document.querySelector('[data-filter="category"]').classList.toggle('filer__data-show');
            } else {
                document.querySelector('input#size').checked = false;
                document.querySelector('input#category').checked = false;
                document.querySelector('[data-filter="category"]').classList.remove('filer__data-show');
                document.querySelector('[data-filter="size"]').classList.remove('filer__data-show');
                document.querySelector('[data-filter="sort"]').classList.toggle('filer__data-show');
            }

            /*document.addEventListener( 'click', (e) => {
                const withinBoundaries = e.composedPath().includes(filter);

                if ( ! withinBoundaries ) {
                    document.querySelector('input#size').checked = false;
                    document.querySelector('input#category').checked = false;
                    document.querySelector('input#sort').checked = false;
                    document.querySelector('[data-filter="size"]').classList.remove('filer__data-show');
                    document.querySelector('[data-filter="sort"]').classList.remove('filer__data-show');
                    document.querySelector('[data-filter="category"]').classList.remove('filer__data-show');

                    // filter.style.display = 'none'; // скрываем элемент т к клик был за его пределами
                }
            })*/
        });
    });

    const sortingRadioButtons = document.querySelectorAll('input[name=sort]');
    const labelSort = document.querySelector('label[for=sort]');

    sortingRadioButtons.forEach((sort) => {
        sort.addEventListener('click', () => {
            labelSort.innerHTML = sort.value;
        });
    });

    searchBtn.addEventListener('click', () => {
        spoilerSearch.classList.toggle('show__spoiler');
        body.classList.toggle('modal-open');
        spoilerSearchInputs.forEach((input) => {
            input.focus();
        });
    });

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

        console.log()

        this.closest('.product-sizes__inner')
            .querySelectorAll('.sizes')
            .forEach((item) => {
                item.classList.remove('sizes_show');
            });
        this.closest('.product-sizes__inner').querySelectorAll('.sizes')[index].classList.add('sizes_show');
    });
});
