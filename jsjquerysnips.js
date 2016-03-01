//No conflict with condition, if jQuery is loaded in the page.
if(window.jQuery && typeof jQuery != 'undefined') {
	jQuery.noConflict();
	var $jq = jQuery.noConflict();
}
