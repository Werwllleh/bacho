document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('#searchBtn');
    const spoilerSearch = document.querySelector('.search__spoiler');
    const spoilerSearchInputs = document.querySelectorAll('.search__input');
    const spoilerSearchClean = document.querySelectorAll('.clearSearchInput');
    const spoilerSearchContent = document.querySelector('.search__row');
    const body = document.querySelector('body');

    const burger = document.querySelector('.header-burger');
    const mobileMenu = document.querySelector('.menumobile');

    const catalogFilters = document.querySelectorAll('.filter__checkbox');

    const switchSizes = document.querySelectorAll('.size__switch-btn');
    const switchFilterBtns = document.querySelectorAll('.product__footer-filter_btn');

    const catalogCards = document.querySelectorAll('.row__card');


    console.log(window.innerWidth)

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
                document.querySelector('[data-filter="size"]').classList.toggle('filer__data-show');
            } else if (e.target.id === 'category') {
                document.querySelector('[data-filter="category"]').classList.toggle('filer__data-show');
            } else {
                document.querySelector('[data-filter="sort"]').classList.toggle('filer__data-show');
            }
        });
    });

    searchBtn.addEventListener('click', () => {
        spoilerSearch.classList.toggle('show__spoiler');
        body.classList.toggle('modal-open');
    });

    spoilerSearchClean.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            spoilerSearchInputs.forEach((input) => {
                if (input.value !== '') input.value = '';
            });
        });
    });

    switchSizes.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            btn.classList.toggle('switch-btn__active');
        });
    });

    switchFilterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            btn.classList.toggle('filter-btn__active');
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
    })

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
