// const slideList = [{
//         img: "https://placeimg.com/300/200/arch",
//         h2: "Promocje"
//     },
//     {
//         img: "https://placeimg.com/300/200/people",
//         h2: "Wszystko dla dzieci"
//     },
//     {
//         img: "https://placeimg.com/300/200/tech",
//         h2: "Dorośli na zamkach"
//     }
// ];

// const image = document.querySelector("img.slider");
// const h2 = document.querySelector(".banner h2");
// const time = 3000;
// let active = 0;

// const changeSlide = () => {
//     active++;
//     if (active === slideList.length) {
//         active = 0;
//     }
//     image.src = slideList[active].img;

// };

// let indexInterval = setInterval(changeSlide, time);

// const keyChangeSlide = e => {
//     console.log("działa");
//     if (e.keyCode == 37 || e.keyCode == 39) {
//         clearInterval(indexInterval);

//         e.keyCode == 37 ? active-- : active++;

//         if (active === slideList.length) {
//             active = 0;
//         } else if (active < 0) {
//             active = slideList.length - 1;
//         }
//         image.src = slideList[active].img;
//         h2.textContent = slideList[active].h2;
//         indexInterval = setInterval(changeSlide, time);
//     }
// };

// window.addEventListener("keydown", keyChangeSlide);