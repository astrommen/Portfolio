// function debounce(func, wait = 5, immediate = true) {
//   let timeout;
//   return function() {
//     let context = this, args = arguments;
//     let later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     let callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };

// let scrollPos = 10;
// const nav = $('.flex-container');

// function checkPosition() {
//   let windowY = window.scrollY;
//   if (windowY < scrollPos) {
//     // Scrolling UP
//     nav.addClass('is-visible');
//     nav.removeClass('is-hidden');
//   } else {
//     // Scrolling DOWN
//     nav.addClass('is-hidden');
//     nav.removeClass('is-visible');
//   }
//   // scrollPos = windowY;
// }

// // window.addEventListener('scroll', checkPosition);
// window.addEventListener('scroll', debounce(checkPosition));

// // Splider Code

// new Splide( '#splide', {
//   perPage: 3,
//   perMove: 3,
//   fixedWidth : 100,
// 	height: 60,
//   cover: true,
// } ).mount();

// document.addEventListener( 'DOMContentLoaded', function () {
//   new Splide( '.splide' ).mount();
// } );

// var elms = $( '.splide' );
// for ( var i = 0, len = elms.length; i < len; i++ ) {
// 	new Splide( elms[ i ] ).mount();
// }

// // document.addEventListener( 'DOMContentLoaded', function () {
// // 	new Splide( '#secondary-slider', {
// // 		fixedWidth : 100,
// // 		height     : 60,
// // 		gap        : 10,
// // 		rewind     : true,
// //     cover      : true,
// //     isNavigation: true,
// //     pagination : false,
// //     focus      : 'center',
// //     breakpoints : {
// //       '600': {
// //         fixedWidth: 66,
// //         height    : 40,
// //       }
// //     }
// // 	}).mount();
// // } );

// // var secondarySlider = new Splide( '#secondary-slider' ).mount();
// // var primarySlider = new Splide( '#primary-slider' );
// // primaryslider.sync( secondarySlider ).mount();