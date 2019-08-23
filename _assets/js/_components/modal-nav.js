$('.js-modal-nav').on('click', function(event) {
  event.preventDefault();

  var navDirection          = $(this).data('nav-direction');
  var currentModalClass     = '.modal';
  var modalCategory         = 'modal-group';
  var currentModal          = $(currentModalClass + '.is-open');
  var currentModalCategory  = currentModal.data(modalCategory);
  var nextModal             = currentModal.next(currentModalClass);
  var nextModalCategory     = nextModal.data(modalCategory);
  var previousModal         = currentModal.prev(currentModalClass);
  var previousModalCategory = previousModal.data(modalCategory);
  var firstModal            = $(currentModalClass + '[data-' + modalCategory + '="' + currentModalCategory + '"]:first');
  var lastModal             = $(currentModalClass + '[data-' + modalCategory + '="' + currentModalCategory + '"]:last');

  function launchNextModal(){
    // hides the current modal
    currentModal.addClass('is-closed').removeClass('is-open');
    // // reset scroll position
    // $('.modal__bg').scrollTop(0);
    if (nextModal && currentModalCategory === nextModalCategory ) {
      // shows next in category
      nextModal.addClass('is-open').removeClass('is-closed');
    } else {
      // isn't another modal in category so goes back to beginning
      firstModal.addClass('is-open').removeClass('is-closed');
    }
  }

  function launchPreviousModal(){
    // hides the current modal
    currentModal.addClass('is-closed').removeClass('is-open');
    // // reset scroll position
    // $('.modal__bg').scrollTop(0);
    if (previousModal && currentModalCategory === previousModalCategory ) {
      // shows next in category
      previousModal.addClass('is-open').removeClass('is-closed');
    } else {
      // isn't another modal in category so goes back to beginning
      lastModal.addClass('is-open').removeClass('is-closed');
    }
  }

  // checks which button has been clicked and runs function
  switch (navDirection) {
  case 'next':
    launchNextModal();
    break;
  case 'previous':
    launchPreviousModal();
    break;
  }

});