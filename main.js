const imageWrapper = document.querySelector('.image-wrapper')
const imageItems = document.querySelectorAll('.image-wrapper > *')
const imageLength = imageItems.length
const perView = 2
let totalScroll = 0
const delay = 2000

imageWrapper.style.setProperty('--per-view', perView)
for (let i = 0; i < perView; i++) {
    imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
}

let autoScroll = setInterval(scrolling, delay)

function scrolling() {
    totalScroll++
    if (totalScroll == imageLength + 1) {
        clearInterval(autoScroll)
        totalScroll = 1
        imageWrapper.style.transition = '0s'
        imageWrapper.style.left = '0'
        autoScroll = setInterval(scrolling, delay)
    }
    const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24
    imageWrapper.style.left = `-${totalScroll * widthEl}px`
    imageWrapper.style.transition = '.3s'
}

// HOME NAVBAR RESPONSIVE

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}