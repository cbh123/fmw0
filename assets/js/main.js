
// Literally just changes background color
function changeColor(selector, color) {
    $(selector).css("background-color", color);
}

// Change border for email / user input
function changeBorder(input,correct){
    if (correct) {
        $(input).css("border-style","solid");
        $(input).css("border-color","lightgreen");
    } else {
        $(input).css("border-style","solid");
        $(input).css("border-color","red");
    }
}

// Validate user input
function errorInput(input,email){
    if (email) {
        return(/\S+@\S+\.\S+/.test(input)); // validates email
    } else {
        return(/^[A-Za-z\s]+$/.test(input)); // validates name
    }
}

// Validate email input
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Show Next2
function showNext2(){
    $("#next2").show();
}

const purple = "#5461C4";
const blue1 = "#547BC4";
const blue2 = "#87A2D5";
const orange = "rgb(218, 105, 59)";
const cyany = "rgb(125, 189, 220)";

// STAGE 1: INTRODUCTION
function stage1(){
    changeColor("body", purple);
	$(".stage1").fadeIn(300);
	$(".stage2").hide();
  $(".stage3").hide();
  $(".stage4").hide();
  $(".stage5").hide();
  $(".stage6").hide();
  $(".stage7").hide();
  $(".stage8").hide();
  $(".stage9").hide();
  $(".stage10").hide();
  $(".stage11").hide();
}


// STAGE 2: WHAT'S YOUR NAME
function stage2(){
  changeColor("body", blue1);
  $(".stage1").hide();
  $(".stage3").hide();
  $(".stage2").fadeIn(300);
}

// STAGE 3: INFO
function stage3(name){
  changeColor("body", purple);
  $(".stage2").hide();
  $(".stage4").hide();
  $(".stage3").fadeIn(300);
  $("#greetName").html("Hey there, " + name.split(" ")[0] + "!");
}

// STAGE 4: ENTER EMAIL
function stage4(){
  changeColor("body", blue1);
  $(".stage3").hide();
  $(".stage5").hide();
  $(".stage4").fadeIn(300);
}

// STAGE 5: HOW OLD ARE YOU
function stage5(){
  changeColor("body", blue1);
  $(".stage4").hide();
  $(".stage6").hide();
  $(".stage5").fadeIn(300);
}

// STAGE 6: GENDER
function stage6(){
  changeColor("body", blue1);
  $(".stage5").hide();
  $(".stage7").hide();
  $(".stage6").fadeIn(300);
}
// STAGE 7: RESTRICTIONS
function stage7(){
  changeColor("body", purple);
  $(".stage6").hide();
  $(".stage8").hide();
  $(".stage7").fadeIn(300);
}

// STAGE 8: OTHER RESTRICTIONS
function stage8(){
  changeColor("body", purple);
  $(".stage7").hide();
  $(".stage9").hide();
  $(".stage8").fadeIn(300);
}

// STAGE 9: FUN FACT
function stage9(){
  changeColor("body",orange);
  console.log($("#restrictionsList"));
  $(".stage8").hide();
  $(".stage10").hide();
  $(".stage9").fadeIn(300);
}

// STAGE 10: ENCOURAGED FOODS
function stage10(){
  changeColor("body",cyany);
  $(".stage9").hide();
  $(".stage11").hide();
  $(".stage10").fadeIn(300);
}

// STAGE 11: PRESENT CARD
function stage11(){
  changeColor("body","white");
  $("#logo").css("color","black");
  $(".stage10").hide();
  $(".stage12").hide();
  $(".stage11").fadeIn(300);
}


// changeColor("body","#65CC71");









