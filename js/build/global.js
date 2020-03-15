/**
 * AB_scroll_navigation
 * version: 1.0.0
 */

function scrollNavigation(header) {

	var siteHeader = document.getElementById(header);

	var homeSectionDistance = document.getElementById('home-content').offsetTop - 25;
	var aboutSectionDistance = document.getElementById('about-content').offsetTop - 25;
	var blogSectionDistance = document.getElementById('blog-content').offsetTop - 25;
	var contactSectionDistance = document.getElementById('contact-content').offsetTop - 25;

	if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
		siteHeader.classList.add('fixed');

		document.getElementById("home").addEventListener('click', function() {
			window.scroll({
				behavior: 'smooth',
				left: 0,
				top: document.getElementById("home-header").offsetTop - 90
			});
		});

		document.getElementById("about").addEventListener('click', function() {
			window.scroll({
				behavior: 'smooth',
				left: 0,
				top: document.getElementById("about-header").offsetTop  - 90
			});
		});

		document.getElementById("blog").addEventListener('click', function() {
			window.scroll({
				behavior: 'smooth',
				left: 0,
				top: document.getElementById("blog-header").offsetTop  - 90
			});
		});

		document.getElementById("contact").addEventListener('click', function() {
			window.scroll({
				behavior: 'smooth',
				left: 0,
				top: document.getElementById("contact-header").offsetTop  - 90
			});
		});

	} else {
		siteHeader.classList.remove('fixed');

		document.getElementById("home").addEventListener('click', function() {
			window.scroll({
				behavior: 'smooth',
				left: 0,
				top: document.getElementById("home-header").offsetTop - 160
			});
		});

		document.getElementById("about").addEventListener('click', function() {
			window.scroll({
				behavior: 'smooth',
				left: 0,
				top: document.getElementById("about-header").offsetTop  - 160
			});
		});

		document.getElementById("blog").addEventListener('click', function() {
			window.scroll({
				behavior: 'smooth',
				left: 0,
				top: document.getElementById("blog-header").offsetTop  - 160
			});
		});

		document.getElementById("contact").addEventListener('click', function() {
			window.scroll({
				behavior: 'smooth',
				left: 0,
				top: document.getElementById("contact-header").offsetTop  - 160
			});
		});

		homeSectionDistance = document.getElementById('home-content').offsetTop - 90;
		aboutSectionDistance = document.getElementById('about-content').offsetTop - 90;
		blogSectionDistance = document.getElementById('blog-content').offsetTop - 90;
		contactSectionDistance = document.getElementById('contact-content').offsetTop - 90;
	}

	var userScrollDistance = window.pageYOffset;
	

	if (userScrollDistance > homeSectionDistance && userScrollDistance < aboutSectionDistance) {
		document.getElementById('home').classList.add('active');
		document.getElementById('about').classList.remove('active');
		document.getElementById('blog').classList.remove('active');
		document.getElementById('contact').classList.remove('active');
	} else if (userScrollDistance > aboutSectionDistance && userScrollDistance < blogSectionDistance) {
		document.getElementById('home').classList.remove('active');
		document.getElementById('about').classList.add('active');
		document.getElementById('blog').classList.remove('active');
		document.getElementById('contact').classList.remove('active');
	} else if (userScrollDistance > blogSectionDistance && userScrollDistance < contactSectionDistance) {
		document.getElementById('home').classList.remove('active');
		document.getElementById('about').classList.remove('active');
		document.getElementById('blog').classList.add('active');
		document.getElementById('contact').classList.remove('active');
	} else if (userScrollDistance > contactSectionDistance) {
		document.getElementById('home').classList.remove('active');
		document.getElementById('about').classList.remove('active');
		document.getElementById('blog').classList.remove('active');
		document.getElementById('contact').classList.add('active');
	}

	function resetDistance () {

		if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
			homeSectionDistance = document.getElementById('home-content').offsetTop - 25;
			aboutSectionDistance = document.getElementById('about-content').offsetTop - 25;
			blogSectionDistance = document.getElementById('blog-content').offsetTop - 25;
			contactSectionDistance = document.getElementById('contact-content').offsetTop - 25;
		} else {
			homeSectionDistance = document.getElementById('home-content').offsetTop - 90;
			aboutSectionDistance = document.getElementById('about-content').offsetTop - 90;
			blogSectionDistance = document.getElementById('blog-content').offsetTop - 90;
			contactSectionDistance = document.getElementById('contact-content').offsetTop - 90;
		}
	}

	window.onresize = resetDistance;

	window.onscroll = function () {

		scrollDistance = window.pageYOffset;
		
		if (scrollDistance > 25) {
			siteHeader.classList.add('fixed');
		} else {
			siteHeader.classList.remove('fixed');
		}

		userScrollDistance = window.pageYOffset + 90;

		if (userScrollDistance > homeSectionDistance && userScrollDistance < aboutSectionDistance) {
			document.getElementById('home').classList.add('active');
			document.getElementById('about').classList.remove('active');
			document.getElementById('blog').classList.remove('active');
			document.getElementById('contact').classList.remove('active');
		} else if (userScrollDistance > aboutSectionDistance && userScrollDistance < blogSectionDistance) {
			document.getElementById('home').classList.remove('active');
			document.getElementById('about').classList.add('active');
			document.getElementById('blog').classList.remove('active');
			document.getElementById('contact').classList.remove('active');
		} else if (userScrollDistance > blogSectionDistance && userScrollDistance < contactSectionDistance) {
			document.getElementById('home').classList.remove('active');
			document.getElementById('about').classList.remove('active');
			document.getElementById('blog').classList.add('active');
			document.getElementById('contact').classList.remove('active');
		} else if (userScrollDistance > contactSectionDistance) {
			document.getElementById('home').classList.remove('active');
			document.getElementById('about').classList.remove('active');
			document.getElementById('blog').classList.remove('active');
			document.getElementById('contact').classList.add('active');
		}

		if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
			siteHeader.classList.add('fixed');

			document.getElementById("home").addEventListener('click', function() {
				window.scroll({
					behavior: 'smooth',
					left: 0,
					top: document.getElementById("home-header").offsetTop - 90
				});
			});

			document.getElementById("about").addEventListener('click', function() {
				window.scroll({
					behavior: 'smooth',
					left: 0,
					top: document.getElementById("about-header").offsetTop  - 90
				});
			});

			document.getElementById("blog").addEventListener('click', function() {
				window.scroll({
					behavior: 'smooth',
					left: 0,
					top: document.getElementById("blog-header").offsetTop  - 90
				});
			});

			document.getElementById("contact").addEventListener('click', function() {
				window.scroll({
					behavior: 'smooth',
					left: 0,
					top: document.getElementById("contact-header").offsetTop  - 90
				});
			});

		} else {
			siteHeader.classList.remove('fixed');

			document.getElementById("home").addEventListener('click', function() {
				window.scroll({
					behavior: 'smooth',
					left: 0,
					top: document.getElementById("home-header").offsetTop - 160
				});
			});

			document.getElementById("about").addEventListener('click', function() {
				window.scroll({
					behavior: 'smooth',
					left: 0,
					top: document.getElementById("about-header").offsetTop  - 160
				});
			});

			document.getElementById("blog").addEventListener('click', function() {
				window.scroll({
					behavior: 'smooth',
					left: 0,
					top: document.getElementById("blog-header").offsetTop  - 160
				});
			});

			document.getElementById("contact").addEventListener('click', function() {
				window.scroll({
					behavior: 'smooth',
					left: 0,
					top: document.getElementById("contact-header").offsetTop  - 160
				});
			});
		}
	};
}