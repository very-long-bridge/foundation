const tabButtons = [...document.querySelectorAll('.tab-button')];
const tabContents = [...document.querySelectorAll('.tab-content')];

// tab switcher
tabButtons.forEach(btn => btn.addEventListener('click', (e)=> {
  const {tabBtn} = e.target.dataset;
  const tabContent = document.getElementById(tabBtn);
  tabContents.forEach(cnt => cnt.classList.remove('active'));
  tabContent.classList.add('active');
}));


const stripe = Stripe('pk_test_51KZ3XgJJZxZxTvpztPCpOsycxZbY95RHlHdvKC7vDZtzxFjoQwS31U4lBv58ZKsVtY0OpNsCYIUYHEiAVNzVRoqf00ku3ntyYg');

console.log(stripe);