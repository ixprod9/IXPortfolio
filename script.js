document.addEventListener('DOMContentLoaded', () => {
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');


if (modal && modalBody && closeBtn) {
document.querySelectorAll('.project-card').forEach(card => {
card.addEventListener('click', () => {
const title = card.querySelector('h3').textContent;
const imgSrc = card.querySelector('img').src;
modalBody.innerHTML = `<h2>${title}</h2><img src="${imgSrc}" style="width:100%;border-radius:10px;">`;
modal.classList.remove('hidden');
});
});


closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', e => {
if (e.target === modal) modal.classList.add('hidden');
});
}
});