document.addEventListener('DOMContentLoaded', () => {
  const videoModal = document.getElementById('video-modal');
  const closeModalBtn = document.getElementById('video-modal-close');
  const videoIframe = document.getElementById('video-modal-iframe');
  const videoThumbnails = document.querySelectorAll('.aspect-video-youtube');

  // Abrir modal ao clicar na miniatura
  videoThumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const videoId = thumb.getAttribute('data-video-id');
      if (videoId && videoIframe) {
        videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        videoModal.style.display = 'flex';
      }
    });
  });

  // Função para fechar o modal
  const closeModal = () => {
    if (videoModal && videoIframe) {
      videoModal.style.display = 'none';
      videoIframe.src = '';
    }
  };

  // Fechar modal ao clicar no botão de fechar ou no overlay
  closeModalBtn.addEventListener('click', closeModal);
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      closeModal();
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.personal-project-card');
  cards.forEach(card => {
    const images = JSON.parse(card.getAttribute('data-images'));
    const wrappers = card.querySelectorAll('.personal-project-image');
    let current = 0;
    let next = 1;
    // Inicializa as imagens
    wrappers[0].src = images[0];
    wrappers[0].style.opacity = 1;
    wrappers[0].style.zIndex = 2;
    wrappers[1].src = images[1 % images.length];
    wrappers[1].style.opacity = 0;
    wrappers[1].style.zIndex = 1;
    let idx = 1;
    setInterval(() => {
      // Prepara próxima imagem
      wrappers[next].src = images[idx % images.length];
      wrappers[next].style.opacity = 0;
      wrappers[next].style.zIndex = 1;
      wrappers[current].style.zIndex = 2;
      wrappers[next].style.transition = 'none';
      wrappers[next].offsetHeight; // force reflow
      wrappers[next].style.transition = 'opacity 1.2s ease';
      wrappers[next].style.opacity = 1;
      setTimeout(() => {
        wrappers[current].style.opacity = 0;
        // swap
        let temp = current;
        current = next;
        next = temp;
      }, 20);
      idx = (idx + 1) % images.length;
    }, 3500);
  });
}); 