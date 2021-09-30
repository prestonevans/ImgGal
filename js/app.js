document.querySelectorAll('.img').forEach(img => {
    img.addEventListener('click', () => {
        removeActive();
        img.classList.toggle('active');
    })
})
function removeActive() {
    document.querySelectorAll('.img').forEach(img =>{
        img.classList.remove('active');
    })
}