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
