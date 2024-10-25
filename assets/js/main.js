/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		// Default language setup (Chinese)
		switchLanguage('zh'); // 預設為中文

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Language switcher function
	function switchLanguage(lang) {
		document.querySelectorAll('[data-lang-zh], [data-lang-en]').forEach(function(el) {
			if (lang === 'zh') {
				el.textContent = el.getAttribute('data-lang-zh');
			} else if (lang === 'en') {
				el.textContent = el.getAttribute('data-lang-en');
			}
		});
	}

	// Event listeners for language buttons
	document.getElementById('lang-zh').addEventListener('click', function() {
		switchLanguage('zh');
	});

	document.getElementById('lang-en').addEventListener('click', function() {
		switchLanguage('en');
	});

})(jQuery);
