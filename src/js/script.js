const searchBtn = document.querySelector('#searchBtn');
const spoilerSearch = document.querySelector('.search__spoiler');
const spoilerSearchInput = document.querySelector('.search__input');
const spoilerSearchClean = document.querySelector('.search__input-clean');
const spoilerSearchContent = document.querySelector('.search__row');
const body = document.querySelector('body')

searchBtn.addEventListener('click', () => {
    spoilerSearch.classList.toggle('show__spoiler');
    body.classList.toggle('modal-open')
})

spoilerSearchClean. addEventListener('click', () => {
    spoilerSearchInput.value = '';
})

console.log(spoilerSearchInput.value)

spoilerSearchInput.addEventListener('input', (e) => {
    console.log(e.type)
} );

// if (spoilerSearchInput.value === '') {
//     spoilerSearchContent.style.display = 'none';
// }

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