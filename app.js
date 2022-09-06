const dateEl = document.querySelector('#date');
const monthEl = document.querySelector('#month');
const yearEl = document.querySelector('#year');
const getDay = document.querySelector('#getDay');
const result = document.querySelector('#result');


getDay.addEventListener('click', () => {
  let dayFinder = new Date(`${dateEl.value} ${monthEl.value} ${yearEl.value}`)
  let day = dayFinder.toDateString()
   day = day.slice(0, 3)
  result.textContent = day

})