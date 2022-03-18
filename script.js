const tabButtons = [...document.querySelectorAll('.tab-button')];
const tabContents = [...document.querySelectorAll('.tab-content')];

// tab switcher
tabButtons.forEach(btn => btn.addEventListener('click', (e)=> {
  const {tabBtn} = e.target.dataset;
  const tabContent = document.getElementById(tabBtn);
  tabContents.forEach(cnt => cnt.classList.remove('active'));
  tabContent.classList.add('active');
}));


// modal
const modal = document.getElementById("modal");

const setModalContent = (e)=> {
  const {src, alt} = e.srcElement;
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = src;
  // captionText.innerHTML = alt;
};
const warFaceImages = [...document.querySelectorAll('.warface')];
warFaceImages.forEach(img => img.addEventListener('click', e=> setModalContent(e)));

const span = document.getElementsByClassName("modal")[0];

span.onclick = ()=> { 
  modal.style.display = "none";
};
