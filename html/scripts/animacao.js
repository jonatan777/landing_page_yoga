gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
	'#title',
	{ xPercent: 30 },
	{ duration: 3, xPercent: 0, ease: 'bounce' }
);


//gsap.to("img", { duration: 3, y: 110, paused: false})


      var tl2 = gsap.timeline({repeat: -1, repeatDelay: 0})
	      tl2.to("img", { duration: 5, y: -30})
          tl2.to("img", { duration: 4, y: 10})
          tl2.restart();
              


/**
	gsap.timeline()
	.from('img', {
		xPercent: 50,
		duration: 1,
		scrollTrigger: {
			trigger: 'img',
			start: 'top center',
			end: 'bottom center',
			scrub: true,
		},
	})
	.fromTo(
		'.interactive-div',
		{ yPercent: -50, scale: 0.5 },
		{
			opacity: 1,
			yPercent: 0,
			scale: 1,
			scrollTrigger: {
				trigger: '.interactive-div',
				start: 'top center',
				end: 'bottom center',
				scrub: true,
			},
		}
	);


   

gsap.utils.toArray('.layer').forEach((layer, i) => {
	ScrollTrigger.create({
		trigger: layer,
		start: 'top top',
		pin: true,
		pinSpacing: false,
	});
});

// Animation for article images

gsap.to('.box', 1, {
	scale: 0.3,
	y: 60,
	yoyo: true,
	repeat: -1,
	ease: 'power1.inOut',
	delay: 2,
	stagger: {
		amount: 1.5,
		grid: 'auto',
		from: 'center',
	},
});

 */ 