window.onload = function() {
  document.body.style.cssText = 'overflow:visible !important';
  const pianoOffer = document.querySelectorAll('#piano_offer');
  const pianoOverlay = document.querySelectorAll('.piano-offer-overlay');
  const tpModal = document.querySelectorAll('.tp-modal');
  const tpModalOverlay = document.querySelectorAll('.tp-backdrop');

  pianoOffer.forEach(offer => {
    offer.remove();
  });

  pianoOverlay.forEach(overlay => {
    overlay.remove();
  });

  tpModal.forEach(modal => {
    modal.remove();
  });

  tpModalOverlay.forEach(modalOverlay => {
    modalOverlay.remove();
  });
};