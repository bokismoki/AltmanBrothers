import Vue from 'vue'

const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('enter')
                animatedScrollObserver.unobserve(entry.target)
            }
        })
    }
)

const bindingObject = {
    bind(el) {
        el.classList.add('before-enter')
        animatedScrollObserver.observe(el)
    }
}

Vue.directive('scrollanimation', bindingObject)