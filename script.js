//your JS code here. If required.
const openBtn = document.querySelector('#openModal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');

// Open modal
openBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

// Close modal on close button
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Close modal when clicking outside modal-content
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
});

// (Optional but recommended) Close modal with ESC key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.classList.remove('show');
  }
});
