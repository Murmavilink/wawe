import { maskPhone } from "./validate";
import { validate } from "./validate";

export const sendForm = () => {
    const form = document.querySelector('.form');
    const formInputs = document.querySelectorAll('.form__input');

    //Статус при отправке сообщение
    const statusBlock = document.createElement('p');
    statusBlock.classList.add('status-block');
    const statusLoading = 'Загрузка...';
    const statusSuccess = 'Успешно отправлено';
    const statusError = 'Ошибка!';



    const clearStatusBlock = () => {
        setTimeout(() => {
            statusBlock.style = '';
            statusBlock.textContent = '';
        }, 5000);
    };

    const clearInputs = () => {
        formInputs.forEach(input => {
            input.value = '';
        });
    };


    const sendData = (data) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(res => res.json())
        .then(data => {
            statusBlock.style.color = 'green';
            statusBlock.textContent = statusSuccess;
            clearStatusBlock();
        })
        .catch(error => {
            statusBlock.style.color = 'red';
            statusBlock.textContent = statusError;
            clearStatusBlock();
        });
    };
    
    form.addEventListener('input', (e) => {
        validate(formInputs);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if(validate(formInputs)) {
            const formData = new FormData(form);
            const formBody = {};
    
            formData.forEach((val, key) => {
                formBody[key] = val;
            });
    
            form.append(statusBlock);
            statusBlock.textContent = statusLoading;
            sendData(formBody);
            clearInputs();
        }
    });

    maskPhone('.form-phone');
};