(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Browser fixes.

		// IE: Flexbox min-height bug.
			if (browser.name == 'ie')
				(function() {

					var flexboxFixTimeoutId;

					$window.on('resize.flexbox-fix', function() {

						var $x = $('.fullscreen');

						clearTimeout(flexboxFixTimeoutId);

						flexboxFixTimeoutId = setTimeout(function() {

							if ($x.prop('scrollHeight') > $window.height())
								$x.css('height', 'auto');
							else
								$x.css('height', '100vh');

						}, 250);

					}).triggerHandler('resize.flexbox-fix');

				})();

		// Object fit workaround.
			if (!browser.canUse('object-fit'))
				(function() {

					$('.banner .image, .spotlight .image').each(function() {

						var $this = $(this),
							$img = $this.children('img'),
							positionClass = $this.parent().attr('class').match(/image-position-([a-z]+)/);

						// Set image.
							$this
								.css('background-image', 'url("' + $img.attr('src') + '")')
								.css('background-repeat', 'no-repeat')
								.css('background-size', 'cover');

						// Set position.
							switch (positionClass.length > 1 ? positionClass[1] : '') {

								case 'left':
									$this.css('background-position', 'left');
									break;

								case 'right':
									$this.css('background-position', 'right');
									break;

								default:
								case 'center':
									$this.css('background-position', 'center');
									break;

							}

						// Hide original.
							$img.css('opacity', '0');

					});

				})();

	// Smooth scroll.
		$('.smooth-scroll').scrolly();
		$('.smooth-scroll-middle').scrolly({ anchor: 'middle' });

	// Wrapper.
		$wrapper.children()
			.scrollex({
				top:		'30vh',
				bottom:		'30vh',
				initialize:	function() {
					$(this).addClass('is-inactive');
				},
				terminate:	function() {
					$(this).removeClass('is-inactive');
				},
				enter:		function() {
					$(this).removeClass('is-inactive');
				},
				leave:		function() {

					var $this = $(this);

					if ($this.hasClass('onscroll-bidirectional'))
						$this.addClass('is-inactive');

				}
			});

	// Items.
		$('.items')
			.scrollex({
				top:		'30vh',
				bottom:		'30vh',
				delay:		50,
				initialize:	function() {
					$(this).addClass('is-inactive');
				},
				terminate:	function() {
					$(this).removeClass('is-inactive');
				},
				enter:		function() {
					$(this).removeClass('is-inactive');
				},
				leave:		function() {

					var $this = $(this);

					if ($this.hasClass('onscroll-bidirectional'))
						$this.addClass('is-inactive');

				}
			})
			.children()
				.wrapInner('<div class="inner"></div>');

	// Gallery.
		$('.gallery')
			.wrapInner('<div class="inner"></div>')
			.prepend(browser.mobile ? '' : '<div class="forward"></div><div class="backward"></div>')
			.scrollex({
				top:		'30vh',
				bottom:		'30vh',
				delay:		50,
				initialize:	function() {
					$(this).addClass('is-inactive');
				},
				terminate:	function() {
					$(this).removeClass('is-inactive');
				},
				enter:		function() {
					$(this).removeClass('is-inactive');
				},
				leave:		function() {

					var $this = $(this);

					if ($this.hasClass('onscroll-bidirectional'))
						$this.addClass('is-inactive');

				}
			})
			.children('.inner')
				//.css('overflow', 'hidden')
				.css('overflow-y', browser.mobile ? 'visible' : 'hidden')
				.css('overflow-x', browser.mobile ? 'scroll' : 'hidden')
				.scrollLeft(0);

		// Style #1.
			// ...

		// Style #2.
			$('.gallery')
				.on('wheel', '.inner', function(event) {

					var	$this = $(this),
						delta = (event.originalEvent.deltaX * 10);

					// Cap delta.
						if (delta > 0)
							delta = Math.min(25, delta);
						else if (delta < 0)
							delta = Math.max(-25, delta);

					// Scroll.
						$this.scrollLeft( $this.scrollLeft() + delta );

				})
				.on('mouseenter', '.forward, .backward', function(event) {

					var $this = $(this),
						$inner = $this.siblings('.inner'),
						direction = ($this.hasClass('forward') ? 1 : -1);

					// Clear move interval.
						clearInterval(this._gallery_moveIntervalId);

					// Start interval.
						this._gallery_moveIntervalId = setInterval(function() {
							$inner.scrollLeft( $inner.scrollLeft() + (5 * direction) );
						}, 10);

				})
				.on('mouseleave', '.forward, .backward', function(event) {

					// Clear move interval.
						clearInterval(this._gallery_moveIntervalId);

				});

		// Lightbox.
			$('.gallery.lightbox')
				.on('click', 'a', function(event) {

					var $a = $(this),
						$gallery = $a.parents('.gallery'),
						$modal = $gallery.children('.modal'),
						$modalImg = $modal.find('img'),
						href = $a.attr('href');

					// Not an image? Bail.
						if (!href.match(/\.(jpg|gif|png|mp4)$/))
							return;

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Locked? Bail.
						if ($modal[0]._locked)
							return;

					// Lock.
						$modal[0]._locked = true;

					// Set src.
						$modalImg.attr('src', href);

					// Set visible.
						$modal.addClass('visible');

					// Focus.
						$modal.focus();

					// Delay.
						setTimeout(function() {

							// Unlock.
								$modal[0]._locked = false;

						}, 600);

				})
				.on('click', '.modal', function(event) {

					var $modal = $(this),
						$modalImg = $modal.find('img');

					// Locked? Bail.
						if ($modal[0]._locked)
							return;

					// Already hidden? Bail.
						if (!$modal.hasClass('visible'))
							return;

					// Lock.
						$modal[0]._locked = true;

					// Clear visible, loaded.
						$modal
							.removeClass('loaded')

					// Delay.
						setTimeout(function() {

							$modal
								.removeClass('visible')

							setTimeout(function() {

								// Clear src.
									$modalImg.attr('src', '');

								// Unlock.
									$modal[0]._locked = false;

								// Focus.
									$body.focus();

							}, 475);

						}, 125);

				})
				.on('keypress', '.modal', function(event) {

					var $modal = $(this);

					// Escape? Hide modal.
						if (event.keyCode == 27)
							$modal.trigger('click');

				})
				.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
					.find('img')
						.on('load', function(event) {

							var $modalImg = $(this),
								$modal = $modalImg.parents('.modal');

							setTimeout(function() {

								// No longer visible? Bail.
									if (!$modal.hasClass('visible'))
										return;

								// Set loaded.
									$modal.addClass('loaded');

							}, 275);

						});

})(jQuery);
