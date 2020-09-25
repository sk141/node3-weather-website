console.log('Client side javascript file is loaded')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
//messageOne.textContent = 'From javascript'

const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContenb = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            messageOne.textContent = data.error
        } else {
            console.log(data.location)
            messageOne.textContent =  data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})