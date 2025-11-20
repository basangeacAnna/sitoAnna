window.addEventListener('scroll', () => {
    const about = document.querySelector('.about');
    const trigger = window.innerHeight / 1.3;

    const sectionTop = about.getBoundingClientRect().top;

    if (sectionTop < trigger) {
      about.classList.add('visible');
    }
  });