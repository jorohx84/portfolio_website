function sendMessage(validKey) {
    const formData = new FormData();

    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('message', document.getElementById('message').value);

    fetch('send.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then(result => {
            if (result === 'OK') {
                showMessageConfirm('confirm');

            } else {
                showMessageConfirm('error');
            }
        })
        .catch(() => {
            showMessageConfirm('error');
        });

    resetForm();
}

function showMessageConfirm(message) {
    console.log(message);
    const confirm = document.getElementById(`${message}`);
    // const wrapper = document.getElementById('confirmWrapper');
    console.log(confirm);
    confirm.classList.add('showConfirm');
    // wrapper.classList.add('zindex');
    setTimeout(() => {
        confirm.classList.remove('showConfirm');
        // wrapper.classList.remove('zindex');
    }, 3000);


}


function resetForm() {
    const fields = document.getElementsByClassName('required');
    for (let index = 0; index < fields.length; index++) {
        const field = fields[index];
        field.value = '';
    }
    changePrivacy();

    privacy = false;

}