
let privacy = false;

function validateInputfields(validKey) {
    console.log(validKey);

    let fields = document.getElementsByClassName(validKey);
    let validate;
    removeAllErrorMessages(fields);
    for (let index = 0; index < fields.length; index++) {
        const inputField = fields[index];
        validate = checkFieldInput(inputField, validate);
        if (validate === false) {
            return
        }
    }

    checkPrivacy(validKey);

}

function checkFieldInput(inputField, validate) {
    let errorMessage = document.getElementById(`${inputField.name}`)
    if (inputField.value.trim() === "") {
        inputField.classList.add('error');
        errorMessage.innerHTML = `Bitte ${inputField.name} eingeben`;

        validate = false;
        scrollToDiv(errorMessage);
    } else {
        inputField.classList.remove('error');

        errorMessage.innerHTML = "";
        validate = checkFieldType(inputField, errorMessage, validate);
    }
    return validate
}


function checkFieldType(inputField, errorMessage, validate) {
    const type = inputField.type
    if (type === 'email') {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(inputField.value)) {
            validate = showErrorTextEmailOrPhone(inputField, errorMessage, validate, type);
            return validate

        } else {
            validate = hideErrorTextEmailorPhone(inputField, errorMessage);

        }
    }

    if (type === 'tel') {
        const phonePattern = /^\+?\d[\d\s]*$/;
        if (!phonePattern.test(inputField.value)) {
            validate = showErrorTextEmailOrPhone(inputField, errorMessage, validate, type);
            return validate

        } else {
            validate = hideErrorTextEmailorPhone(inputField, errorMessage);

        }
    }


    validate = true;
    return validate
}

function scrollToDiv(errorMessage) {
    errorMessage.scrollIntoView({
        behavior: 'smooth',
        block: 'center'


    });

}


function showErrorTextEmailOrPhone(inputField, errorMessage, validate, type) {
    inputField.classList.add('error');
    errorMessage.innerHTML = "";
    if (type==='email') {
       errorMessage.innerHTML = `Bitte E-Mail prüfen`; 
    }else{
        errorMessage.innerHTML = `Bitte Telefonnummer prüfen`;
    }
    
    validate = false;
    scrollToDiv(errorMessage);
    return validate

}

function hideErrorTextEmailorPhone(inputField, errorMessage) {
    inputField.classList.remove('error');
    errorMessage.innerHTML = "";
}


function removeAllErrorMessages(field) {
    for (let index = 0; index < field.length; index++) {
        const error = field[index];
        let errorMessage = document.getElementById(`${error.name}`);
        errorMessage.innerHTML = "";
        error.classList.remove('error')
    }
}

function changePrivacy() {


    let privacyerror = document.getElementById('privacy-error');
    privacy = !privacy;
    console.log(privacy);

    changeCheckBox();
    if (privacy === true) {
        privacyerror.innerHTML = "";
    }
}

function checkPrivacy(validKey) {
    let privacyerror = document.getElementById('privacy-error');
    if (privacy === false) {
        privacyerror.innerHTML = 'Bitte stimmen Sie der Datenschutzerklärung zu'
        return

    } else {
        privacyerror.innerHTML = "";
        console.log('Validation war erfolgreich');
        if (validKey === 'offer') {
            startSendingRequest();
        } else {

            sendMessage();
        }
    }

}

function changeCheckBox() {
    let checked = document.getElementById('check');
    if (privacy === false) {
        checked.classList.add('d_none');
    } else {
        checked.classList.remove('d_none');
    }
}
