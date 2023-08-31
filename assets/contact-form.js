const scriptURL = 'https://script.google.com/macros/s/AKfycbzasHhSmx4V--I8IcYjGxtmIEj8FXD2uBOoOmuVmzJ-sgHEydQymnRnqUuvieGsRCZc/exec'

const form = document.forms['contact-me']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your message is sent successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})