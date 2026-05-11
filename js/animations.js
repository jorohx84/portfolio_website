function animateTitle() {
    const title = document.getElementById('title');
    const content = document.getElementById('content');

    setTimeout(() => {
        title.classList.add('slide')
    }, 1000);
    setTimeout(() => {
        content.classList.add('show');
    }, 5000);

}