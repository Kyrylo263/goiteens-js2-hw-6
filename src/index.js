document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const dataForm = {
            name: document.querySelector('.name').value,
            email: document.querySelector('.email').value,
            message: document.querySelector('.message').value
        };
        console.log(dataForm)
        alert('Ваше повідомлення було надіслане!');
    });
});