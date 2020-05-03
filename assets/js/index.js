function debounce(func, wait = 5, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

let scrollPos = 0;
const nav = $('.flex-container');

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    nav.addClass('is-visible');
    nav.removeClass('is-hidden');
  } else {
    // Scrolling DOWN
    nav.addClass('is-hidden');
    nav.removeClass('is-visible');
  }
  scrollPos = windowY;
}

// window.addEventListener('scroll', checkPosition);
window.addEventListener('scroll', debounce(checkPosition));
