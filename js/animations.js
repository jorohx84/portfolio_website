function animateTitle() {
    if (window.innerWidth <= 1024) return
    const title = document.getElementById('title');
    const content = document.getElementById('content');

    setTimeout(() => {
        title.classList.add('slide')
    }, 500);
    setTimeout(() => {
        content.classList.add('show');
    }, 4000);

}