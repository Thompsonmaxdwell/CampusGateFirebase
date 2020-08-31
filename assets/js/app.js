let slide_container = document.querySelector('.slide_container');
let slides = slide_container.children;
let slide_width = slides[0].getBoundingClientRect().width;
let next_slide = document.querySelector('.next_slide');
let prev_slide = document.querySelector('.prev_slide');
let slide_counter = 1;

slide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';

//   Next  Slide Event tigger
const next_Slide_event = (e) => {
	if (slide_counter >= slides.length - 1) return;
	slide_container.style.transition = 'transform 0.7s ease-in-out';
	slide_counter++;
	slide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';
};
//   previous Slide Event tigger
const prev_Slide_Event = (e) => {
	if (slide_counter <= 0) return;
	slide_container.style.transition = 'transform 0.7s ease-in-out';
	slide_counter--;
	slide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';
};

//     tigger when transition finish
const slide_container_Event = (e) => {
	if (slides[slide_counter].id === 'last_slide') {
		slide_container.style.transition = 'none';
		console.log(slide_counter);
		slide_counter = slides.length - 2;
		slide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';
	}

	if (slides[slide_counter].id === 'first_slide') {
        slide_container.style.transition = 'none';
		slide_counter = slides.length - slide_counter;
		slide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';
	}
};

next_slide.addEventListener('click', next_Slide_event);
prev_slide.addEventListener('click', prev_Slide_Event);
slide_container.addEventListener('transitionend', slide_container_Event);
setInterval(next_Slide_event, 4000);
