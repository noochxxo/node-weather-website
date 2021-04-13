const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('.messageOne');
const messageTwo = document.querySelector('.messageTwo');

const fetchAddress = (address) => {
    fetch(`/weather?address=${address}`)
        .then((response) => {
            response.json()
            .then((data) => {
                if (data.error) {
                    messageOne.textContent = data.error;
                    messageOne.classList.add('error');
                } else {
                    messageOne.textContent = data.location;
                    messageTwo.textContent = data.forecast;
                }
            });
        });
}

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    messageOne.classList.remove('error');
    messageOne.textContent = 'Searching...';
    fetchAddress(location);
});