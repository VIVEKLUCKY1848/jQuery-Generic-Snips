//No conflict with condition, if jQuery is loaded in the page.
if(window.jQuery && typeof jQuery != 'undefined') {
	jQuery.noConflict();
	var $jq = jQuery.noConflict();
}

//Or
if(window.jQuery && typeof jQuery != 'undefined') {
	jQuery.noConflict();
	var $jQk = jQuery.noConflict();
	var $jq = jQuery.noConflict();
	var $jk = jQuery.noConflict();
}

//Open fancybox on button click start
var $jq1 = jQuery.noConflict();
$jq1(document).ready(function() {
	$jq1('.fancybox').fancybox(
		{
			hideOnContentClick: true,
			width: 712,
			autoDimensions: true,
			type: 'iframe',
			showTitle: false,
			scrolling: 'yes',
			onComplete: function() {
				$jq1('#fancybox-frame').load(function() { // wait for frame to load and then gets it's height
						$jq1('#fancybox-content').height($jq1(this).contents().find('body').height()+30);
						$.fancybox.resize();
				});
			}
		}
	);
	$jq1('.fyb-btn').click(function() {
		$jq1(this).parent().find('a').trigger('click');
	});
});
//Open fancybox on button click end

//jQuery no conflict start
jQuery.noConflict();
(function( $ ) {
  $(function() {
    // More code using $ as alias to jQuery
  });
})(jQuery);
 
// Other code using $ as an alias to the other library
//jQuery no conflict end
