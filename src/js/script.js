document.addEventListener("DOMContentLoaded", () => {

    const searchBtn = document.querySelector('#searchBtn');
    const spoilerSearch = document.querySelector('.search__spoiler');
    const spoilerSearchInputs = document.querySelectorAll('.search__input');
    const spoilerSearchClean = document.querySelectorAll('.clearSearchInput');
    const spoilerSearchContent = document.querySelector('.search__row');
    const body = document.querySelector('body');

    const burger = document.querySelector('.header-burger');
    const mobileMenu = document.querySelector('.menumobile');

    const catalogFilters = document.querySelectorAll('.filter__field');

    catalogFilters.forEach((filter) => {
        filter.addEventListener('click', (e) => {
            console.log(e.target)
        })
    })


    /*if (window.innerWidth >= 900) {

    }*/


    searchBtn.addEventListener('click', () => {
        spoilerSearch.classList.toggle('show__spoiler');
        body.classList.toggle('modal-open')
    })

    spoilerSearchClean.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            spoilerSearchInputs.forEach((input) => {
                if (input.value !== '') input.value = '';
            });
        })
    })

    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('show');
        mobileMenu.classList.toggle('visible');
        document.querySelector('.menumobile-wrap').classList.toggle('visible');
        body.classList.toggle('modal-open')
    }


    burger.addEventListener("click", () => {
        toggleMobileMenu();
    });

    const setActive = (el, active) => {
        const formField = el.parentNode.parentNode
        if (active) {
            formField.classList.add('form-field--is-active')
        } else {
            formField.classList.remove('form-field--is-active')
            el.value === '' ?
                formField.classList.remove('form-field--is-filled') :
                formField.classList.add('form-field--is-filled')
        }
    }

    [].forEach.call(
        document.querySelectorAll('.form-field__input, .form-field__textarea'),
        (el) => {
            el.onblur = () => {
                setActive(el, false)
            }
            el.onfocus = () => {
                setActive(el, true)
            }
        }
    )



})
