export default function applyAnimation(selector) {
    const $options = document.querySelectorAll(selector)
    $options.forEach(option => {
        const cb = () => {
            option.classList.add('mouse-leave')
        }
        let timeout
        option.addEventListener('mouseenter', () => {
            option.classList.remove('mouse-leave')
            option.removeEventListener('mouseleave', cb)
            timeout = setTimeout(() => {
                option.addEventListener('mouseleave', cb)
            }, 150)
        })
        option.addEventListener('mouseleave', () => {
            clearTimeout(timeout)
        })

    });
}
applyAnimation(".options-list li")