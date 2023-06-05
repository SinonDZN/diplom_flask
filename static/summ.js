const cart = document.querySelector('[total]');
here = localStorage.getItem('total')
good = localStorage.getItem('div')
god = localStorage.getItem('name')
document.getElementById('totals').value=here + '₽'
document.getElementById('goods').value=god

cart.insertAdjacentHTML('beforeend', here + '₽')

