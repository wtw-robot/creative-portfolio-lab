document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const box = card.getBoundingClientRect();
    card.style.setProperty('--x', `${event.clientX - box.left}px`);
    card.style.setProperty('--y', `${event.clientY - box.top}px`);
  });
});

