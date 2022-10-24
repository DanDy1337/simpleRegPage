const citiesForm = document.getElementById('cities')
const cityError = document.getElementById('error')
const doneMessage = document.getElementById('doneMessage')
const done = document.getElementById('done')
const city = ['Москва', 'Берлин', 'Варшава', 'Киев', 'Париж', 'Саратов']


$("#phone").mask("+7(999)999-99-99");

$("#button").click(() => {
    switch(city.indexOf(citiesForm.value)){
        case -1:
            cityError.className = ''
            break
        default: done.className = 'doneDiv'
    }
})
