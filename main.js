// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
  
//     // If we need pagination
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
//   });

//   swiper.on('slideChange', function()  {
//   const aktivSlaydRaqami = swiper.realIndex;
//   if(aktivSlaydRaqami == 1){
//     document.body.style.backgroundColor = ""
//   }
//   else if(aktivSlaydRaqami == 2){
//     document.body.style.backgroundColor = " linear-gradient(123.69deg, rgb(242, 79, 79) -2.932%,rgb(255, 168, 149) 72.139%);"
//   }
//   })




//   function changeBackground(index) {
//     const colors = [
//         'linear-gradient(to right, rgb(227, 236, 205), rgb(229, 245, 8))',
//         'linear-gradient(to right, #cfd9df, rgb(107, 107, 107))',
//         'linear-gradient(to right, #a8e063, #56ab2f)',
//         'linear-gradient(to right, #ff512f, #dd2476)'
//     ];

//     document.body.style.background = colors[index];
// }



// const swiper = new Swiper('.swiper-container', {
//   loop: true,
//   navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//   },
//   on: {
//       slideChangeTransitionStart: function () {
//           let activeSlide = document.querySelector('.swiper-slide-active');
//           let newBg = activeSlide.getAttribute('data-bg');
//           document.body.style.background = newBg;
//       }
//   }
// });



const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  on: {
      slideChangeTransitionStart: function () {
          let activeSlide = document.querySelector(".swiper-slide-active");
          let newBg = activeSlide.getAttribute("data-bg");
          document.body.style.background = `linear-gradient(135deg, ${newBg}, #feb47b)`;
      }
  }
});



const gradients = [
    "linear-gradient(123.69deg, rgb(244, 167, 100) -2.932%, rgb(255, 222, 194) 72.139%)",
    "linear-gradient(123.69deg, rgb(173, 176, 176) -2.932%, rgb(225, 225, 225) 72.139%)",
    "linear-gradient(123.69deg, rgb(48, 163, 87) -2.932%, rgb(117, 227, 154) 72.139%)",
    "linear-gradient(123.69deg, rgb(242, 79, 79) -2.932%, rgb(255, 168, 149) 72.139%)"
];

