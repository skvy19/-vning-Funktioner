const input = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    input.value = input.value.toUpperCase()
})